import { SearchOutlined } from '@ant-design/icons';
import { Collapse, Divider, Empty, Input, Tree } from 'antd';
import _ from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import { ITreeModalItemProps } from '.';
import styles from './index.less';
import { getSearchData } from './utils';
const { Panel } = Collapse;

const TransformItem = (props: ITreeModalItemProps) => {
  const {
    title = '',
    options,
    placeholder = '请输入',
    isView = false,
    setExpandedKeys,
    onExpand,
    expandedKeys,
    onCheck,
    checkedKeys,
    style,
    onClear,
  } = props;

  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    setSearchValue('');
  }, [options]);

  const treeData = useMemo(() => {
    if (!options || options?.length == 0) return [];
    let expandList: string[] = [];

    if (!searchValue) return options;
    const newData = getSearchData(expandList, searchValue, _.cloneDeep(options));
    setExpandedKeys(expandList);
    expandList = [];
    return newData;
  }, [options, searchValue]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (!e.target.value && onClear) onClear();
  };

  return (
    <>
      <div className={styles.TreeModalItem} style={style}>
        <div className={styles.header}>
          <div>
            <div className={styles.title}>{typeof title == 'function' ? title(checkedKeys as any) : title}</div>
          </div>
          <Divider className={styles.divider} />
        </div>
        <div className={styles.content}>
          <div className={styles.searchBox}>
            <div className={styles.search}>
              <Input
                key={JSON.stringify(options)}
                style={{ height: 26 }}
                placeholder={placeholder}
                onChange={handleSearch}
                suffix={<SearchOutlined />}
                allowClear
              />
            </div>
          </div>
          <div>
            {options?.length == 0 ? (
              <Empty />
            ) : (
              <Tree
                titleRender={(e: any) => {
                  if (e.flag == '2')
                    return (
                      <>
                        {e?.name}
                        <span style={{ color: '#FA6A0A', marginLeft: 6 }}>&nbsp;即将到期</span>
                      </>
                    );
                  return e?.name;
                }}
                key="all"
                height={320}
                // checkStrictly
                fieldNames={{ title: 'name', key: 'id' }}
                checkable
                onExpand={onExpand as any}
                expandedKeys={expandedKeys}
                onCheck={onCheck}
                checkedKeys={checkedKeys}
                treeData={treeData as any[]}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TransformItem;
