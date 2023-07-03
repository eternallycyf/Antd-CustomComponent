import { useFetchProps, useFetchState } from '@/hook/useFetch';
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
  fetchData: useFetchState<T>['1'];
};

/**
 * @typedef ICommonDemoProps - demo组件
 * @template T - 列表项record
 */
export interface ICommonDemoProps<T = Record<string, any>> extends useFetchProps<T> {}

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
