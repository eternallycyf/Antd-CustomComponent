import React, { useImperativeHandle } from 'react';
import { FormInstance } from 'antd';
import _ from 'lodash';
import CustomTooltip from '@/components/CustomTooltip/CustomTooltip';
import styles from '../index.less';

type IViewHandle = {};

// TODO: 文件预览
export interface IViewProps {
  form: FormInstance;
  disabled?: boolean;
  label?: string;
  name?: string;
  record?: any;
  initialValue?: any;
  style?: React.CSSProperties;
  className?: string;
  /**
   * @description 是否可复制 没有 render 时生效
   */
  copyable?: boolean;
  /**
   * @description maxLength rows render 只能同时存在一个
   */
  maxLength?: number;
  rows?: number;
  /**
   * @description
   * 只参与展示 不参与最终结果
   * 参与最终onFinish的数据 以原始数据为基数(和parser的结果无关)
   */
  parser?: (value: any, record: any, values: any) => any;
  render?: (value: any, record: any, values: any) => React.ReactNode;
}

const View: React.ForwardRefRenderFunction<IViewHandle, IViewProps> = (props, ref) => {
  const {
    form,
    disabled,
    label,
    name,
    record,
    rows = 1,
    maxLength = 20,
    initialValue = '',
    copyable = false,
    style = {},
    render,
    className,
    parser,
    ...restProps
  } = props;

  useImperativeHandle(ref, () => ({}));
  let value = initialValue;
  const values = form?.getFieldsValue() || {};
  if (parser) {
    value = parser(value, record, values);
  }

  if (!render && rows === 1) {
    return (
      <CustomTooltip
        paragraphClassName={`${styles.desc} ${className}`}
        style={style}
        text={value ?? '--'}
        maxLength={maxLength}
        copyable={copyable}
      />
    );
  }

  if (rows) {
    return (
      <CustomTooltip.Paragraph
        className={className}
        style={style}
        text={value ?? '--'}
        copyable={copyable}
        rows={rows}
      />
    );
  }

  if (render) return <span className={styles.desc}>{render(value, record, values)}</span>;

  return <span className={styles.desc}>--</span>;
};

export default React.forwardRef(View);
