import { Col, Form, Modal, Row } from 'antd';
import _ from 'lodash';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { IModalTreeType, ITreeModalHandle, ITreeModalProps } from '.';
import styles from './index.less';
import Item from './Item';
import { filterTree, findCheckList, findChildrenId, findChildrenIds, getCurrentNodePath, treeToArray } from './utils';

const TreeModal = React.forwardRef<ITreeModalHandle, ITreeModalProps>((props, ref) => {
  //#region
  const {
    placeholder,
    options,
    defaultCheckKeys,
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
  const secondLevelIds = React.useMemo(() => {
    if (!options || options?.length == 0) return [];
    if (!options?.[0]?.children || options?.[0]?.children?.length == 0) return [];
    return [options?.[0]?.id].filter(Boolean);
  }, [options]);
  const originData = React.useMemo(() => treeToArray(_.cloneDeep(options)) || [], [options]);

  useEffect(() => {
    if (value && value?.length > 0) {
      setCheckedKeys(value);
    }
  }, [value]);

  useEffect(() => {
    if (Array.isArray(defaultCheckKeys)) setCheckedKeys(defaultCheckKeys);
  }, [defaultCheckKeys]);

  useEffect(() => {
    handleSetDefaultParams();
  }, [options]);

  const handleSetDefaultParams = async (type?: 'left' | 'right') => {
    let defaultExpandKeys: string[] = [];
    (options || []).forEach((item) => {
      if (item.id) defaultExpandKeys.push(item.id);
      if (item.children) {
        item.children.forEach((child) => {
          // if (child?.id) defaultExpandKeys.push(child.id);
        });
      }
    });
    if (!type) {
      setLeftExpandedKeys(defaultExpandKeys);
      setRightExpandedKeys(defaultExpandKeys);
    }
    if (type == 'left') {
      setLeftExpandedKeys(defaultExpandKeys);
    } else {
      setRightExpandedKeys(defaultExpandKeys);
    }
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
                  onCheck={(key) => setCheckedKeys(findChildrenIds(options, key as string[]) as string[])}
                  onClear={() => handleSetDefaultParams('left')}
                  setExpandedKeys={setLeftExpandedKeys}
                  filterIds={secondLevelIds}
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
                  onCheck={(checked, node: any) => {
                    const currentNodePath = getCurrentNodePath(_.cloneDeep(options), node.node.id);
                    const childrenList = originData
                      .filter((ele) => ele.pid == node.node.id)
                      .map((item) => item.id)
                      .filter(Boolean);

                    if (childrenList?.length === 0) {
                      setCheckedKeys(checkedKeys.filter((item) => !currentNodePath.includes(item)));
                    } else {
                      const childrenALlIds = findChildrenId(options, node.node.id);
                      setCheckedKeys(checkedKeys.filter((item) => !childrenALlIds.includes(item)));
                    }
                  }}
                  setExpandedKeys={setRightExpandedKeys}
                  onClear={() => handleSetDefaultParams('right')}
                  filterIds={secondLevelIds}
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
