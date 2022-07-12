import React from 'react';
import { PictureFilled } from '@ant-design/icons';
import { Upload } from 'antd';
import { ExtendControlType } from 'braft-editor';
import { ContentUtils } from 'braft-utils';

const uploadHandler = (param: any, { form, name }: any) => {
  if (!param.file) {
    return false;
  }
  const editorState = form.getFieldValue(name);
  const content = ContentUtils.insertMedias(editorState, [
    {
      type: 'IMAGE',
      url: URL.createObjectURL(param.file),
    },
  ]);
  form.setFieldsValue({ [name]: content });
};

const uploadControl = (
  editor: any,
  { form, name }: any,
): ExtendControlType => ({
  key: 'uploader',
  type: 'component',
  component: (
    <Upload
      accept="image/*"
      showUploadList={false}
      customRequest={(param) => uploadHandler(param, { form, name })}
    >
      {/*这里的按钮最好加上type＝＂button＂，以避免在表单容器中触发表单提交，用Antd的Button组件则无需如此 */}
      <button
        type="button"
        className="control-item button upload-button"
        data-title="插入图片"
      >
        <PictureFilled />
      </button>
    </Upload>
  ),
});

export default uploadControl;
