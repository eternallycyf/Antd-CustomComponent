import { CardProps, ListProps, PaginationProps } from 'antd';
import React from 'react';
import CommonDesc from './Descriptions';

/**
 * @typedef IDescriptionsHandle -
 * @template T - 列表项record
 * @property {(defaultParams?: any, defaultData?: any) => Promise<T[]>} fetchData - 请求数据
 * @example <caption>fetchData</caption>
 * await CardRef.current?.fetchData({ kw: 1 }, { num: 2 });
 */
export type IDescriptionsHandle<T = Record<string, any>> = {
  fetchData: (defaultParams?: any, defaultData?: any) => Promise<T[]>;
};

/**
 * @typedef IDescriptionsProps - 描述列表组件
 * @template T - 列表项record
 */
export interface IDescriptionsProps<T = Record<string, any>> {
  /**
   * @name 请求配置
   * @property {string} apiUrl - 请求地址
   * @property {any} [params] - 请求参数
   * @property {'get' | 'post'} [method='get'] - 请求方法
   * @property {string} [dataPath] - 数据路径
   * @property {ReadonlyArray<unknown>} [depts=[]] - 依赖改变时重新请求
   */
  fetchConfig?: {
    apiUrl: string;
    params?: any;
    data?: any;
    method?: 'get' | 'post';
    dataPath: string;
    /**
     * @name 依赖改变时重新请求
     */
    depts?: ReadonlyArray<unknown>;
  };
}

const CompoundedCommonDescList = React.forwardRef<IDescriptionsHandle, IDescriptionsProps>(CommonDesc) as <Values = Record<string, unknown>>(
  props: React.PropsWithChildren<IDescriptionsProps<Values>> & {
    ref?: React.Ref<IDescriptionsHandle<Values>>;
  },
) => React.ReactElement;

type CompoundedComponent = typeof CompoundedCommonDescList;

const CommonDescriptions = CompoundedCommonDescList as CompoundedComponent;

export default CommonDescriptions;
