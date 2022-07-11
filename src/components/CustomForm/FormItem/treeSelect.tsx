import React, { useEffect, useState } from 'react';
import { TreeSelect } from 'antd';
import _ from 'lodash';
import { IControlProps } from '@/typings';
import request from '@/utils/request';
import { arrayToTree } from '@/utils/util';

export interface ISelectTree extends IControlProps {
  treeList: any[];
}

const treeSelectControl: React.FC<ISelectTree> = React.forwardRef(
  (
    {
      form,
      name,
      style,
      record,
      treeList,
      fetchConfig = {},
      formatRootId,
      treeDataSimpleMode, // Array<{ id: string, pId: string, rootPId: string }>
      ...controlProps
    }: any,
    ref,
  ) => {
    const {
      apiUrl,
      method = 'post',
      params,
      searchKey = 'search',
      dataPath = 'data',
      initDictFn,
    } = fetchConfig;

    const [treeData, setTreeData] = useState(treeList);

    const fetchData = _.debounce(async (value = '') => {
      const field = method.toLowerCase() === 'get' ? 'params' : 'data';
      const searchParams = { ...params };
      if (searchKey) {
        searchParams[searchKey] = value;
      }

      const res = await request(apiUrl, {
        method,
        [field]: searchParams,
      });

      try {
        if (treeDataSimpleMode) setTreeData(_.get(res, dataPath) || []);
        if (!treeDataSimpleMode) {
          const dataSource = _.get(res, dataPath) || [];
          const treeData = !formatRootId
            ? dataSource
            : arrayToTree(dataSource, formatRootId) || [];
          setTreeData(treeData);
        }
      } catch (e) {
        setTreeData([]);
      }
    }, 300);

    useEffect(() => {
      if (apiUrl && !initDictFn) fetchData();
    }, []);

    useEffect(() => {
      if (initDictFn) {
        const initDict = initDictFn(record);
        setTreeData(initDict);
      }
    }, [initDictFn, record]);

    if (apiUrl) {
      controlProps.showSearch = true;
      controlProps.onSearch = fetchData;
    }

    return (
      <TreeSelect
        treeData={treeData}
        style={{ ...style, width: '100%' }}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        {...controlProps}
      />
    );
  },
);

treeSelectControl.defaultProps = {
  showLine: true,
  allowClear: true,
  showSearch: true,
  treeDefaultExpandAl1: true,
  placeholder: '请选择',
  treeNodeFilterProp: 'title',
  labelInValue: true,
};

export default treeSelectControl;
