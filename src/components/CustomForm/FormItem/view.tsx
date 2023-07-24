import React, { Fragment, useImperativeHandle } from 'react';
import { FormInstance } from 'antd';
import _ from 'lodash';
import CustomTooltip from '@/components/CustomTooltip/CustomTooltip';
import styles from '../index.less';
import { IFileName } from '@/components/CustomTooltip/FileName';
import { ContentWrapper } from '@/components/CommonDescriptions/utils';
import { DeepPartial, Merge } from '@/typings/utils';
import { EllipsisProps } from '@/core/base/Ellipsis/Ellipsis';
import { EllipsisExpandProps } from '@/core/base/Ellipsis/Expand';

type IViewHandle = {};

export type IBaseViewProps = {
  record?: any;
  /**
   * @name maxLength rows render 只能同时存在一个
   */
  maxLength?: number;
  rows?: number;
  hasPreview?: boolean;
  previewProps?: IFileName;
  ellipsisProps?: DeepPartial<Merge<Merge<EllipsisProps, EllipsisExpandProps>, { expand: boolean }>>;
  /**
   * @name
   * 只参与展示 不参与最终结果
   * 参与最终onFinish的数据 以原始数据为基数(和parser的结果无关)
   */
  parser?: (value: any, record: any, values: any) => any;
  render?: (value: any, record: any, values: any) => React.ReactNode;
};

export interface IViewProps extends IBaseViewProps {
  form: FormInstance;
  disabled?: boolean;
  label?: string;
  name?: string;
  record?: any;
  initialValue?: any;
  style?: React.CSSProperties;
  className?: string;
}

const View: React.ForwardRefRenderFunction<IViewHandle, IViewProps> = (props, ref) => {
  const {
    form,
    disabled,
    label,
    name = '',
    record,
    rows,
    maxLength,
    initialValue = '',
    style = {},
    className,
    render,
    parser,
    hasPreview,
    previewProps = {},
    ellipsisProps = {},
    ...restProps
  } = props;

  useImperativeHandle(ref, () => ({}));

  let value = record?.[name] === undefined ? undefined : record?.[name];
  const CustomTooltipMaxLength = maxLength || 20;
  const values = form?.getFieldsValue() || {};
  if (parser) {
    value = parser(value, record, values);
  }

  if (hasPreview) {
    return <CustomTooltip.FileName name={value} prefixLength={CustomTooltipMaxLength} hasPreview={hasPreview} {...previewProps} />;
  }

  const expand = ellipsisProps?.expand ?? false;
  const defaultExpandProps = expand
    ? {
        content: value.repeat(5),
        rows: rows ?? 1,
        expandText: '展开',
        collapseText: '收起',
      }
    : { children: value.repeat(5) };

  let ContentWrapperProps: any = {
    expand,
    className: `${styles.desc} ${className}`,
    style,
    ...defaultExpandProps,
    ...ellipsisProps,
  };
  const type = rows || (rows == undefined && !maxLength) ? 'textarea' : 'text';
  if (type == 'text') {
    ContentWrapperProps = { ...ContentWrapperProps, length: CustomTooltipMaxLength };
  } else {
    ContentWrapperProps = { ...ContentWrapperProps, lines: rows ?? 1 };
  }

  if (!render) {
    return <ContentWrapper {...ContentWrapperProps} />;
  }

  if (render) return <Fragment>{render(value, record, values)}</Fragment>;

  return <span className={styles.desc}>--</span>;
};

export default React.forwardRef(View);
