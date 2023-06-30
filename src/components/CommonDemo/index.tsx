import React from 'react';
import CommonDemoComponent from './CommonDemo';
import Item from './Item';

/**
 * @typedef ICommonDemoHandle - demo组件
 * @template T - 列表项record
 * @property {(defaultParams?: any, defaultData?: any) => Promise<T[]>} fetchData - 请求数据
 * @example <caption>fetchData</caption>
 * await CommonDemoRef.current?.fetchData({ kw: 1 }, { num: 2 });
 */
export type ICommonDemoHandle<T = Record<string, any>> = {
  fetchData: (defaultParams?: any, defaultData?: any) => Promise<T[]>;
};

/**
 * @typedef ICommonDemoProps - demo组件
 * @template T - 列表项record
 */
export interface ICommonDemoProps<T = Record<string, any>> {
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

export interface ICommonDemoItemProps<T = any> {}

const CompoundedCommonDemo = React.forwardRef<ICommonDemoHandle, ICommonDemoProps>(CommonDemoComponent) as <Values = Record<string, unknown>>(
  props: React.PropsWithChildren<ICommonDemoProps<Values>> & {
    ref?: React.Ref<ICommonDemoHandle<Values>>;
  },
) => React.ReactElement;

type CompoundedComponent = typeof CompoundedCommonDemo & {
  Item: typeof Item;
};

const CommonDemo = CompoundedCommonDemo as CompoundedComponent;

CommonDemo.Item = Item;

export default CommonDemo;
