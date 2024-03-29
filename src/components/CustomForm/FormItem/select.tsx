import React, { useEffect, useImperativeHandle, useState } from 'react';
import { Select, Spin, Empty } from 'antd';
import _ from 'lodash';
import request from '@/utils/request';
import { IControlProps } from '@/typings';
const { OptGroup, Option } = Select;

const SelectControl: React.FC<IControlProps> = React.forwardRef((defaultProps, ref) => {
  const {
    form,
    name,
    record,
    dict = [],
    dictConfig,
    fetchConfig = {} as IControlProps['fetchConfig'],
    renderItem,
    onChange,
    isSearch, //支持输入
    editValue,
    isNeedAll,
    ...controlProps
  } = defaultProps;
  const { group } = controlProps;
  const { apiUrl, method = 'post', params, searchKey = 'search', dataPath = 'data', initDictFn, firstFetch = true } = fetchConfig!;

  const { textKey, valueKey } = dictConfig!;
  const [fetching, setFetching] = useState(false);
  const [dataSource, setDataSource]: any[] = useState(dict);
  const [extraParams, setExtraParams]: any = useState(null);

  useEffect(() => {
    const value = record ? record[editValue] || '' : '';
    if (apiUrl && !initDictFn) {
      if (!params) {
        if (firstFetch) {
          fetchData(value);
        }
      }
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
    if (!apiUrl && !initDictFn && !_.isEqual(dict, dataSource)) setDataSource(dict);
  }, [dict]);

  useImperativeHandle(ref, () => ({}));

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
    const valItem = dataSource.find((item: any) => String(item[valueKey]) === String(value));
    if (onChange) onChange(value, event, valItem);
  };

  const props: any = {
    filterOption: false, // 是否根据输入项进行筛选
    ...controlProps,
  };

  if (apiUrl) {
    props.showSearch = true;
    props.onSearch = fetchData;
    props.notFoundContent = fetching ? <Spin size="small" /> : undefined;
  }

  const handleClick = () => {
    if (!params && !firstFetch) {
      if (dataSource.length === 0) {
        const value = record ? record[editValue] || '' : '';
        fetchData(value);
      }
    }
  };

  function dataAddAllItem(data: any) {
    return isNeedAll ? [{ [textKey]: '全部', [valueKey]: '' }, ...data] : data;
  }

  return (
    <Select
      style={{ width: '100%' }}
      {...props}
      showArrow={props?.showArrow ?? true}
      onChange={handleChange}
      onClick={handleClick}
      notFoundContent={
        props.notFoundContent || (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={require('@/assets/empty/card-empty.png')} />
            <span style={{ color: '#b3B8c2', fontSize: 12 }}>暂无数据</span>
          </div>
        )
      }
    >
      {group
        ? dataAddAllItem(dataSource).map((dic: any) => (
            <OptGroup label={dic[textKey]} key={dic[valueKey]}>
              {dic.children.map((subItem: any) => (
                <Option value={String(subItem[valueKey])} key={subItem[valueKey]} disabled={dic.disabled || false}>
                  {(renderItem && renderItem(subItem)) || subItem[textKey]}
                </Option>
              ))}
            </OptGroup>
          ))
        : dataAddAllItem(dataSource).map((dic: any) => (
            <Option
              key={String(dic[valueKey])}
              value={String(dic[valueKey])}
              title={dic[textKey]}
              label={dic[textKey]}
              option={dic}
              disabled={dic.disabled || false}
            >
              {(renderItem && renderItem(dic)) || dic[textKey]}
            </Option>
          ))}
    </Select>
  );
});

SelectControl.defaultProps = {
  placeholder: '请选择',
  dictConfig: { textKey: 'text', valueKey: 'value' },
  optionFilterProp: 'children',
  filterOption: (input: any, option: any) => {
    const { children = '' } = option;
    return children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  },
  allowClear: true,
};

export default React.memo(SelectControl);
