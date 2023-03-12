import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver';

const path = process.env.NODE_ENV === 'development' ? `./word.docx` : `/Antd-CustomComponent/word.docx`;

/**
 * description： 导出echarts图片，格式转换
 */
export function base64DataURLToArrayBuffer(dataURL: string) {
  const base64Regex = /^data:image\/(png|jpg|svg|svg\+xml);base64,/;
  if (!base64Regex.test(dataURL)) {
    return false;
  }
  const stringBase64 = dataURL.replace(base64Regex, '');
  const binaryString = window.atob(stringBase64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    const ascii = binaryString.charCodeAt(i);
    bytes[i] = ascii;
  }
  return bytes.buffer;
}

export function exportWord(title: string, contentWord: object) {
  const ImageModule = require('open-docxtemplater-image-module');
  JSZipUtils.getBinaryContent(path, function (error: any, content: any) {
    // input.docx是模板。我们在导出的时候，会根据此模板来导出对应的数据
    // 抛出异常
    if (error) {
      throw error;
    }
    // 图片处理
    const opts: any = {};
    opts.centered = false;
    opts.getImage = (chartId: string) => {
      return base64DataURLToArrayBuffer(chartId);
    };
    opts.getSize = function () {
      //自定义指定图像大小，此处可动态调试各别图片的大小
      return [600, 290];
    };

    const imageModule = new ImageModule(opts);
    // 创建一个PizZip实例，内容为模板的内容
    const zip = new PizZip(content);
    // 创建并加载docxtemplater实例对象
    const doc = new Docxtemplater();
    opts.centered = true; // 图片居中，在word模板中定义方式为{%image}
    opts.fileType = 'docx';
    doc.attachModule(imageModule);
    doc.loadZip(zip);
    // 设置模板变量的值
    doc.setData(contentWord);
    try {
      // 用模板变量的值替换所有模板变量
      doc.render();
    } catch (error: any) {
      // 抛出异常
      const e = {
        message: error.message,
        name: error.name,
        stack: error.stack,
        properties: error.properties,
      };
      console.log(
        JSON.stringify({
          error: e,
        }),
      );
      throw error;
    }
    // 生成一个代表docxtemplater对象的zip文件（不是一个真实的文件，而是在内存中的表示）
    const out = doc.getZip().generate({
      type: 'blob',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });
    // 将目标文件对象保存为目标类型的文件，并命名
    saveAs(out, title + '.docx');
  });
}
