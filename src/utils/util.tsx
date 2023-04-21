import _, { some, isArray, keyBy, keys } from 'lodash';
import dayjs from 'dayjs';
import { exportFile } from '@/services/global';
import React from 'react';
import { Modal, Tooltip } from 'antd';
import Ellipsis from '@/core/base/Ellipsis';
import { QuestionCircleOutlined } from '@ant-design/icons';

const reg = /xxx/g;

export function getDictMap(dict: any) {
  const dictMap: any = {};
  dict.forEach((item: any) => (dictMap[item.value] = item.text));
  return dictMap;
}

// 对象转查询字符串
export const objectToQueryStr = (obj: any) => {
  const str: string[] = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(p + '=' + obj[p]);
    }
  }
  return str.join('&');
};

const renderTooltip = (title: string = '', tooltip: string = '', extraText = '') => {
  return (
    <div>
      <span style={{ marginRight: 4 }}>{title}</span>
      <Tooltip title={tooltip}>
        <QuestionCircleOutlined
          style={{
            marginLeft: 2,
            fontSize: 12,
            color: 'rgb(153,153,153)',
          }}
        />
      </Tooltip>
      {extraText}
    </div>
  );
};

const formatNumber = (options: any, value: number) => {
  const fractionDigits = typeof options.formatNumber === 'number' ? options.formatNumber : 2;
  if (_.isNil(value)) return '--';
  if (isNaN(Number(value))) return value;
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
};

const formatPercent = (value: number) => {
  if (_.isNil(value)) return '--';
  if (isNaN(Number(value))) return value;
  return (value * 100)?.toFixed(2) + '%';
};

const formatTime = (options: any, text: any) => {
  if (_.isNil(text)) return '--';
  if (typeof options.formatTime === 'object') {
    const { format, type } = options.formatTime;
    return dayjs(text, type).format(format);
  }
  return dayjs(text).format(options.format);
};

/**
 * 格式化表格 columns
 * @param data
 */
export function formatColumn(data: any[]) {
  const defaultOptions = {
    format: 'YYYY-MM-DD',
    ellipsis: false,
    ellipsisType: 'line',
    lines: 1,
    number: 100,
  };

  const deepData = _.cloneDeep(data);
  const accessCollection = JSON.parse(sessionStorage.getItem('accessCollection') || '[]');

  return deepData
    .filter(({ acpCode }) => (acpCode ? accessCollection.includes(acpCode) : true))
    .map((item, index) => {
      const options = {
        ...defaultOptions,
        ...item,
      };

      if (!item.render) {
        item.render = (newText: any) => {
          let text = newText;
          return _.isNil(text) ? '--' : text;
        };

        if (item.dict) {
          item.render = (newText: any) => {
            let text = newText;
            text = getDictMap(item.dict)[text];
            return _.isNil(text) ? '--' : text;
          };
        }

        if (item.formatTime) {
          item.render = (text: any) => formatTime(options, text);
        }

        if (item.formatPercent) {
          item.render = formatPercent;
        }

        if (Number.isInteger(item.formatNumber) || item.formatNumber) {
          item.render = (text: number) => formatNumber(item, text);
        }

        if (item.ellipsis) {
          item.render = (text: any) => {
            if (_.isNil(text)) return '--';
            let newText = text;
            if (item.dict) newText = getDictMap(item.dict)[text];
            if (item.formatTime) newText = formatTime(options, text);
            if (item.formatPercent) newText = formatPercent(text);
            if (item.formatNumber) newText = formatNumber(item, text);

            return options.ellipsisType === 'line' ? (
              <Ellipsis tooltip={true} lines={options.lines}>
                {newText}
              </Ellipsis>
            ) : (
              <Ellipsis tooltip={true} length={options.number}>
                {newText}
              </Ellipsis>
            );
          };
          item.ellipsis = {
            showTitle: false,
          };
        }
      }

      if (item.tooltip) {
        const { title } = item;
        if (typeof item.tooltip === 'string') {
          item.title = () => renderTooltip(title, item.tooltip);
        } else if (typeof item.tooltip === 'function') {
          item.title = () => renderTooltip(title, item.tooltip());
        } else {
          const text = typeof item.tooltip.text === 'function' ? item.tooltip.text() || '' : item.tooltip.text || '';
          const extraText =
            item.tooltip.extraText === 'function' ? item.tooltip.extraText() || '' : item.tooltip.extraText || '';
          item.title = () => renderTooltip(title, text, extraText);
        }
      }
      item.children = formatColumn(item.children || []);
      return item;
    });
}

/**
 * 格式化日期参数
 * @param param
 * @param format
 * @returns
 */
export const formatParams = (param: object, format: string = 'YYYYMMDD') => {
  const values = _.cloneDeep(param);
  for (const index in values) {
    if (values.hasOwnProperty(index)) {
      if (values[index] instanceof dayjs) {
        values[index] = values[index].format(format);
      }

      if (_.isArray(values[index])) {
        values[index] = String(values[index]);
      }
    }
  }
  return values;
};

/**
 * 下载文件
 * @param searchParams
 * @param options
 * @param callback
 */
export const handleDownload = (searchParams: any, options = { url: '', fileName: '' }, callback?: () => void) => {
  exportFile(options.url, searchParams).then((response: any) => {
    response.blob().then((blob: Blob) => {
      if (response.status === 200) {
        if (window.navigator && (window as any).navigator.msSaveOrOpenBlob) {
          (window as any).navigator.msSaveOrOpenBlob(blob, options.fileName);
        } else {
          const blobUrl = window.URL.createObjectURL(blob);
          const aElement = document.createElement('a');
          const fileName = options.fileName;
          aElement.href = blobUrl;
          aElement.download = fileName;
          aElement.click();
          window.URL.revokeObjectURL(blobUrl);
        }
      } else if (callback) callback();
    });
  });
};

/**
 * 数组转树形结构
 * @param data
 * @param pid
 */
export const arrayToTree = (data: any[], pid: string | number): any[] => {
  const result = [];
  let temp;
  for (const item of data) {
    if (item.pid === pid) {
      const obj = { ...item, key: item.id, value: item.id, title: item.name };
      temp = arrayToTree(data, item.id);
      obj.children = (temp.length > 0 && temp) || [];
      result.push(obj);
    }
  }
  return result;
};

/**
 * 复制文本
 * @param values
 */
export const copyText = (value: string): boolean => {
  let result: boolean = false;
  const userAgent: string = navigator.userAgent;
  const tempTextarea = document.createElement('textarea');
  document.body.appendChild(tempTextarea);
  tempTextarea.value = value;
  if (userAgent.match(/(iPhone|iPod|iPad):?/i)) {
    window.getSelection()?.removeAllRanges();
    const range = document.createRange();

    range.selectNode(tempTextarea);
    window.getSelection()?.addRange(range);
    result = document.execCommand('copy');
    window.getSelection()?.removeAllRanges();
  } else {
    tempTextarea.select();
    result = document.execCommand('copy');
  }
  document.body.removeChild(tempTextarea);
  return result;
};

/**
 * 文字必填
 * @param message 错误信息
 * @param isRequired 是否必填
 * @returns
 */
export const getTextRequired = (message: string, isRequired: boolean = true): object => {
  return {
    required: isRequired,
    whiteSpace: true,
    message,
  };
};
