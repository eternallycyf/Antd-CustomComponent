import React, { FC } from 'react';
import CustomTooltip from './CustomTooltip';
import FileImage from '@/components/FileImage';

export interface IFileName {
  name: string;
  maxLength?: number;
}

const CustomTooltipFileName: FC<IFileName> = (props) => {
  const { name, maxLength = 10 } = props;
  const fileType = name.split(String(name.lastIndexOf('.') + 1)).toLocaleString();
  const fileName = name.slice(0, name.lastIndexOf('.'));
  if (!fileType) return <span>--</span>;

  const lastText = String(fileName).length > maxLength ? String(fileName).slice(maxLength).slice(-2) : '';
  return (
    <a style={{ color: '#3363D7' }}>
      <FileImage fileName={fileName ?? '--'} style={{ marginRight: 8 }} />
      <CustomTooltip style={{ color: '#3363D7' }} text={fileName ?? '--'} maxLength={maxLength} />
      {lastText ?? ''}
      {fileType}
    </a>
  );
};

export default CustomTooltipFileName;
