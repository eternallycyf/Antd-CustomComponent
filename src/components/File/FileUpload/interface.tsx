import { RouteComponentProps } from '@umijs/renderer-react';
import { UploadFile, UploadProps } from 'antd';

export interface IAttachmentList {
  text: string;
  name: string;
  tips?: string;
  value: any[];
  required?: boolean;
  setValue: React.Dispatch<React.SetStateAction<any[]>>;
  fileId: string;
}

export interface IFileUploadProps extends RouteComponentProps<any> {
  isDetail?: boolean;
  attachmentList: IAttachmentList[];
  restDownload?: boolean;
  colNumber?: number;
  actionUrl?: string;
  token: string;
  limitCount?: number;
}

export interface IFileParams {
  file: IOriginFileObj;
  fdEntityKey: string;
  defaultValue?: any[];
}

export type IOriginFileObj = UploadFile<any> & {
  fdEntityKey?: string;
  fdFileName?: string;
  uploadDatetime?: string;
};

export type IHandleAttachmentDelete = (fileParams: Pick<IAttachmentList, 'fileId' | 'value' | 'setValue'>) => void;

export type IHandleFileChange = (fileParams: IFileParams, setData: IAttachmentList['setValue']) => void;
