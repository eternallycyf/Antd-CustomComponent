import type { IProps as ICustomTooltipProps } from '@/components/CustomTooltip/interface';
import { EllipsisProps } from '@/core/base/Ellipsis/Ellipsis';
import { useFetchProps, useFetchState } from '@/hook/useFetch';
import { IButtonProps, IColumnsType } from '@/typings';
import { RowProps } from 'antd';
import React from 'react';
import CommonDesc from './Descriptions';

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type Columns = IColumnsType extends Array<infer R> ? R : never;
type AnyData = Record<string, unknown>;

/**
 * @typedef IDescriptionsColumns - 列表项
 * @template T - 列表项record
 */
export interface IDescriptionsColumns<T = AnyData> {
  /**
   * @description 1.主要配置
   */
  key: keyof T & string;
  label?: string;
  type: 'text' | 'tip' | 'formItem';
  span?: number;
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  acpCode?: string;
  visible?: boolean | ((value: any, record: T) => boolean);

  /**
   * @description 2.个性化配置 仅在某些type下生效
   */
  isPhone?: boolean;
  /**@name 仅在 type='tip'时生效 */
  tipType?: 'success' | 'warning' | 'error' | 'info';
  /**@name 仅在 type='tip'时生效 */
  tipMessage?: string;
  /**@name 问号提示 仅在 type='formItem'时生效*/
  tooltip?: string;
  /**
   * @name 最大行数 仅在 type='formItem'时生效 与 maxLength 不能同时使用
   * @default 2
   */
  rows?: number;
  maxLength?: number;

  /**
   * @description 3.格式化配置
   */
  format?: (value: any, record?: T) => React.ReactNode;
  dict?: ReadonlyArray<{
    text: string;
    value: string | number;
    [key: string]: any;
  }>;
  formatValue?: (value: any, record?: T) => number | string;
  formatNumber?: Columns['formatNumber'];
  formatPercent?: Columns['formatPercent'];
  formatTime?: boolean | string | { type?: string; format: string };

  /**
   * @description 4.其他配置
   */
  controlProps?: DeepPartial<ICustomTooltipProps<unknown> & EllipsisProps> & { [props: string]: any };
}

/**
 * @typedef IDescriptionsHandle - 实例方法
 * @template T - 列表项record
 * @property {(defaultParams?: any, defaultData?: any) => Promise<T[]>} fetchData - 请求数据
 * @example <caption>fetchData</caption>
 * await DescRef.current?.fetchData({ kw: 1 }, { num: 2 });
 */
export type IDescriptionsHandle<T = AnyData> = {
  fetchData: useFetchState<T>['1'];
  data: T;
};

/**
 * @typedef IDescriptionsProps - 描述列表组件
 * @template T - 列表项record
 * @property {React.ReactNode} [title] - 标题
 * @property {React.ReactNode} [extra] - 额外内容
 * @property {IDescriptionsColumns<T>[]} columns - 列表项
 * @property {string} [className] - 样式类名
 * @property {string} [labelClassName] - label样式类名
 * @property {string} [wrapperClassName] - wrapper样式类名
 * @property {RowProps} [rowProps] - Row组件属性
 * @property {React.ReactNode} [beforeChildren] - 描述列表前内容
 * @property {React.ReactNode} [afterChildren] - 描述列表后内容
 * @property {(data: T) => T} [dataHandler] - 数据处理函数
 * @property {T} [dataSource] - 自定义数据源
 * @property {boolean} [loading] - 自定义加载状态
 * @property {boolean} [visible] - 是否显示
 * @property {IDescriptionsProps['fetchConfig']} fetchConfig - 请求配置
 */
export interface IDescriptionsProps<T = AnyData> extends useFetchProps<T> {
  title?: React.ReactNode;
  extra?: React.ReactNode | IButtonProps[];
  tooltip?: React.ReactNode;
  columns?: IDescriptionsColumns<T>[];
  className?: string;
  beforeChildren?: React.ReactNode;
  afterChildren?: React.ReactNode;

  dataSource?: T;
  loading?: boolean;

  labelClassName?: string;
  wrapperClassName?: string;

  rowProps?: RowProps;
  visible?: boolean;
}

const CompoundedCommonDescList = React.forwardRef<IDescriptionsHandle, IDescriptionsProps>(CommonDesc) as <Values = Record<string, unknown>>(
  props: React.PropsWithChildren<IDescriptionsProps<Values>> & {
    ref?: React.Ref<IDescriptionsHandle<Values>>;
  },
) => React.ReactElement;

type CompoundedComponent = typeof CompoundedCommonDescList;

const CommonDescriptions = CompoundedCommonDescList as CompoundedComponent;

export default CommonDescriptions;
