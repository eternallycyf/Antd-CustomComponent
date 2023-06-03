import React, { PureComponent, ReactNode } from 'react';
import ReactFileViewer from 'react-file-viewer';
import { Button, message, Modal } from 'antd';
import request from '@/utils/request';
import projectConfig from '@/config/projectConfig';
import PDFPreview from './PDFPreview';
import WordPreview from './WordPreview';
import styles from './index.less';
const { apiPrefix } = projectConfig;

interface IProps {
  modalTitle?: string;
  fileInfo: {
    fileName: string;
    fileId?: string;
  };
  text?: ReactNode | string;
  downLoadUrl?: string;
  isLocal?: boolean;
  wrapper?: ReactNode;
}

export default class FileViewer extends PureComponent<IProps, any> {
  private readonly pdfRef: React.RefObject<any> = React.createRef();
  private readonly wordRef: React.RefObject<React.ElementRef<typeof WordPreview>> = React.createRef();
  state = {
    filePath: '',
    fileType: '',
    visible: false,
  };

  handleClick = async () => {
    const {
      isLocal,
      fileInfo: { fileName = '', fileId = '' },
      downLoadUrl = '',
    } = this.props;
    const defaultUrl = `${apiPrefix}/file/download?fileId=${fileId}`;
    const url = `${apiPrefix}${downLoadUrl || defaultUrl}`;
    const fileTypes = ['docs', 'doc', 'xlsx', 'png', 'jpg', 'pdf'];
    const fileType = fileName?.split('.')?.[1];
    if (!fileTypes.includes(fileType)) {
      return message.error('暂不支持该文件类型');
    }

    if (isLocal) {
      return this.setState({
        visible: true,
        fileType,
        filePath: downLoadUrl,
      });
    }

    if (fileType === 'doc' || fileType === 'docx') {
      if (fileId) {
        return this.wordRef.current?.render(fileId);
      } else {
        return this.wordRef.current?.renderByUrl(fileId);
      }
    }

    if (fileType === 'pdf') {
      this.pdfRef.current?.controlIsShow({
        src: url,
      });
    } else {
      const blob = await request(url, {
        responseType: 'blob',
      });
      if (!(blob instanceof Blob)) {
        return message.error('文件不存在');
      }
      const filePath = window.URL.createObjectURL(blob);
      this.setState({
        visible: true,
        fileType,
        filePath,
      });
    }
  };

  handleCancel = () => {
    this.setState({
      visible: false,
      fileType: '',
      filePath: '',
    });
  };

  render() {
    const { modalTitle = '文件预览', text = '预览', wrapper } = this.props;
    const { visible, fileType, filePath } = this.state;
    return (
      <div>
        {wrapper ? (
          <span style={{ padding: 0 }} onClick={this.handleClick}>
            {wrapper}
          </span>
        ) : (
          <Button type="link" style={{ padding: 0 }} onClick={this.handleClick}>
            {text}
          </Button>
        )}
        <Modal className={styles.modal} title={modalTitle} open={visible} width={800} footer={null} destroyOnClose onCancel={this.handleCancel}>
          <ReactFileViewer fileType={fileType} filePath={filePath} />
        </Modal>
        <PDFPreview ref={this.pdfRef} />
        <WordPreview wordRef={this.wordRef} />
      </div>
    );
  }
}
