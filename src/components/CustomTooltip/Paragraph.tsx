import { Tooltip, TooltipProps, Typography } from 'antd';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';
import _ from 'lodash';
import React, { FC } from 'react';
import styles from './index.less';
const { Paragraph } = Typography;

/**
 * 多行文字展示 tooltip 及省略
 * @name 只显示两行 多余字...展示 && tooltip
 * @example render: text => <CustomTooltipParagraph text={text??'--} rows={2} />
 * @name 传入node格式 只显示两行 多余字...展示 && tooltip && 可复制
 * @example render: text => <CustomTooltipParagraph text={['xxx','xxx','xxx'].map(item => <div key={item}>{item}</div>)} />
 */
export interface IParagraph {
  text: string | React.ReactNode;
  rows?: number;
  copyable?: boolean;
  className?: string;
  isDetail?: boolean;
  style?: React.CSSProperties;
  tooltipProps?: TooltipProps;
  ellipsisProps?: ParagraphProps['ellipsis'];
}

const CustomTooltipParagraph: FC<IParagraph> = (props) => {
  const { text = '', rows = 2, tooltipProps = {}, style = {}, copyable = false, isDetail, ellipsisProps, className = '', ...restProps } = props;
  if (_.isNil(text) || (typeof text === 'string' && text.length === 0)) return <span style={{ color: '#8E96A4' }}>--</span>;

  const restEllipsisProps = typeof ellipsisProps === 'object' ? ellipsisProps : {};
  return (
    <Paragraph
      style={{ marginBottom: 0, ...style }}
      className={`${isDetail && styles.desc} ${className} ${rows === 1 ? styles['single-line'] : ''}`}
      copyable={copyable}
      ellipsis={{
        rows,
        expandable: false,
        tooltip: {
          overlayStyle: { maxWidth: 500 },
          ...tooltipProps,
        },
        ...restEllipsisProps,
      }}
      {...restProps}
    >
      {text ?? '--'}
    </Paragraph>
  );
};

export default CustomTooltipParagraph;
