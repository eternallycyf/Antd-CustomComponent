import React, { useEffect, useState } from 'react';
import { Select, Spin } from 'antd';
import _ from 'lodash';
import request from '@/utils/request';
import { IControlProps } from '@/typings';
const { OptGroup, Option } = Select;

const SelectControl: React.FC<IControlProps> = React.forwardRef(
  (
    {
      form,
      name,
      record,
      dict = [],
      dictConfig,
      fetchConfig = {},
      renderItem,
      onChange,
      isSearch, //支持输入
      editValue,
      ...controlProps
    }: any,
    ref,
  ) => {
    const { group } = controlProps;
    const {
      apiUrl,
      method = 'post',
      params,
      searchKey = 'search',
      dataPath = 'data',
      initDictFn,
    } = fetchConfig;

    const { textKey, valueKey } = dictConfig;
    const [fetching, setFetching] = useState(false);
    const [dataSource, setDataSource]: any[] = useState(dict);
    const [extraParams, setExtraParams]: any = useState(null);

    useEffect(() => {
      const value = record ? record[editValue] || '' : '';
      if (apiUrl && !initDictFn) {
        if (!params) fetchData(value);
        if (params && !_.isEqual(params, extraParams)) {
          setExtraParams(params);
          fetchData(value);
        }
      }
    }, [params]);

    useEffect(() => {
      if (initDictFn) {
        const initDict = initDictFn(record);
        setDataSource(initDict);
      }
    }, [record]);

    useEffect(() => {
      if (!apiUrl && !initDictFn && !_.isEqual(dict, dataSource))
        setDataSource(dict);
    }, [dict]);

    const fetchData = _.debounce(async (value = '') => {
      setFetching(true);

      const field = method.toLowerCase() === 'get' ? 'params' : 'data';
      const searchParams = { ...params };

      if (searchKey) {
        searchParams[searchKey] = value;
      }

      const res = await request(apiUrl, {
        method,
        [field]: searchParams,
      });

      const list = _.get(res, dataPath);
      setFetching(false);

      try {
        setDataSource(_.get(res, dataPath) || []);
      } catch (e) {
        setDataSource([]);
      }

      if (isSearch) {
        if (!list || list.length < 1) {
          setDataSource([{ name: value }]); // 设置默认值
        }
      }
    }, 300);

    const handleChange = (value: any, event: any) => {
      const valItem = dataSource.find(
        (item: any) => String(item[valueKey]) == String(value),
      );
      onChange && onChange(value, event, valItem);
    };

    const props: any = {
      allowClear: true,
      filterOption: false, // 是否根据输入项进行筛选
      ...controlProps,
    };

    if (apiUrl) {
      props.showSearch = true;
      props.onSearch = fetchData;
      props.notFoundContent = fetching ? <Spin size="small" /> : undefined;
    }

    return (
      <Select style={{ width: '100%' }} {...props} onChange={handleChange}>
        {group
          ? dataSource.map((dic: any) => (
              <OptGroup label={dic[textKey]} key={dic[valueKey]}>
                {dic.children.map((subItem: any) => (
                  <Option
                    value={String(subItem[valueKey])}
                    key={subItem[valueKey]}
                  >
                    {(renderItem && renderItem(subItem)) || subItem[textKey]}
                  </Option>
                ))}
              </OptGroup>
            ))
          : dataSource.map((dic: any) => (
              <Option
                key={String(dic[valueKey])}
                value={String(dic[valueKey])}
                title={dic[textKey]}
                option={dic}
              >
                {(renderItem && renderItem(dic)) || dic[textKey]}
              </Option>
            ))}
      </Select>
    );
  },
);

SelectControl.defaultProps = {
  placeholder: '请选择',
  dictConfig: { textKey: 'text', valueKey: 'value' },
  optionFilterProp: 'children',
  filterOption: (input: any, option: any) => {
    return (
      option.props.children.toLowerCase().index0f(input.toLowerCase()) >= 0
    );
  },
};

export default React.memo(SelectControl);
