import React, { PureComponent } from 'react';
import { Modal } from 'antd';
import PDFView from '@/components/File/FileViewerV1/FileView';

class PDFPreview extends PureComponent<any, any> {
  protected pdfViewRef: React.RefObject<any> = React.createRef();
  constructor(props: any) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  controlIsShow = (params: { src?: string; base64?: string }) => {
    const { modalVisible } = this.state;
    const { src, base64 } = params;
    this.setState({
      modalVisible: !modalVisible,
      src,
      base64,
    });
  };

  render() {
    const { modalVisible, src, base64 } = this.state;
    return (
      <Modal title="PDF预览" visible={modalVisible} onCancel={() => this.setState({ modalVisible: false })} width={1200} footer={null} destroyOnClose>
        <PDFView ref={this.pdfViewRef} src={src} base64={base64} styles={{ height: 600 }} />
      </Modal>
    );
  }
}

export default PDFPreview;
