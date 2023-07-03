import { request } from '@umijs/max';
import { useAsyncFn } from 'react-use';
import _ from 'lodash';
import { useEffect } from 'react';

/**
 * @typedef useFetchProps - 描述列表组件
 * @template T - 列表项record
 * @property {IDescriptionsProps['fetchConfig']} fetchConfig - 请求配置
 * @property {(data: T) => T} [dataHandler] - 数据处理函数
 */
export interface useFetchProps<T = any> {
  /**
   * @name 请求配置
   * @property {string} apiUrl - 请求地址
   * @property {any} [params] - 请求参数
   * @property {'get' | 'post'} [method='get'] - 请求方法
   * @property {string} [dataPath='data.data'] - 数据路径
   * @property {ReadonlyArray<unknown>} [depts=[]] - 依赖改变时重新请求
   */
  fetchConfig?: {
    apiUrl?: string;
    method?: 'get' | 'post';
    params?: any;
    data?: any;
    dataPath?: string;
    depts?: any[];
  };
  dataHandler?: (data: T) => any;
  initRequest?: boolean;
}

export type useFetchState<T = any> = readonly [
  {
    loading: boolean;
    value: T;
    error: Error | undefined;
  },
  (defaultParams?: any, defaultData?: any) => any,
];

export default function useFetch<T>(props: useFetchProps<T>): useFetchState<T> {
  const { fetchConfig, dataHandler, initRequest = true } = props;

  const [data, fetchData] = useAsyncFn(async (defaultParams?, defaultData?) => {
    const response = await request(fetchConfig?.apiUrl!, {
      method: fetchConfig?.method || 'get',
      params: defaultParams || fetchConfig?.params,
      data: defaultData || fetchConfig?.data,
    });
    const data = _.get(response, fetchConfig?.dataPath || 'data.data');
    if (dataHandler) return dataHandler(data);
    return data || {};
  }, fetchConfig?.depts || []);

  useEffect(() => {
    initRequest && fetchData();
  }, fetchConfig?.depts || []);

  return [data, fetchData] as useFetchState<T>;
}
