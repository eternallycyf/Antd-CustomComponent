import { IButtonProps, IColumnsType, ICommonTable } from '@/typings';
import { RouteComponentProps } from '@umijs/renderer-react';
import { ButtonProps, TableProps } from 'antd';
import { IDescriptionsColumns, IDescriptionsProps } from '@/components/CommonDescriptions';
import { DeepPartial } from '@/typings/utils';

export interface IProcessPageProps extends RouteComponentProps<any> {
  title?: React.ReactNode;
  /**
   * @name buttonStyleType 必传 就是 Button.type 新版样式
   */
  extraBtnList?: (IButtonProps & { buttonStyleType: ButtonProps['type'] | 'danger' })[];
  /**@name 会覆盖extraBtnList */
  extra?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;

  dotColor?: string;
  dotText?: string;

  handleHeaderOnClick?: () => void;
}

export interface IProcessPageCardProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  extraContent?: React.ReactNode;
  style?: React.CSSProperties;
  visible?: boolean;

  descList?: string[];
}

export interface IProcessPageSubHeader extends IProcessPageCardProps {}

export interface IProcessPageHeaderProps<T = Record<string, unknown>> extends IDescriptionsProps<T> {
  businessId: string | number;
  formatTime?: (val: any, record: T) => string;
  formatSubTitle?: (val: any, record: T) => string;
  formatApplyPerson?: (val: any, record: T) => string;
  title?: string;
  hasDivider?: boolean;
}

export interface IProcessPageRecordProps extends DeepPartial<ICommonTable<any>> {
  businessId: string;
}
