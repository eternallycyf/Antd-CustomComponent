import { Tooltip, Typography, TooltipProps } from 'antd';
import React, { FC } from 'react';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';
const { Paragraph } = Typography;

export interface IParagraph {
  text: string;
  rows?: number;
  tooltipProps?: TooltipProps;
  ellipsisProps?: ParagraphProps['ellipsis'];
}

const CustomTooltipParagraph: FC<IParagraph> = (props) => {
  const { text = '', rows = 2, tooltipProps = {}, ellipsisProps, ...restProps } = props;
  const restEllipsisProps = typeof ellipsisProps === 'object' ? ellipsisProps : {};
  return (
    <Tooltip title={text ?? '--'} {...tooltipProps}>
      <Paragraph ellipsis={{ rows, expandable: false, tooltip: text ?? '--', ...restEllipsisProps }} {...restProps}>
        {text ?? '--'}
      </Paragraph>
    </Tooltip>
  );
};

export default CustomTooltipParagraph;
