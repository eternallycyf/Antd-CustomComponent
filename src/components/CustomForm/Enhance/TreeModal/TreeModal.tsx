import { Col, Form, Modal, Row } from 'antd';
import _ from 'lodash';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { IModalTreeType, ITreeModalHandle, ITreeModalProps } from '.';
import styles from './index.less';
import Item from './Item';
import { filterTree, findCheckList } from './utils';

const TreeModal = React.forwardRef<ITreeModalHandle, ITreeModalProps>((props, ref) => {
  //#region
  const {
    placeholder,
    options,
    defaultCheckKeys = [],
    value = [],
    children,
    preChildren,
    onChange,
    onOk,
    onCancel,
    modalProps,
    title = ['', ''],
    type = 'check',
    disabledKeys = [],
  } = props;
  const isView = type == 'view';
  const [visible, setVisible] = useState<boolean>(false);
  const [checkedKeys, setCheckedKeys] = useState<string[]>(value);
  const [leftExpandedKeys, setLeftExpandedKeys] = useState<string[]>([]);
  const [rightExpandedKeys, setRightExpandedKeys] = useState<string[]>([]);

  const rightOptions = React.useMemo(() => filterTree(_.cloneDeep(options), checkedKeys), [options, checkedKeys]);

  useEffect(() => {
    if (value && value?.length > 0) {
      setCheckedKeys(value);
    }
  }, [value]);

  useEffect(() => {
    if (defaultCheckKeys) setCheckedKeys(defaultCheckKeys);
  }, [defaultCheckKeys]);

  useEffect(() => {
    handleSetDefaultParams();
  }, [options]);

  const handleSetDefaultParams = async () => {
    let defaultExpandKeys: string[] = [];
    (options || []).forEach((item) => {
      if (item.id) defaultExpandKeys.push(item.id);
      if (item.children) {
        item.children.forEach((child) => {
          // if (child?.id) defaultExpandKeys.push(child.id);
        });
      }
    });
    setLeftExpandedKeys(defaultExpandKeys);
    setRightExpandedKeys(defaultExpandKeys);
  };

  const handleOpenModal = () => {
    handleSetDefaultParams();
    setVisible(true);
  };

  const handleOnCancelModal = () => {
    if (onCancel) onCancel(checkedKeys);
    setVisible(false);
  };

  const handleOnOkModal = () => {
    if (onChange) onChange?.(checkedKeys.filter((item) => !disabledKeys.includes(item)));
    if (onOk) onOk(checkedKeys);
    setVisible(false);
  };

  const handleOnExpand = (type: IModalTreeType, expandedKeysValue: React.Key[]) => {
    if (type == 'left') {
      setLeftExpandedKeys(expandedKeysValue as string[]);
    } else {
      setRightExpandedKeys(expandedKeysValue as string[]);
    }
  };

  /**
   * 为了解决 "当选中了两个一级下的数据时 右侧点击一级1下面的checkbox 会将其他一级下的所有checkbox选中" 的问题
   * @param currentCheckKeys
   * @param option
   */
  const handleCheckWithCurrent = (currentCheckKeys: string[], option: any) => {
    const lastCheckList = findCheckList(checkedKeys as string[], options || []).filter((ele) => ele.priceType != option.node?.priceType);
    const checkList = findCheckList(currentCheckKeys as string[], options || []) || [];
    let currentCheckList = checkList.filter((item) => item.priceType == option.node?.priceType);
    currentCheckList = [...currentCheckList, ...lastCheckList];
    setCheckedKeys(currentCheckList.map((item) => item.id));
  };

  useImperativeHandle(ref, () => ({
    handleOpenModal,
    setCheckedKeys,
  }));
  const contextProvider = { handleOpenModal, checkedKeys, rightOptions, setCheckedKeys };

  return (
    <>
      <Form.Item className={styles['TreeModal']} style={{ marginBottom: 0 }}>
        <div>{typeof children == 'function' ? children(contextProvider) : children}</div>
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
            width={800}
            {...modalProps}
          >
            <div>{typeof preChildren == 'function' ? preChildren(contextProvider) : preChildren}</div>
            <Row gutter={0} align="top" justify="start">
              <Col>
                <Item
                  style={{ borderRight: 'none' }}
                  placeholder={placeholder?.[0]}
                  key="left"
                  type="left"
                  title={title?.[0]}
                  isView={isView}
                  options={options}
                  expandedKeys={leftExpandedKeys}
                  checkedKeys={checkedKeys}
                  onExpand={(e) => handleOnExpand('left', e as any as string[])}
                  onCheck={(key) => setCheckedKeys(key as string[])}
                  setExpandedKeys={setLeftExpandedKeys}
                />
              </Col>
              <Col>
                <Item
                  placeholder={placeholder?.[0]}
                  key="right"
                  type="right"
                  title={title?.[1]}
                  isView={isView}
                  options={rightOptions}
                  expandedKeys={rightExpandedKeys}
                  checkedKeys={checkedKeys}
                  onExpand={(e) => handleOnExpand('right', e as any as string[])}
                  onCheck={handleCheckWithCurrent as any}
                  setExpandedKeys={setRightExpandedKeys}
                />
              </Col>
            </Row>
          </Modal>
        </Form.Item>
      </Form.Item>
    </>
  );
});

export default TreeModal;
