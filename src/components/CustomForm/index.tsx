import React, { useImperativeHandle, useState } from 'react';
import { Form, FormItemProps, ModalProps, FormInstance } from 'antd';
import { Drawer, message, Modal } from 'antd';
import { postAction } from '@/services/global';
import FormBuilder from '@/components/CustomForm/FormBuilder';
import { FormControl, ModalType } from '@/typings';
import _ from 'lodash';

export type formatValuesType = (
  /**@param {any} [values={}]  form.getFieldsValue()获取的表单值*/
  values: any,
  /**@param {any} [record={}]  table当前行的record*/
  record: any,
  /**
   * @param {'add_submit' | 'edit_submit' | 'edit_echo'}  [type=any]
   * @description add_submit 添加模态框确定前触发
   * @description edit_submit 编辑模态框确定前触发
   * @description edit_echo 编辑模态框回显前触发
   */
  type: 'add_submit' | 'edit_submit' | 'edit_echo',
) => any;

interface IProps {
  title?: string; // 弹窗标题
  isShowTitlePrefix?: boolean;
  className?: string;
  modalConf?: ModalProps;
  modalType?: ModalType; // modal类型
  defaultLayout?: {
    labelCol: FormItemProps['labelCol'];
    wrapperCol: FormItemProps['wrapperCol'];
  };
  ref?: any;
  formList: FormControl[];
  formatValues?: formatValuesType;
  handleFieldsChange?: (
    changedFields: any,
    allFields: any,
    form: FormInstance,
  ) => void;
  otherRender?: () => React.ReactNode;
  onCancel?: () => void;
  otherClick?: () => void;
  /**
   * Promise.resolve({}) 放行
   * Promise.reject('error') 阻止
   * @returns {Promise<any>}
   */
  handleSubmitPreCallBack?: () => Promise<any>;
  onSubmit: {
    action: (data: any, isEdit: boolean) => Promise<any> | string;
    callback: () => void;
    failCallback?: () => void;
    completeCallback?: () => void;
  };
}

type IHandle = {
  form: FormInstance;
  handleAdd: (record: any) => void;
  handleEdit: (record: any) => void;
  handleCancel: () => void;
};

const CustomForm: React.ForwardRefRenderFunction<IHandle, IProps> = (
  props,
  ref,
) => {
  let { modalConf } = props;
  const {
    title,
    modalType,
    onSubmit,
    onCancel,
    formatValues,
    isShowTitlePrefix = true,
    otherRender,
    handleSubmitPreCallBack,
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
    setLoading(false);
    setRecord(defaultProps);
    setIsEdit(false);
    setVisible(true);
  };

  const handleEdit = (record: any) => {
    const values = form.getFieldsValue();
    setLoading(false);
    if (formatValues) {
      const formatRecord = formatValues(values, record, 'edit_echo');
      setRecord(formatRecord);
    } else {
      setRecord(record);
    }
    setIsEdit(true);
    setVisible(true);
  };

  const handleCancel = () => {
    setLoading(false);
    setVisible(false);
    setRecord(null);
    form.resetFields();
    if (onCancel) onCancel();
  };

  const handleFinish = async (e: any) => {
    if (handleSubmitPreCallBack) {
      const result = await handleSubmitPreCallBack();
      console.log(result);
      if (Object.keys(result).length > 0) return false;
    }

    if (e?.preventDefault) {
      e.preventDefault();
    }
    const values = form.getFieldsValue();
    form.validateFields().then(async () => {
      setLoading(true);
      const data = formatValues
        ? formatValues(values, record, isEdit ? 'edit_submit' : 'add_submit')
        : values;
      const { action, callback, failCallback, completeCallback } = onSubmit;
      try {
        const res = _.isString(action)
          ? await postAction(action as unknown as string, data)
          : await action(data, isEdit);
        if (res.code === 200) {
          const chinesePattern: RegExp = /^[\u4e00-\u9fa5]+$/;
          const messageStr: string = chinesePattern.test(res.msg)
            ? res.msg
            : '操作成功';
          message.success(messageStr);
          if (_.isFunction(callback)) callback();
          handleCancel();
        } else {
          message.error(res.msg);
          if (failCallback && _.isFunction(failCallback)) failCallback();
        }
        setLoading(false);
        if (completeCallback && _.isFunction(completeCallback))
          completeCallback();
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
      onFinish={handleFinish}
      {...otherProps}
    />
  );

  let Component = null;
  switch (modalType) {
    case ModalType.drawer:
      Component = Drawer;
      modalConf = {
        width: 600,
        onCancel: handleCancel,
        ...modalConf,
      };
      break;
    default:
      Component = Modal;
      modalConf = {
        width: 800,
        onOk: handleFinish,
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
      open={visible}
      destroyOnClose={true}
      {...modalConf}
    >
      {formBuilder}
      {otherRender && otherRender()}
    </Component>
  ) : (
    formBuilder
  );
};

export default React.memo(React.forwardRef(CustomForm));
