import { CaretRightOutlined, SearchOutlined } from '@ant-design/icons';
import { Checkbox, Col, Collapse, Divider, Input, Row } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import _ from 'lodash';
import React, { ChangeEvent, useEffect, useMemo } from 'react';
import { ICheckboxListProps, ICheckBoxRecord } from './index';
import styles from './index.less';
const { Panel } = Collapse;

export interface ICheckModalItem extends Pick<ICheckboxListProps, 'options'> {
  title?: string;
  onChange: (value: ICheckBoxRecord[]) => void;
  values: ICheckBoxRecord[];
  isView: boolean;
}

const TransformItem = (props: ICheckModalItem) => {
  const { title = '', options, values, onChange, isView = false } = props;
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [activeKey, setActiveKey] = React.useState<string[]>();

  useEffect(() => {
    setActiveKey(_.union(values.map((item) => item.parent)));
  }, [values]);

  const newOptions: Record<string, ICheckBoxRecord[]> = useMemo(() => {
    const keys = _.union(values.map((item) => item.parent));
    const _options = values.filter((i) => (i.label as string)?.includes(searchValue));
    let newData: Record<string, ICheckBoxRecord[]> = {};
    keys.forEach((key) => {
      const item = _options.filter((i) => i.parent === key);
      if (item?.length != 0) {
        newData[key] = item;
      }
    });
    return newData;
  }, [searchValue, options, values]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.trim());
  };

  const handleCheckBoxOnChange = (currentValList: CheckboxValueType[], header: string) => {
    const newValues = values.map((item) => {
      return {
        ...item,
        isChecked: item.parent == header ? currentValList.includes(item.value) : item.isChecked,
      };
    }) as any as ICheckModalItem['values'];

    onChange?.(newValues);
  };

  const handelCheckAll = (e: CheckboxChangeEvent) => {
    const newValues = values.map((item) => {
      return {
        ...item,
        isChecked: e.target.checked,
      };
    }) as any as ICheckModalItem['values'];
    onChange?.(newValues);
  };

  const indeterminate =
    values?.filter((item) => item.isChecked || false).length < values?.length &&
    values?.filter((item) => item.isChecked || false).length > 0;

  return (
    <>
      <div className={styles.TransformItem}>
        <div className={styles.checkAll}>
          <div className={styles.checkAllLeft}>
            {!isView && (
              <Checkbox
                indeterminate={indeterminate}
                onChange={handelCheckAll}
                checked={
                  values?.filter((item) => item.isChecked || false).length === values?.length && values?.length != 0
                }
              />
            )}
            <span className={styles.title}>{title}</span>
          </div>
          <div className={styles.checkAllRight}>
            {values?.length || 0} /{options.length}
          </div>
        </div>
        <Divider className={styles.divider} />
        <div className={styles.searchBox}>
          <div className={styles.search}>
            <Input
              onChange={_.debounce(handleSearch, 500)}
              suffix={<SearchOutlined />}
              allowClear
              placeholder="请输入名字进行搜素"
            />
          </div>
        </div>
        <div className={styles.Collapse}>
          <Collapse
            activeKey={activeKey}
            onChange={(key) => setActiveKey(typeof key === 'string' ? [key] : key)}
            bordered={false}
            ghost
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          >
            {(Object.keys(newOptions) || []) &&
              Object.entries(newOptions).map(([header, list]) => (
                <Panel header={header} key={header}>
                  <Checkbox.Group
                    onChange={(currentValList) => handleCheckBoxOnChange(currentValList, header)}
                    value={values?.filter((item) => item.isChecked || false)?.map((item) => item.value)}
                  >
                    <Row>
                      {list.map((item) => (
                        <Col span={24} key={item.value as React.Key}>
                          {isView ? (
                            <span className={styles.view}>{item.label ?? '--'}</span>
                          ) : (
                            <Checkbox value={item.value}>{item.label ?? '--'}</Checkbox>
                          )}
                        </Col>
                      ))}
                    </Row>
                  </Checkbox.Group>
                </Panel>
              ))}
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default TransformItem;
