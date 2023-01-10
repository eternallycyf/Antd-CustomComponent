import React from 'react';
import { Modal } from 'antd';
import { ExtendControlType } from 'braft-editor';

// const confirm = () => { };

// const PreviewModal: React.FC<any> = (props) => {
//   const { html, close, ...restProps } = props;
//   console.log(html)
//   return (
//     <Modal
//       visible={true}
//       title='预览'
//       onCancel={close}
//       onOk={close}
//       okText='确定'
//       concelText='取消'
//       {...restProps}
//     >
//       <div dangerouslySetInnerHTML={{ __html: html }}></div>
//     </Modal>
//   );
// };

const previewControl = (editor: any, options: any): ExtendControlType => {
  return {
    key: 'preview',
    type: 'button',
    text: '预览',
    onClick: () => {
      // 判断是否为空 editor.current.getValue().isEmpty()
      // const html = editor.current.getValue().toHTML()
      // conform({html},PreviewModal)
      const html = options.editorState.toHTML();

      Modal.confirm({
        icon: false,
        centered: true,
        maskClosable: false,
        bodyStyle: { minWidth: 500 },
        width: 'auto',
        okText: '确定',
        cancelText: '取消',
        content: <div dangerouslySetInnerHTML={{ __html: html }}></div>,
      });
    },
  };
};

export default previewControl;
