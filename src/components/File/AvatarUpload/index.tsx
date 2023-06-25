import { PlusOutlined, RetweetOutlined } from '@ant-design/icons';
import { Form, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import type { UploadProps } from 'antd/es/upload';
import React, { useImperativeHandle, useState } from 'react';
import styles from './index.less';

const normFile = (e: any) => {
  if (Array.isArray(e)) return e;
  return e && e.fileList;
};

type IHandle = {
  fileList: UploadProps['fileList'];
  setFileList: (fileList: UploadProps['fileList']) => void;
};

interface IProps {
  label?: string;
  name?: string;
  AvatarUploadRef?: any;
}

const App: React.ForwardRefRenderFunction<IHandle, IProps> = (props) => {
  const { label = '上传头像', name = 'avatar', AvatarUploadRef } = props;
  const [fileList, setFileList] = useState<UploadProps['fileList']>([]);
  const UploadRef = React.useRef<any>(null);

  const handleReplaceFile = async () => UploadRef.current.upload && UploadRef.current.upload.uploader.onClick();
  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => setFileList(newFileList);

  useImperativeHandle(AvatarUploadRef, () => ({
    fileList,
    setFileList,
  }));

  return (
    <Form.Item
      name={name}
      label={label}
      valuePropName="fileList"
      getValueFromEvent={normFile}
      rules={[
        {
          required: true,
          validator: () => {
            if (fileList && fileList?.length !== 0) return Promise.resolve('');
            return Promise.reject(new Error('请上传头像'));
          },
        },
      ]}
    >
      <ImgCrop showGrid showReset quality={1} rotationSlider modalTitle="编辑头像">
        <Upload
          ref={UploadRef}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          onPreview={handleReplaceFile}
          onChange={handleChange}
          multiple={false}
          maxCount={1}
          showUploadList={{
            previewIcon: <RetweetOutlined className={styles.icon} />,
          }}
        >
          {fileList?.length === 0 && (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>上传照片</div>
            </div>
          )}
        </Upload>
      </ImgCrop>
    </Form.Item>
  );
};

export default React.forwardRef(App);
