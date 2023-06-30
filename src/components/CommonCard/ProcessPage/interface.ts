import { IButtonProps, IColumnsType } from '@/typings';
import { RouteComponentProps } from '@umijs/renderer-react';
import { ButtonProps, TableProps } from 'antd';
import { IDescriptionsColumns, IDescriptionsProps } from '@/components/CommonDescriptions';

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

  descList?: string[];
}

export interface IProcessPageSubHeader extends IProcessPageCardProps {}

export interface IProcessPageHeaderProps<T = any> extends IDescriptionsProps<T> {
  formatTime?: (val: any, record: keyof T) => string;
  title?: string;
}

export interface IProcessPageRecordProps extends IColumnsType<any> {
  flowId: string | number;
}
