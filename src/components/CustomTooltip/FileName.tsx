import React, { FC } from 'react';
import CustomTooltip from './CustomTooltip';
import FileImage from '@/components/FileImage';
import _ from 'lodash';
import FileView from '@/components/Widget/FileViewer';

export interface IFileName {
  name: string;
  /**
   * @description 前缀最大长度
   * @description 实际长度 = prefixLength + 2
   * 因为 ... 后需要显示两个字符
   * @example name={'2213.png'} prefixLength={3} => 2213.png
   * @example name={'22133.png'} prefixLength={3} => 22133.png
   * @example name={'221333.png'} prefixLength={3} => 221...33.png
   */
  prefixLength?: number;
  /**
   * @description 后缀最大长度
   * @default 2
   */
  suffixLength?: number;
  hasPreview?: boolean;
  previewLinkType?: 'flow' | 'default';
  fileId?: string;
}

let getPreviewLink = (type = 'default'): string => {
  switch (type) {
    case 'flow':
      getPreviewLink = () => '/flow/download';
      break;
    case 'default':
      getPreviewLink = () => '/download';
      break;
    default:
      getPreviewLink = () => '';
      break;
  }
  return getPreviewLink();
};

const CustomTooltipFileName: FC<IFileName> = (props) => {
  const {
    name,
    prefixLength = 10,
    suffixLength = 2,
    hasPreview = false,
    previewLinkType = 'default',
    fileId = '',
  } = props;

  if (_.isNil(name) || (typeof name === 'string' && name.length === 0))
    return <span style={{ color: '#8E96A4' }}>--</span>;

  const fileType = name?.lastIndexOf('.') !== -1 ? name?.slice(name?.lastIndexOf('.') + 1) : undefined;
  const fileName = name.slice(0, name.lastIndexOf('.'));

  if (!fileType) return <span style={{ color: '#8E96A4' }}>--</span>;

  const lastText =
    String(fileName).length > prefixLength ? String(fileName).slice(prefixLength).slice(-suffixLength) : '';

  const FileNameContent = (
    <a style={{ color: '#3363D7' }}>
      <FileImage fileName={fileName ?? '--'} style={{ marginRight: 8 }} />
      {fileName.length > prefixLength + suffixLength ? (
        <>
          <CustomTooltip style={{ color: '#3363D7' }} text={name ?? '--'} maxLength={prefixLength} />
          {lastText ?? ''}
        </>
      ) : (
        fileName
      )}
      {fileType ? `.${fileType}` : ''}
    </a>
  );

  if (hasPreview) {
    return (
      <>
        <FileView
          fileInfo={{
            fileName: name,
            fileId,
          }}
          wrapper={FileNameContent}
          downLoadUrl={`${getPreviewLink(previewLinkType)}?fileId=${fileId}`}
        />
      </>
    );
  }

  return FileNameContent;
};

export default CustomTooltipFileName;
