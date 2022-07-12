import React from 'react';
import { Modal } from 'antd';
import { ExtendControlType } from 'braft-editor';
// import { confirm } from '@/widget/CommonModal';
const PreviewModal: React.FC<any> = (props) => {
  const { html, close, ...restProps } = props;
  return (
    <Modal
      {...restProps}
      title="预览"
      onCancel={close}
      onOk={close}
      okText="确定"
      cancelText="取消"
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Modal>
  );
};
const previewControl = (editor: any, options: any): ExtendControlType => ({
  key: 'preview',
  type: 'button',
  text: '预览',
  onClick: () => {
    // 判断是否为空，editor.current.getValue（）.isEmpty（）
    const html = editor.current.getValue().toHTML();
    // confirm({ html },PreviewModal);
  },
});

export default previewControl;
