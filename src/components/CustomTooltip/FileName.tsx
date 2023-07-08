import FileImage from '@/components/File/FileImage';
import FileView from '@/components/File/FileViewer';
import projectConfig from '@/config/projectConfig';
import { handleDownload as handleDownLoadByDefault, postDownloadFile } from '@/services/global';
import { Space } from 'antd';
import _ from 'lodash';
import { FC } from 'react';
import CustomTooltip from './CustomTooltip';
const { apiPrefixMock } = projectConfig;

export interface IFileName {
  name: string;
  /**
   * @name 前缀最大长度
   * @name 实际长度 = prefixLength + 2
   * 因为 ... 后需要显示两个字符
   * @example name={'2213.png'} prefixLength={3} => 2213.png
   * @example name={'22133.png'} prefixLength={3} => 22133.png
   * @example name={'221333.png'} prefixLength={3} => 221...33.png
   */
  prefixLength?: number;
  /**
   * @name 后缀最大长度
   * @default 2
   */
  suffixLength?: number;

  hasExtraViewIcon?: boolean;
  hasPreview?: boolean;
  hasDownLoad?: boolean;
  hasFileName?: boolean;
  isIcon?: boolean;
  previewLinkType?: 'flow' | 'default' | 'S3';
  fileId?: string;
}

let getPreviewUrl = (type = 'default', fileId: string): string => {
  let str = '';
  switch (type) {
    case 'flow':
      str = `ims/flow/field/download?fileId=${fileId}`;
      break;
    case 'default':
      str = `ims/org/cust/download?id=${fileId}`;
      break;
    case 'S3':
      str = `ims-base/file/downloadByUrl?url=${fileId}`;
      break;
    default:
      str = '';
      break;
  }
  return str;
};

const handleDownload = (type: string, fileName: string, fileId: string) => {
  return type == 'S3'
    ? postDownloadFile(fileId, fileName)
    : handleDownLoadByDefault(
        { id: fileId },
        {
          url: `${apiPrefixMock}/ims/org/cust/download`,
          fileName,
        },
      );
};
function Icon({ path, className, onClick }: { path: string; className?: string; onClick?: any }) {
  return <img style={{ cursor: 'pointer' }} className={className} onClick={onClick} src={require(`@/assets/icon/${path}.png`)} />;
}

const CustomTooltipFileName: FC<IFileName> = (props) => {
  const {
    name,
    prefixLength = 10,
    suffixLength = 2,
    hasPreview = true,
    previewLinkType = 'default',
    hasDownLoad = true,
    hasExtraViewIcon = true,
    hasFileName = true,
    isIcon = true,
    fileId = '',
  } = props;

  if (_.isNil(name) || (typeof name === 'string' && name.length === 0)) return <span style={{ color: '#8E96A4' }}>--</span>;

  const fileType = name?.lastIndexOf('.') !== -1 ? name?.slice(name?.lastIndexOf('.') + 1) : undefined;
  const fileName = String(name).slice(0, name.lastIndexOf('.'));
  const linkStyles = {
    color: '#2B5FDC',
    cursor: 'pointer',
  };

  if (!fileType) return <span style={{ color: '#8E96A4' }}>--</span>;

  const lastText = String(fileName).length > prefixLength ? String(fileName).slice(prefixLength).slice(-suffixLength) : '';
  const fileNameStyle = {
    color: hasExtraViewIcon ? '#2A303B' : '#2B5FDC',
    cursor: hasExtraViewIcon ? 'default' : 'pointer',
  };

  const FileNameContent = (
    <a style={fileNameStyle}>
      <FileImage fileName={fileName ?? '--'} style={{ marginRight: 8, marginTop: -3 }} />
      {fileName.length > prefixLength + suffixLength ? (
        <>
          <CustomTooltip style={fileNameStyle} text={name ?? '--'} maxLength={prefixLength} />
          {lastText ?? ''}
        </>
      ) : (
        fileName
      )}
      {fileType ? `.${fileType}` : ''}
    </a>
  );

  const DownLoadIcon = isIcon ? (
    <Icon path="download" onClick={() => handleDownload(previewLinkType, name, fileId)} />
  ) : (
    <span style={linkStyles} onClick={() => handleDownload(previewLinkType, name, fileId)}>
      下载
    </span>
  );
  const ViewIcon = isIcon ? <Icon path="view" /> : <span style={linkStyles}>预览</span>;

  return (
    <Space align="end" size={16}>
      {hasFileName && !hasPreview && FileNameContent}
      {hasFileName && hasPreview && hasExtraViewIcon && FileNameContent}
      {hasPreview && (
        <FileView
          fileInfo={{
            fileName: name,
            fileId: previewLinkType == 'S3' ? undefined : fileId,
          }}
          wrapper={hasExtraViewIcon ? ViewIcon : FileNameContent}
          downLoadUrl={`${getPreviewUrl(previewLinkType, fileId)}`}
        />
      )}
      {hasDownLoad && DownLoadIcon}
    </Space>
  );
};

export default CustomTooltipFileName;
