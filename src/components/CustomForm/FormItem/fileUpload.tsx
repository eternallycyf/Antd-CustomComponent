import { IFileUploadProps } from '@/components/File/FileUpload/interface';
import projectConfig from '@/config/projectConfig';
import { IControlProps } from '@/typings';
import { Form } from 'antd';
import React, { useImperativeHandle } from 'react';
import FileUpload from '@/components/File/FileUpload';
const { apiPrefixMock } = projectConfig;

// 1. 使用form.item.label
// {
//   name: 'file',
//   label: '上传文件',
//   type: 'fileUpload',
//   layout,
//   itemProps: {
//     required: true,
//     rules: [
//       {
//         validator: (_: any, fileList) => {
//           if (fileList && fileList.length != 0) return Promise.resolve();
//           return Promise.reject('附件是必填项');
//         }
//       }
//     ]
//   },
//   controlProps: {
//     attachment: {
//       label:''
//     }
//   }
// };

// 2. 不使用form.item.label 但 rules依然使用
// {
//   name: 'file',
//   label: '上传文件',
//   type: 'fileUpload',
//   layout,
//   itemProps: {
//     required: false,
//     rules: [
//       {
//         validator: (_: any, fileList) => {
//           if (fileList && fileList.length != 0) return Promise.resolve();
//           return Promise.reject('附件是必填项');
//         }
//       }
//     ]
//   },
//   controlProps: {
//     attachment: {
//       label: '',
//       isRequired: true
//     }
//   }
// };

export interface IFileUploadControlProps extends Omit<IControlProps, 'onChange'>, IFileUploadProps {}

const FileUploadControl: React.FC<IFileUploadControlProps> = (props) => {
  const { label: defaultLabel, name: defaultName, initialValue = [], itemProps, attachment, value, onChange, ...controlProps } = props;

  const isRequired = attachment?.isRequired ?? itemProps?.required ?? false;
  const label = attachment?.label ?? defaultLabel ?? '';

  return (
    <FileUpload
      attachment={{
        label,
        isRequired,
        ...attachment,
      }}
      actionUrl={`${apiPrefixMock}/file/uploadV2`}
      isDetail={false}
      colNumber={24}
      value={value}
      onChange={onChange}
      {...controlProps}
    />
  );
};

export default FileUploadControl;
