import { IButtonProps } from '@/typings';
import { ConnectState } from '@/typings/connect';
import { RouteComponentProps } from '@umijs/renderer-react';
import { FormItemProps, UploadFile, UploadProps } from 'antd';

type ConnectProps = {
  token: ConnectState['login']['token'];
  crmUserId: ConnectState['global']['crmUserInfo']['userId'];
  crmUserRealname: ConnectState['global']['crmUserInfo']['realname'];
};

export interface IAttachment {
  label?: string;
  tooltip?: string;
  isRequired?: boolean;
  maxCount?: number;

  /**
   * @name 拓展的文件信息 和文件名同级
   */
  extraRecord?: any;

  extra?: IButtonProps[] | [];
  headerItemProps?: FormItemProps;
}

export interface IFileUploadProps extends RouteComponentProps<any>, ConnectProps {
  attachment: IAttachment;
  actionUrl?: string;
  isDetail?: boolean;
  colNumber?: number;
  maxLength?: number;

  isDownloadByS3?: boolean;
  fileKeys?: {
    fileName?: string;
    fileId?: string;
    updateTime?: string;
    url?: string;
  };

  /**
   * @name 集成到antd
   */
  value?: UploadProps<IFileListResponse>[];
  onChange?: (fileList: UploadProps<IFileListResponse>[]) => void;
}

export type IHandleFileChange = {
  (
    info: {
      file: UploadFile<IFileListResponse>;
      fileList: UploadFile<IFileListResponse>[];
      extraRecord: any;
      defaultList: IFileListExtraRecord[];
    },
    setFileList: React.Dispatch<React.SetStateAction<IFileListExtraRecord[]>>,
    replaceIndex: number,
    fileKeys: IFileUploadProps['fileKeys'],
  ): void;
};

export type IFileListExtraRecord = {
  uploadDatetime?: string;
  fileId?: string;
  id?: string;
  url?: string;
  fileName?: string;
  fileSize?: string;
  fdDownLoadUrl?: string;
  fdEntityKey?: string;
  fdExternalAttachId?: string;
  fdFileName?: string;
  fdFileSize?: string;
  flowId?: string;
  [props: string]: any;
};

export type IFileListResponse = {
  code: number;
  msg: string;
  success: boolean;
  data: IFileListExtraRecord;
};

export interface IFileUploadDetailProps extends Pick<IFileUploadProps, 'isDetail' | 'colNumber' | 'fileKeys' | 'isDownloadByS3' | 'maxLength'> {
  fileList: IFileListExtraRecord[];
  setFileList: React.Dispatch<React.SetStateAction<IFileListExtraRecord[]>>;
  setReplaceIndex: React.Dispatch<React.SetStateAction<number>>;
  uploadRef: React.MutableRefObject<any>;
}
