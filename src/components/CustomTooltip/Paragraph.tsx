import { Tooltip, Typography, TooltipProps } from 'antd';
import React, { FC } from 'react';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';
const { Paragraph } = Typography;
import styles from './index.less';
import _ from 'lodash';

export interface IParagraph {
  text: string;
  rows?: number;
  copyable?: boolean;
  className?: string;
  style?: React.CSSProperties;
  tooltipProps?: TooltipProps;
  ellipsisProps?: ParagraphProps['ellipsis'];
}

const CustomTooltipParagraph: FC<IParagraph> = (props) => {
  const {
    text = '',
    rows = 2,
    tooltipProps = {},
    style = {},
    copyable = false,
    ellipsisProps,
    className = '',
    ...restProps
  } = props;
  if (_.isNil(text) || (typeof text === 'string' && text.length === 0))
    return <span style={{ color: '#8E96A4' }}>--</span>;

  const restEllipsisProps = typeof ellipsisProps === 'object' ? ellipsisProps : {};
  return (
    <Tooltip title={text ?? '--'} {...tooltipProps}>
      <Paragraph
        style={{ marginBottom: 0, ...style }}
        className={`${styles.desc} ${className}`}
        copyable={copyable}
        ellipsis={{ rows, expandable: false, tooltip: text ?? '--', ...restEllipsisProps }}
        {...restProps}
      >
        {text ?? '--'}
      </Paragraph>
    </Tooltip>
  );
};

export default CustomTooltipParagraph;
