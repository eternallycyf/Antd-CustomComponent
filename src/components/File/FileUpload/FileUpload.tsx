import AccessBtn from '@/components/AccessBtn';
import projectConfig from '@/config/projectConfig';
import { withRoutePage } from '@/core/Enhance/withRoutePage';
import { ConnectState } from '@/typings/connect';
import { CloudUploadOutlined } from '@ant-design/icons';
import { connect, withRouter } from '@umijs/max';
import { Form, Upload, UploadProps } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { compose } from 'redux';
import Detail from './Detail';
import styles from './index.less';
import { IFileListExtraRecord, IFileListResponse, IFileUploadProps } from './interface';
import { beforeUpload, handleFileChange } from './utils';
const { apiPrefix } = projectConfig;

const FileUpload: React.FC<IFileUploadProps> = (props) => {
  const { value = [], onChange } = props;
  const [fileList, setFileList] = useState<IFileListExtraRecord[]>(value);
  const [replaceIndex, setReplaceIndex] = useState<number>(-1);
  const uploadWrapperRef = useRef<any>(null!);
  const {
    attachment,
    actionUrl: defaultActionUrl,
    fileKeys: defaultFileKeys,
    isDetail = false,
    colNumber = 24,
    token,
    crmUserId,
    crmUserRealname,
    isDownloadByS3 = true,
  } = props;
  const { headerItemProps = {}, maxCount, extraRecord } = attachment;
  const actionUrl = defaultActionUrl || `flow/upload`;
  const fileKeys = {
    fileName: defaultFileKeys?.fileName || 'filename',
    fileId: defaultFileKeys?.fileId || 'id',
    updateTime: defaultFileKeys?.updateTime || 'dateDateTime',
    url: defaultFileKeys?.url || 'url',
  };

  useEffect(() => {
    onChange && onChange(fileList);
  }, [fileList]);

  const defaultHeaderFormItemProps = {
    label: attachment?.label,
    tooltip: attachment?.tooltip,
    required: attachment?.isRequired,
    wrapperCol: { style: { textAlign: 'right' as 'right' } },
    colon: attachment?.extra ? true : false,
    ...headerItemProps,
  };

  const uploadFormItemProps = {
    name: attachment?.name,
  };
  const UploadProps: UploadProps<IFileListResponse> = {
    name: 'file',
    multiple: false,
    showUploadList: false,
    headers: { acpauth: token, crmUserId, crmUserRealname },
    action: actionUrl,
    beforeUpload,
    onChange: (info) => {
      const params = {
        ...info,
        extraRecord,
        defaultList: fileList,
      };
      handleFileChange(params, setFileList, replaceIndex, fileKeys);
    },
    style: {
      width: maxCount && (fileList || [])?.length >= maxCount ? 0 : '100%',
    },
  };
  const UploadDraggerContent = (
    <div>
      <CloudUploadOutlined /> 将文件拖到此处，或<span className={styles['btn-link']}>点击上传</span>
    </div>
  );

  const detailProps = {
    isDetail,
    colNumber,
    fileList,
    setFileList,
    setReplaceIndex,
    uploadRef: uploadWrapperRef,
    fileKeys,
    isDownloadByS3,
  };

  if (isDetail) return <Detail {...detailProps} />;

  return (
    <div className={styles.FileUpload}>
      <div className={styles.uploadContent}>
        <Form.Item {...defaultHeaderFormItemProps}>
          <AccessBtn
            btnList={
              attachment?.extra &&
              (attachment?.extra as any[]).map((item) => ({
                ...item,
                size: item?.size || 'middle',
              }))
            }
          />
        </Form.Item>
        {fileList?.length != 0 && (
          <Form.Item>
            <Detail {...detailProps} />
          </Form.Item>
        )}
        <Form.Item {...uploadFormItemProps}>
          <div ref={uploadWrapperRef} onClick={() => setReplaceIndex(-1)}>
            <Upload.Dragger {...UploadProps} ref={uploadWrapperRef}>
              {UploadDraggerContent}
            </Upload.Dragger>
          </div>
        </Form.Item>
      </div>
    </div>
  );
};

export default compose<typeof FileUpload>(
  withRoutePage,
  withRouter,
  connect(({ global, login }: ConnectState) => ({
    token: login.token,
    crmUserId: global.crmUserInfo?.userId ?? '',
    crmUserRealname: encodeURI(global.crmUserInfo?.realname) ?? '',
  })),
)(FileUpload);
