import { message, Tooltip, UploadProps } from 'antd';
import { IAttachmentList, IFileUploadProps, IHandleAttachmentDelete, IHandleFileChange } from './interface';
import _ from 'lodash';
import styles from './index.less';
import { QuestionCircleOutlined } from '@ant-design/icons';

export const AFTER_NAMES = ['.exe', '.bat', '.xml', '.acp', '.dll', '.vbs', 'chm', '.cmd', '.jsp', '.php', '.html', '.aspx'];
export const MAX_SIZE = 100;

export function Icon({ path }: { path: string }) {
  return <img src={require(`@/assets/icon/${path}.png`)} />;
}

export const renderTitle = (item: IAttachmentList) => {
  return (
    <div className={styles.label}>
      <span>{item.required && <span className={styles.iconRequired}>*</span>}</span>
      {item.text}
      {item.tips && (
        <Tooltip title={item.tips}>
          <QuestionCircleOutlined style={{ color: '#8E96A4' }} />
        </Tooltip>
      )}
    </div>
  );
};

export const beforeUpload: UploadProps['beforeUpload'] = (file) => {
  const { name, size } = file;
  const afterName = name.slice(name.lastIndexOf('.'));
  const maxSizeLength = MAX_SIZE * 1024 * 1024;
  if (size > maxSizeLength) {
    message.error(`文件大小最大不能超过${MAX_SIZE}M`);
    return false;
  }
  if (AFTER_NAMES.includes(afterName)) {
    message.error('不支持上传该类型文件!');
    return false;
  }
  return true;
};

export const handleAttachmentDelete: IHandleAttachmentDelete = (fileParams) => {
  const { fileId, value, setValue } = fileParams;
  const newValue = _.cloneDeep(value);
  const index = newValue.findIndex((item) => item.fileId === fileId);
  if (index != -1) {
    newValue.splice(index, 1);
    setValue(newValue);
  }
};

export const handleFileChange: IHandleFileChange = (fileParams, setData) => {
  const { file, fdEntityKey, defaultValue } = fileParams;
  const { name, uid, status, percent } = file;
  if (status) {
    let newFile = { fdFileName: name, fileId: uid, status, fdEntityKey, percent };
    let isSuccess = true;

    if (status === 'error') {
      message.error('上传失败');
      isSuccess = false;
    }

    if (status === 'done') {
      const { code, data } = file.response;
      if (code == 0 || code == 200) {
        newFile = { ...newFile, ...data, fdEntityKey };
      } else {
        message.error('上传失败');
        isSuccess = false;
      }

      const cloneDeepDefaultValue = _.cloneDeep(defaultValue) || [];
      const index = cloneDeepDefaultValue.findIndex((item) => item.fileId === uid);
      if (index > -1) {
        isSuccess ? cloneDeepDefaultValue.splice(index, 1, newFile) : cloneDeepDefaultValue.splice(index, 1);
      } else {
        cloneDeepDefaultValue.push(newFile);
      }

      setData(cloneDeepDefaultValue);
    }
  }
};
