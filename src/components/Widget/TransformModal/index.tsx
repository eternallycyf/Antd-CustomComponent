import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, CheckboxOptionType, Col, Form, Modal, ModalProps, Row } from 'antd';
import _ from 'lodash';
import React, { useImperativeHandle, useState } from 'react';
import styles from './index.less';
import TransformItem from './Item';

function sortBy<T extends any[]>(data: T, key: string, idOrder: Array<string | number>): T {
  const orderMap = Object.fromEntries(idOrder.map((id, i) => [id, i])) as any as T;
  return data.sort((a, b) => orderMap[a[key]] - orderMap[b[key]]);
}

const renderBtn = (onClick: () => void, text = '选择') => {
  return (
    <Button onClick={onClick} className={styles['parmary-btn']} size="small" type="default">
      {text ?? '--'}
    </Button>
  );
};

//#region
export interface ICheckBoxRecord extends CheckboxOptionType {
  parent: string;
  parentId: string | number;
  isChecked?: boolean;
  [key: string]: any;
}

/**
 * @description [parantId, value]
 */
export type ICheckRecord = [string, string];

export interface IModalOnChangeValues {
  value: ICheckBoxRecord[] | [];
  leftValues: ICheckBoxRecord[] | [];
  rightValues: ICheckBoxRecord[] | [];
}

type IModalOnChange = (value: IModalOnChangeValues) => void;

export interface ICheckboxListProps {
  title?: [string, string];
  CheckModalRef?: React.Ref<IHandle>;
  children?: React.ReactNode | ((value: ICheckboxContext) => React.ReactNode);
  options: ICheckBoxRecord[];
  value?: IModalOnChangeValues;
  onChange?: IModalOnChange;
  modalProps?: ModalProps;
  onOk?: IModalOnChange;
  onCancel?: IModalOnChange;
}

type IHandle = {};

type IBaseCheckModal = React.ForwardRefRenderFunction<IHandle, ICheckboxListProps>;

export type ICheckModal = IBaseCheckModal & {
  Item: typeof TransformItem;
};

interface ICheckboxContext extends Pick<ICheckboxListProps, 'value'> {
  handleOpenModal?: () => void;
  rightValues?: ICheckBoxRecord[];
  leftValues?: ICheckBoxRecord[];
}
//#endregion

const CheckModal: ICheckModal = (props) => {
  //#region
  const {
    value = {
      leftValues: [],
      rightValues: [],
      value: [],
    },
    children,
    onChange,
    options,
    onOk,
    onCancel,
    modalProps,
    CheckModalRef,
    title = ['', ''],
  } = props;

  const CheckboxContext = React.createContext<ICheckboxContext>({});
  const [visible, setVisible] = useState<boolean>(false);
  const [leftValues, setLeftValues] = useState<ICheckBoxRecord[]>(options);
  const [rightValues, setRightValues] = useState<ICheckBoxRecord[]>([]);

  useImperativeHandle(CheckModalRef, () => ({
    handleOpenModal,
  }));
  //#endregion

  //#region
  const handleOpenModal = () => setVisible(true);

  const handleOnOkModal = () => {
    const params = {
      value: rightValues,
      leftValues: leftValues,
      rightValues: rightValues,
    };
    triggerChange(params);
    setVisible(false);
    onOk && onOk(params);
  };

  const handleOnCancelModal = () => {
    setVisible(false);
    if (value?.value?.length == 0 && value?.leftValues?.length == 0 && value?.rightValues?.length == 0) {
      setLeftValues(options);
      setRightValues([]);
      onCancel && onCancel(value);
    } else {
      setRightValues(value.rightValues);
      setLeftValues(value.leftValues);
      onCancel && onCancel(value);
    }
  };

  const triggerChange = (changedValue: any) => {
    onChange?.(changedValue);
  };

  const handleCheckBoxOnChange = (values: ICheckBoxRecord[], type: 'left' | 'right') => {
    if (type === 'left') {
      setLeftValues(values);
    }

    if (type === 'right') {
      setRightValues(values);
    }
  };

  const handleSelectOrRemoveKeys = (type: 'select' | 'remove') => {
    if (type == 'select') {
      const newLeftValues = leftValues.filter((item) => !item.isChecked);
      let newRightValues: ICheckBoxRecord[] = leftValues
        .filter((item) => item.isChecked)
        .map((item) => ({ ...item, isChecked: false }));
      if (newRightValues?.length == 0) return;
      setLeftValues(newLeftValues);
      // 根据options初始顺序排序 && 保留原有值
      newRightValues = sortBy<ICheckBoxRecord[]>(
        _.intersectionBy([...rightValues, ...newRightValues], 'value'),
        'parent',
        _.intersection(options.map((item) => item.parent)),
      );
      setRightValues(newRightValues);
    }
    if (type == 'remove') {
      let newLeftValues: ICheckBoxRecord[] = rightValues
        .filter((item) => item.isChecked)
        .map((item) => ({ ...item, isChecked: false }));
      const newRightValues = rightValues.filter((item) => !item.isChecked);
      if (newLeftValues?.length == 0) return;
      // 根据options初始顺序排序 && 保留原有值
      newLeftValues = sortBy<ICheckBoxRecord[]>(
        _.intersectionBy([...leftValues, ...newLeftValues], 'value'),
        'parent',
        _.intersection(options.map((item) => item.parent)),
      );
      setLeftValues(newLeftValues);
      setRightValues(newRightValues);
    }
  };

  //#endregion

  return (
    <>
      <Form.Item className={styles['TransformModal']} style={{ marginBottom: 0 }}>
        <CheckboxContext.Provider value={{ value, rightValues, leftValues, handleOpenModal }}>
          <CheckboxContext.Consumer>
            {typeof children === 'function' ? children : () => renderBtn(handleOpenModal)}
          </CheckboxContext.Consumer>
        </CheckboxContext.Provider>
        <Form.Item noStyle>
          <Modal
            confirmLoading={false}
            open={visible}
            okText="确认"
            cancelText="取消"
            onOk={handleOnOkModal}
            onCancel={handleOnCancelModal}
            forceRender
            centered
            maskClosable
            getContainer={false}
            className={styles['modal']}
            width={600}
            {...modalProps}
          >
            <Row gutter={16} align="middle" justify="space-between">
              <Col>
                <TransformItem
                  title={title?.[0]}
                  options={options}
                  values={leftValues}
                  onChange={(_value) => handleCheckBoxOnChange(_value, 'left')}
                />
              </Col>
              <Col>
                <Row gutter={[20, 20]} justify="center" align="middle" style={{ flexDirection: 'column' }}>
                  <Col>
                    <Button
                      disabled={leftValues.filter((item) => item.isChecked).length == 0}
                      onClick={() => handleSelectOrRemoveKeys('select')}
                      size="small"
                      icon={<RightOutlined />}
                    />
                  </Col>
                  <Col>
                    <Button
                      disabled={rightValues.filter((item) => item.isChecked).length == 0}
                      onClick={() => handleSelectOrRemoveKeys('remove')}
                      size="small"
                      icon={<LeftOutlined />}
                    />
                  </Col>
                </Row>
              </Col>
              <Col>
                <TransformItem
                  title={title?.[1]}
                  options={options}
                  values={rightValues}
                  onChange={(_value) => handleCheckBoxOnChange(_value, 'right')}
                />
              </Col>
            </Row>
          </Modal>
        </Form.Item>
      </Form.Item>
    </>
  );
};

CheckModal.Item = TransformItem;

export default React.forwardRef(CheckModal as ICheckModal);
