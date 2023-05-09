import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Select, Checkbox, Row, Col, Modal, ModalProps, FormInstance, Tag, Divider } from 'antd';
import { useMap } from 'react-use';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import styles from './index.less';

interface ICheckboxList {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface ICheckboxListProps {
  form: FormInstance;
  name: string;
  options: Record<string, ICheckboxList[]>;
  value?: Record<string, ICheckboxList[] | any>;
  onChange?: (value: any) => void;
  modalProps?: ModalProps;
  onOk?: (value: any) => void;
  onCancel?: () => void;
}

interface IRenderCheckBox {
  label: string;
  value: ICheckboxList[];
  options: ICheckboxList[];
  onChange: (label: string, list: ICheckboxList[], options: IRenderCheckBox['options']) => void;
}

const RenderCheckbox = (props: IRenderCheckBox) => {
  const { label, value, options, onChange } = props;

  const handleCheckBoxOnChange = (currentValList: CheckboxValueType[]) => {
    const newValList = currentValList.map((item) => options.find((ele) => ele.value === item)!);
    onChange(label, newValList, options);
  };

  return (
    <Form.Item label={label}>
      <Checkbox.Group
        options={options}
        onChange={handleCheckBoxOnChange}
        value={(value || [])?.map((item) => item.value)}
        style={{ width: '100%' }}
      >
        <Row>
          {options.map((item) => (
            <Col span={8} key={item.value}>
              <Checkbox value={item.value}>{item.label ?? '--'}</Checkbox>
            </Col>
          ))}
        </Row>
      </Checkbox.Group>
    </Form.Item>
  );
};

const CheckModal: React.FC<ICheckboxListProps> = (props) => {
  const { form, name, value = {}, onChange, options, onOk, onCancel, modalProps } = props;
  const [list, { set: setList, setAll, remove, reset }] = useMap(value);
  const [visible, setVisible] = useState<boolean>(false);
  const [cacheList, setCacheList] = useState<Record<string, ICheckboxList[]>>(value);

  const triggerChange = (changedValue: ICheckboxListProps['value']) => {
    form.setFieldsValue({ [name]: changedValue?.value });
    onChange?.(changedValue);
  };

  const handleCheckBoxOnChange: IRenderCheckBox['onChange'] = (label, arr, options) => {
    const newList = { ...list };
    newList[label] = arr || [];
    setAll(newList);
    triggerChange({ [label]: arr, value: newList });
  };

  const handleOnOkModal = () => {
    if (form) {
      form.setFieldsValue({ [name]: list });
    }
    setCacheList(list);
    setVisible(false);
    onOk && onOk(list);
  };

  const handleOnCancelModal = () => {
    setVisible(false);
    setAll(cacheList);
    onCancel && onCancel();
  };

  const handleSelect = () => {
    setVisible(true);
  };

  const handelOnClose = (label: string, itemLabel: string) => {
    const newList = { ...list };
    const arr = (list[label] || []).filter((item: ICheckboxList) => item.label !== itemLabel);
    newList[label] = arr || [];
    setAll(newList);
    setCacheList(newList);
    triggerChange({ [label]: arr, value: newList });
  };

  const renderContent = () => {
    if (!list) return null;
    let arr: any = [];
    Object.entries(list).map(([key, val]) => {
      val?.length !== 0 && arr.push(val);
    });
    if (!arr.length) return null;

    const newList: Record<string, ICheckboxList[]> = Object.entries(list).reduce((acc, [key, val]) => {
      if (val?.length !== 0) {
        acc[key] = val;
      }
      return acc;
    }, {});

    return (
      <>
        {newList &&
          Object.entries(newList).map(([label, value]) => {
            return (
              <Form.Item label={label} key={label}>
                <Row gutter={[4, 4]}>
                  {value?.map((item) => (
                    <Col key={item.value}>
                      <Tag
                        className={styles['parmary-tag']}
                        closable
                        onClose={() => handelOnClose(label, item.label)}
                        key={item.value}
                      >
                        {item.label}
                      </Tag>
                    </Col>
                  ))}
                </Row>
              </Form.Item>
            );
          })}
      </>
    );
  };

  return (
    <Form.Item className={styles['checkModal']}>
      <Button onClick={handleSelect} className={styles['parmary-btn']} size="small" type="default">
        选择
      </Button>
      <div className={styles['expandContent']}>{renderContent()}</div>
      <Modal
        confirmLoading={false}
        title="标签权限"
        open={visible}
        okText="确认"
        cancelText="取消"
        onOk={handleOnOkModal}
        onCancel={handleOnCancelModal}
        destroyOnClose
        centered
        maskClosable
        getContainer={false}
        className={styles['modal']}
        {...modalProps}
      >
        <Divider style={{ margin: 12 }} />
        {Object.entries(list).map(([label, value]) =>
          RenderCheckbox({ label, value, options: options[label], onChange: handleCheckBoxOnChange }),
        )}
      </Modal>
    </Form.Item>
  );
};

export default CheckModal;
