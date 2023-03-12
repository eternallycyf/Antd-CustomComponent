import React, { useState, Fragment, useImperativeHandle } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Upload, message, Modal } from 'antd';
import { IControlProps } from '@/typings';

interface IUploadProps extends IControlProps {
  action?: string; // 后台地址
  fileTypes?: string[]; // 允许文件类型
  maxFileSize?: number; // 最大文件大小
  showOnly?: boolean; // 如果只做展示 不展示相关操作
  fileName?: string | string[]; // 上传到后台的文件名
}

export function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const defaultFileTypes = [
  'rar',
  'bmp',
  'jpg',
  'jpeg',
  'gif',
  'png',
  'doc',
  'docx',
  'xls',
  'xlsx',
  'ppt',
  'pptx',
  'vsd',
  'pdf',
  'txt',
  'mpp',
  'xml',
  'htm',
  'html',
  'xhtml',
  'wav',
  'mp3',
];

const UploadControl: React.FC<IUploadProps> = React.forwardRef(
  ({ form, name, onChange, files, ...controlProps }: any, ref) => {
    const { maxFile, maxFileSize, fileTypes = defaultFileTypes } = controlProps;

    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([...files]);
    const handleCancel = () => setPreviewVisible(false);

    useImperativeHandle(ref, () => ({}));

    const handlePreview = async (file: any) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      setPreviewImage(file.url || file.preview);
      setPreviewVisible(true);
    };

    // 上传
    const handleChange = ({ file, fileList }: any) => {
      if (file.status) setFileList(fileList);
      onChange(fileList);
    };

    /**
     * 上传前校验
     * @param file
     * @returns
     */
    const handleBeforeUpload = (file: any): Promise<any> => {
      return new Promise((resolve, reject) => {
        if (file.size > (maxFileSize as number) * 1024 * 1024) {
          message.error(`请上传大小在 ${maxFileSize}MB 以内的文件`);
          reject(file);
        }
        if (fileTypes.every((type: any) => file.name.toLowerCase().indexof(type.toLowerCase()) === -1)) {
          message.error(`请上传符合要求的文件`);
          reject(file);
        }
        resolve(file);
      });
    };

    const uploadProps: any = {
      maxFile: 5,
      multiple: true,
      maxFileSize: 10,
      listType: 'picture-card',
      fileTypes,
      withCredentials: true,
      ...controlProps,
    };

    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">上传</div>
      </div>
    );

    return (
      <Fragment>
        <Upload
          {...uploadProps}
          fileList={fileList}
          onChange={handleChange}
          onPreview={handlePreview}
          beforeUpload={handleBeforeUpload}
        >
          {fileList.length >= maxFile ? null : uploadButton}
        </Upload>
        <Modal open={previewVisible} footer={null} onCancel={handleCancel}>
          {' '}
          <img alt="preview" style={{ width: '100%' }} src={previewImage} />{' '}
        </Modal>
      </Fragment>
    );
  },
);

export default UploadControl;
