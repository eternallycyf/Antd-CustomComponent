import { useFetchProps, useFetchState } from '@/hook/useFetch';
import { CardProps, ListProps, PaginationProps } from 'antd';
import React from 'react';
import CommonCardList from './CardList';

/**
 * @typedef ICardListHandle - 卡片列表组件的ref
 * @template T - 列表项record
 * @property {(defaultParams?: any, defaultData?: any) => Promise<T[]>} fetchData - 请求数据
 * @example <caption>fetchData</caption>
 * await CardRef.current?.fetchData({ kw: 1 }, { num: 2 });
 */
export type ICardListHandle<T = Record<string, any>> = {
  fetchData: useFetchState<T>['1'];
};

/**
 * @typedef ICardListProps - 卡片列表组件
 * @template T - 列表项record
 *
 * @property {string} [title] - 标题
 * @property {React.ReactNode} [extra] - 额外的内容
 * @property {string} [rowKey='index'] - 列表项的key
 * @property {number} [column=3] - 每行的个数
 * @property {CardProps['actions']} [actions] - 卡片的操作
 * @property {ListProps<T>['renderItem']} [renderItem] - 列表项的渲染函数
 *
 * @property {ICardListProps['fetchConfig']} [fetchConfig] - 请求配置
 *
 * @property {CardProps} [cardProps] - 卡片的属性
 * @property {ListProps<T>} [listProps] - 列表的属性
 * @property {PaginationProps} [paginationProps] - 分页的属性
 */
export interface ICardListProps<T = Record<string, any>> extends useFetchProps<T> {
  title?: string;
  extra?: React.ReactNode;
  /**
   * @name 列表项的key
   * @default index
   */
  rowKey?: string;
  column?: number;
  actions?: CardProps['actions'];
  renderItem?: ListProps<T>['renderItem'];

  cardProps?: CardProps;
  listProps?: ListProps<T>;
  /**
   * @name 分页的属性
   * @property {PaginationProps} [paginationProps = { pageSize: 9 }]
   */
  paginationProps?: PaginationProps;
}

const CompoundedCommonCardList = React.forwardRef<ICardListHandle, ICardListProps>(CommonCardList) as <Values = Record<string, unknown>>(
  props: React.PropsWithChildren<ICardListProps<Values>> & {
    ref?: React.Ref<ICardListHandle<Values>>;
  },
) => React.ReactElement;

type CompoundedComponent = typeof CompoundedCommonCardList;

const CardList = CompoundedCommonCardList as CompoundedComponent;

export default CardList;
