/* eslint-disable no-param-reassign */
import React, { useState, useCallback, useEffect, forwardRef } from 'react';
import BraftEditor, { EditorState, BraftEditorProps } from 'braft-editor';
import Table from 'braft-extensions/dist/table';
import MaxLength from 'braft-extensions/dist/max-length';
import ColorPicker from 'braft-extensions/dist/color-picker';
const braftUtils = require('braft-utils');
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/table.css';
import 'braft-extensions/dist/color-picker.css';
import 'braft-extensions/dist/code-highlighter.css';
import CustomControls from './components/controls';
import { FormInstance } from 'rc-field-form';
import { MAX_LENGTH, CONTROLS_ALL, CONTROLS_LESS } from './components/constant';
import { message } from 'antd';
const { ContentUtils, ContenntUtils } = braftUtils;

BraftEditor.use(Table());
BraftEditor.use(
  MaxLength({
    defaultValue: MAX_LENGTH,
  }),
);
BraftEditor.use(
  ColorPicker({
    theme: 'light', // 支持dark和light两种主题，默认为dark
  }),
);

interface EditorProps {
  /** antd-Form实例对象*/
  form?: FormInstance;
  /** 富文本 Form-Item-name*/
  name?: string;
  /** 自动拓展的功能*/
  extendControlKey?: any[];
  value?: string;
  /** valueType */
  valueType?: 'html' | 'raw';
  /** 是否显示文字最大可输入个数 */
  showWordLimitPrompt?: boolean;
  /** 根据第一个参数的file通过调用服务器接口 返回一个服务器文件地址 */
  getImageURL?: (file: File) => Promise<string>;
  /** 改变时触发 */
  onChange?: (value: string) => void;
  [props: string]: any;
}

export default class UploadDemo extends React.Component<EditorProps> {
  editorRef = React.createRef<BraftEditorProps>();
  state = {
    editorState: BraftEditor.createEditorState(null),
  };

  isContentEmpty = () => {
    return this.state.editorState.toHTML() === '<p></p>';
  };

  setEditorState = (RAW: {}) => {
    const editorState = BraftEditor.createEditorState(RAW);
    this.handleChange(editorState);
  };

  // 处理文本粘贴
  handlePastedText = (text: string, HTML: string, editorState: any, editor: any) => {
    // 在此处来自行处理HTML内容之类的
    const stripedHTMLStringFunc = (HTML: string) => {
      if (HTML) {
        HTML = HTML.replace(/font-size:(.+?)(pt)/g, ($0, $1, $2) => {
          $1 = parseInt($1, 10);
          $2 = $2.replace('pt', 'px');
          return `font-size: ${$1}${$2}`;
        });

        HTML = HTML.replace(/ptpx/g, 'px');
        return HTML;
      }
      return undefined;
    };

    // 调用innerHTML 来将内容插入到编辑器
    editor.setValue(ContenntUtils.insertHTML(editorState, stripedHTMLStringFunc(HTML), 'paste'));
    return 'handled'; // 一定要return handled 来告诉编辑器你自己已经处理过了粘贴内容 不需要编辑器处理
  };

  handleChange = (editorState: EditorState) => {
    const { form, name, valueType, onChange } = this.props;
    const content = valueType === 'raw' ? editorState.toRAW() : editorState.toHTML();
    this.setState({ editorState });
    form?.setFieldsValue({ [name as string]: content });
    if (onChange) {
      onChange(content);
    }
  };

  uploadHandler = async (params: any) => {
    const { getImageURL } = this.props;
    const reg = /.(png|jpg|gif|jpeg|webp)$/;
    const str = '.' + params.file.type.split('/')?.[1];
    if (!reg.test(str)) return message.error('富文本只支持图片格式');
    if (!params.file) return false;
    const content = ContentUtils.insertMedias(this.state.editorState, [
      {
        type: 'IMAGE',
        url: getImageURL ? await getImageURL(params.file) : URL.createObjectURL(params.file),
      },
    ]);
    this.setState({
      editorState: content,
    });
    this.handleChange(content);
  };

  render() {
    const { form, valueType, extendControlKey, value, onChange, getImageURL, showWordLimitPrompt = true, ...restProps } = this.props;
    const { editorRef, handlePastedText } = this;
    // 自定义控件
    const customControlsKeys = Object.keys(CustomControls);
    const extendControls: any = extendControlKey!.map((key) => {
      const index = customControlsKeys.indexOf(key);
      if (key !== -1) {
        return (CustomControls as any)[customControlsKeys[index]];
      }
      return null;
    });

    return (
      <div className="editor-wrapper">
        <BraftEditor
          //@ts-ignore
          ref={editorRef}
          value={this.state.editorState}
          controlBarStyle={{ background: '#f1f1f1' }}
          handlePastedText={handlePastedText}
          contentStyle={{
            minHeight: 500,
            border: '1px solid #ccc',
            // overflow: 'unset'
          }}
          onChange={this.handleChange}
          controls={CONTROLS_LESS as any}
          media={{
            externals: {
              image: true,
              video: false,
              audio: false,
              embed: false,
            },
          }}
          extendControls={extendControls.map((control: any) =>
            control(editorRef, {
              form,
              uploadHandler: this.uploadHandler,
              editorState: this.state.editorState,
              ...restProps,
            }),
          )}
          {...restProps}
        />
        <div>
          {this.state.editorState.toText().length}/{MAX_LENGTH}
        </div>
      </div>
    );
  }
}
