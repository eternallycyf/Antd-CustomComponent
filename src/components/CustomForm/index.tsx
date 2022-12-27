import React, { useImperativeHandle, useState } from 'react';
import { Form } from 'antd';
import '@/assets/styles/compatible.css';
import { Drawer, message, Modal, Table } from 'antd';
import { postAction } from '@/services/global';
import FormBuilder from '@/components/CustomForm/FormBuilder';
import { ModalType } from '@/typings';
import _ from 'lodash';

interface IProps {
  title?: string; // 弹窗标题
  modalConf?: any;
  modalType?: ModalType; // modal类型
  formatValues?: (values: any, isEdit: any) => any;
  isShowTitlePrefix?: string;
  [propName: string]: any;
}

const CustomForm: React.FC<IProps> = React.forwardRef((props, ref) => {
  let { modalConf } = props;
  const {
    title,
    modalType,
    onSubmit,
    onCancel,
    formatValues,
    isShowTitlePrefix = true,
    isTable,
    otherRender,
    ...otherProps
  } = props;
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [record, setRecord] = useState(null);
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    form,
    handleAdd,
    handleEdit,
    handleCancel,
  }));

  const handleAdd = (defaultProps: any) => {
    setRecord(defaultProps);
    setIsEdit(false);
    setVisible(true);
  };

  const handleEdit = (record: any) => {
    setRecord(record);
    setIsEdit(true);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setRecord(null);
    form.resetFields();
    if (onCancel) onCancel();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const values = form.getFieldsValue();
    form.validateFields().catch(async () => {
      setLoading(true);
      const data = formatValues ? formatValues(values, record) : values;
      const { action, callback, failCallback, completeCallback } = onSubmit;
      try {
        const res = _.isString(action)
          ? await postAction(action, data)
          : await action(data, isEdit);
        if (res.code === 0) {
          const chinesePattern: RegExp = /^[\u4e00-\u9fa5]+$/;
          const messageStr: string = chinesePattern.test(res.msg)
            ? res.msg
            : '操作成功';
          message.success(messageStr);
          if (_.isFunction(callback)) callback();
          handleCancel();
        } else {
          message.error(res.msg);
          if (_.isFunction(failCallback)) failCallback();
        }
        setLoading(false);
        if (_.isFunction(completeCallback)) completeCallback();
      } catch (e) {
        setLoading(false);
      }
    });
  };

  const onFieldsChange = (changedFields: any, allFields: any) => {
    const { handleFieldsChange } = props;
    if (handleFieldsChange) {
      handleFieldsChange(changedFields, allFields, form);
    }
  };

  const formBuilder = (
    <FormBuilder
      form={form}
      onFieldsChange={onFieldsChange}
      record={record}
      loading={loading}
      modalType={modalType}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
      {...otherProps}
    />
  );

  let Component = null;
  switch (modalType) {
    case ModalType.drawer:
      Component = Drawer;
      modalConf = {
        width: 600,
        onClose: handleCancel,
        ...modalConf,
      };
      break;
    default:
      Component = Modal;
      modalConf = {
        width: 800,
        onOk: handleSubmit,
        onCancel: handleCancel,
        confirmLoading: loading,
        ...modalConf,
      };
  }

  if (!visible && modalType) return null;
  const modalTitle: string | undefined = isShowTitlePrefix
    ? `${isEdit ? '编辑' : '新增'} ${title}`
    : title;

  return modalType && modalType !== ModalType.normal ? (
    <Component
      title={modalTitle}
      visible={visible}
      destroyOnClose={true}
      {...modalConf}
    >
      {formBuilder}
      {isTable && otherRender && otherRender()}
    </Component>
  ) : (
    formBuilder
  );
});

export default React.memo(CustomForm);
