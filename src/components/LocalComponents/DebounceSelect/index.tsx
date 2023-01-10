import { request } from 'umi';
import projectConfig from '@/config/projectConfig';
import DebounceSelect from './DebounceSelect';
import Select from 'antd';
import React, { useState, useEffect } from 'react';
const { apiPrefix } = projectConfig;

interface Iprops {
  placeholder?: any;
  fetchConfig?: {
    method?: 'get' | 'post';
    dictConfig?: { label: string; value: string; key?: string };
    params?: any;
    data?: string;
    url?: string;
    searchKey?: string;
    dataPath?: string;
    renderItem?: (
      data: any,
    ) => { label: string; value: string | number; key?: string | number };
    firstInit?: boolean;
    openDebounceSearch?: boolean;
    dict?: any;
  };
  [props: string]: any;
}

export function baseFetchFn({
  method = 'get',
  params = {},
  data = {},
  url = '',
  searchKey = 'kw',
  searchValue = '',
}): Promise<any> {
  const methodType = method.toLocaleLowerCase() == 'get' ? 'get' : 'post';
  const paramsObj =
    methodType == 'get'
      ? { params: { ...params, [searchKey]: searchValue } }
      : { data: { ...data, [searchKey]: searchValue } };
  return request[methodType](`${url}`, {
    ...paramsObj,
  });
}

const App: React.FC<Iprops> = props => {
  const { placeholder = '请选择', fetchConfig = {}, ...restProps } = props;
  const [options, setOptions] = useState<any[]>([]);
  let newFetchConfig = {
    method: fetchConfig?.method || 'get',
    dictConfig: fetchConfig?.dictConfig
      ? fetchConfig.dictConfig
      : { label: 'label', value: 'value', key: 'key' },
    params: fetchConfig?.params || {},
    data: fetchConfig?.data || {},
    url: fetchConfig?.url || '',
    searchKey: fetchConfig?.searchKey || 'kw',
    dataPath: fetchConfig?.dataPath || 'data',
    renderItem: fetchConfig?.renderItem || undefined,
    firstInit: fetchConfig?.firstInit || true,
    openDebounceSearch: fetchConfig?.openDebounceSearch || false,
    dict: fetchConfig?.dict || false,
  };

  const fetchOptions = async (searchValue: string = '') => {
    const res = await baseFetchFn({ ...newFetchConfig, searchValue });
    const data = res[newFetchConfig.dataPath];
    if (newFetchConfig?.renderItem) {
      return newFetchConfig.renderItem(data);
    }
    return data.map((item: any) => ({
      label: item[newFetchConfig.dictConfig?.label],
      value: item[newFetchConfig.dictConfig?.value],
      key:
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        item[newFetchConfig.dictConfig?.key!] ||
        item[newFetchConfig.dictConfig?.value],
    }));
  };

  const handleInitPage = async () => {
    if (newFetchConfig?.dict) return false;
    if (newFetchConfig?.firstInit) {
      const options = await fetchOptions('');
      setOptions(options);
    }
  };

  useEffect(() => {
    handleInitPage();
  });

  if (!newFetchConfig.openDebounceSearch) {
    return (
      <Select
        labelInValue
        allowClear
        showSearch
        optionFilterProp="children"
        filterOption={(input: any, option: any) =>
          (option?.label ?? '').toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        options={newFetchConfig.dict == false ? options : newFetchConfig.dict}
        {...props}
      />
    );
  }

  return (
    <DebounceSelect
      options={options}
      fetchOptions={fetchOptions}
      setOptions={setOptions}
      placeholder={placeholder}
      {...restProps}
    />
  );
};

export default App;