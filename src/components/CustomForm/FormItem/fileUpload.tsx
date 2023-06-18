import { IFileUploadProps } from '@/components/File/FileUpload/interface';
import projectConfig from '@/config/projectConfig';
import { IControlProps } from '@/typings';
import { Form } from 'antd';
import React, { useImperativeHandle } from 'react';
const { apiPrefixMock } = projectConfig;

export interface IFileUploadControlProps extends Omit<IControlProps, 'onChange'>, IFileUploadProps {}

const FileUpload: React.FC<IFileUploadControlProps> = React.forwardRef((props, ref) => {
  const { label, name, initialValue = [], itemProps, attachment = [], isRequired = false, value, onChange, ...controlProps } = props;

  useImperativeHandle(ref, () => ({}));

  return (
    <Form.Item name={name} initialValue={initialValue} required={isRequired} {...itemProps}>
      <FileUpload
        attachment={{
          label,
          name,
          isRequired,
          ...attachment,
        }}
        actionUrl={`${apiPrefixMock}/file/uploadV2`}
        isDetail={false}
        colNumber={24}
        {...controlProps}
      />
    </Form.Item>
  );
});

export default FileUpload;
