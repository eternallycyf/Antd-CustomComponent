import React, { useImperativeHandle, useRef } from 'react';
import BraftEditor from 'braft-editor';
import Table from 'braft-extensions/dist/table';
import MaxLength from 'braft-extensions/dist/max-length';
import { ContentUtils } from 'braft-utils';
import ColorPicker from 'braft-extensions/dist/color-picker';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/table.css';
import 'braft-extensions/dist/color-picker.css';
import 'braft-extensions/dist/code-highlighter.css';
import { IControlProps } from '@/typings';
import CustomControls from './controls';
// 表格扩展
BraftEditor.use(Table());
// 输入字数限制扩展
BraftEditor.use(
  MaxLength({
    defaultValue: 10000,
  }),
);
// 高级拾色器扩展
BraftEditor.use(
  ColorPicker({
    theme: 'light', // 支持dark和light两种主题，默认为dark
  }),
);
interface IBraftEditorProps extends IControlProps {
  extendControlKey?: any[];
  valueType?: 'raw' | 'html';
  onChange?: (content: any) => void;
}
/**
 * 编辑器空间
 * 文档地址：https://www.yuque.com/braft-editor/be/lzwpnr
 * 编辑器首页：https://braft.margox.cn
 */
const MyBraftEditor: React.FC<IBraftEditorProps> = React.forwardRef(
  ({ form, valueType, extendControlKey, onChange, ...restProps }, ref) => {
    const editorRef = useRef();

    useImperativeHandle(ref, () => ({}));

    // 处理文本黏贴
    const handlePastedText = (
      text: any,
      HTML: any,
      editorState: any,
      editor: any,
    ) => {
      // 在此处来自行处理HTML内容之类的
      const stripedHTMLStringFunc = (HTML: any) => {
        let newHTML = HTML;
        if (HTML) {
          newHTML = newHTML.replace(
            /font-size:(.+?)(pt)/g,
            ($0: any, $1: any, $2: any) => {
              let new_$1 = parseInt($1, 10);
              let new_$2 = $2.replace('pt', 'px');
              return `font-size: ${new_$1}${new_$2}`;
            },
          );

          newHTML = newHTML.replace(/ptpx/g, 'px');
          return newHTML;
        }
        return undefined;
      };

      // 调用insertHTML来将内容插入到编辑器
      editor.setValue(
        ContentUtils.insertHTML(
          editorState,
          stripedHTMLStringFunc(HTML),
          'paste',
        ),
      );
      return 'handled'; // 一定要return
      // handled来告诉编辑器你自己已经处理了粘贴内容，不需要编辑器来处理
    };

    // 编辑器内容改变事件
    const handleChange = async (state: any) => {
      const content = valueType === 'raw' ? state.toRAW() : state.toHTML();
      if (onChange) {
        onChange(content);
      }
    };

    // 自定义控件
    const customControlKeys = Object.keys(CustomControls);
    const extendControls: any = (extendControlKey as any).map((key: any) => {
      const index = customControlKeys.indexOf(key);
      if (key !== -1) {
        return (CustomControls as any)[customControlKeys[index]];
      }
      return undefined;
    });

    return (
      <BraftEditor
        ref={editorRef as any}
        onChange={handleChange}
        contentStyle={{ height: 300 }}
        controlBarStyle={{ backgroundColor: '#f1f1f1' }}
        handlePastedText={handlePastedText}
        controls={[
          'font-size',
          'text-color',
          'bold',
          'italic',
          'underline',
          'strike-through',
          'text-align',
          'emoji',
          'text-indent',
          'link',
          'hr',
          'separator',
          'media',
        ]}
        media={{
          externals: {
            image: true,
            video: false,
            audio: false,
            embed: false,
          },
        }}
        extendControls={extendControls.map((control: any) =>
          control(editorRef, { form, ...restProps }),
        )}
        {...restProps}
      />
    );
  },
);

MyBraftEditor.defaultProps = {
  valueType: 'html',
  extendControlKey: [],
};
export default MyBraftEditor;
