import projectConfig from '@/config/projectConfig';
import request from '@/utils/request';
import { Modal, Spin } from 'antd';
import { renderAsync } from 'docx-preview';
import React, { forwardRef, useState } from 'react';
const { apiPrefix } = projectConfig;

export type WordPreviewYHandle = {
  render: (fileId: string) => void;
  renderByUrl: (downlodaUrl: string) => void;
};

type WordPreviewProps = {
  wordRef: any;
};

const WordPreview: React.ForwardRefRenderFunction<WordPreviewYHandle, WordPreviewProps> = (props, ref) => {
  const { wordRef } = props;
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRender = (blob: Blob) => {
    renderAsync(blob, document.getElementById('file-preview-modal') as HTMLDivElement, null as unknown as HTMLDivElement, {
      className: 'docx',
      inWrapper: true,
      ignoreWidth: false,
      ignoreHeight: false,
      ignoreFonts: false,
      breakPages: true,
      ignoreLastRenderedPageBreak: true,
      experimental: false,
      trimXmlDeclaration: true,
      debug: false,
    });
  };

  React.useImperativeHandle(wordRef, () => ({
    render: async (fileId: string) => {
      setVisible(true);
      setLoading(true);

      const defaultUrl = `/file/download/id=${fileId}`;
      const url = `${apiPrefix}${defaultUrl}`;
      const blob = await request(url, {
        responseType: 'blob',
      });
      if (!(blob instanceof Blob)) return false;
      renderAsync(blob, document.getElementById('file-preview-modal') as HTMLDivElement, null as unknown as HTMLDivElement, {
        className: 'docx',
        inWrapper: true,
        ignoreWidth: false,
        ignoreHeight: false,
        ignoreFonts: false,
        breakPages: true,
        ignoreLastRenderedPageBreak: true,
        experimental: false,
        trimXmlDeclaration: true,
        debug: false,
      });
      setLoading(false);
    },
    renderByUrl: async (downlodaUrl: string) => {
      setVisible(true);
      setLoading(true);
      const blob = await request.get(downlodaUrl, {
        responseType: 'blob',
      });
      if (!(blob instanceof Blob)) return false;
      handleRender(blob);
      setLoading(false);
    },
  }));

  return (
    <div id="file-preview-modal-container" ref={wordRef}>
      <Modal
        open={visible}
        title="文件预览"
        onCancel={() => setVisible(false)}
        width={1200}
        bodyStyle={{ overflow: 'scroll', height: '70vh' }}
        footer={null}
        destroyOnClose
      >
        <Spin spinning={loading} size="large">
          <div id="file-preview-modal" />
        </Spin>
      </Modal>
    </div>
  );
};

export default forwardRef(WordPreview);
