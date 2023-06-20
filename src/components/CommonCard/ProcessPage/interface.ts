import { IButtonProps, IColumnsType } from '@/typings';
import { RouteComponentProps } from '@umijs/renderer-react';
import { ButtonProps, TableProps } from 'antd';
import { renderDetail } from './utils';

export type Columns = IColumnsType extends Array<infer R> ? R : never;

export interface IUserInfoFormList {
  key: string;
  label?: string;
  type: 'text' | 'subTitle' | 'tip' | 'formItem';
  maxLength?: number;
  span?: number;
  className?: string;

  isPhone?: boolean;
  isSubTitle?: boolean;
  /**@description 仅在 type='tip'时生效 */
  tipMessage?: string;
  tipType?: 'success' | 'warning' | 'error' | 'info';

  /**@description 自定义元素 */
  format?: (value: any, record?: any) => React.ReactNode;

  formatValue?: (value: any, record?: any) => number | string;
  formatNumber?: Columns['formatNumber'];
  formatPercent?: Columns['formatPercent'];
  formatTime?: boolean | string | { type?: string; format: string };
}

export interface IProcessCard extends RouteComponentProps<any> {
  title?: React.ReactNode;
  /**
   * @description buttonStyleType 必传 就是 Button.type 新版样式
   */
  extraBtnList?: (IButtonProps & { buttonStyleType: ButtonProps['type'] })[];
  /**@description 会覆盖extraBtnList */
  extra?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export interface IProcessPageCardProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  extraContent?: React.ReactNode;
}

export interface IProcessPageSubHeader extends IProcessPageCardProps {}

export interface IProcessPageDescProps {
  descList: string[];
  children?: React.ReactNode;
}

export interface IProcessPageTableProps extends TableProps<any> {
  status?: 'table' | 'view';
  infoColumns: IUserInfoFormList[];
}

export interface IProcessPageDetailProps {
  info: any;
  list: IUserInfoFormList[];
  subInfo?: any;
}

export interface IProcessPageDetailHeaderContext {
  renderDetail: typeof renderDetail;
  info: any;
}

export interface IProcessPageDetailHeaderProps {
  beforeChildren?: React.ReactNode | ((value: IProcessPageDetailHeaderContext) => React.ReactNode);
  afterChildren?: React.ReactNode | ((value: IProcessPageDetailHeaderContext) => React.ReactNode);
  formatList?: (info: any, list: IUserInfoFormList[]) => IUserInfoFormList[];
}

export interface IProcessPageDetailRecord extends IColumnsType<any> {
  flowId: string | number;
}
