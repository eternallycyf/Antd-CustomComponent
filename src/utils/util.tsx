import _, { some, isArray, keyBy, keys } from 'lodash';
import moment from 'moment';
import { exportFile } from '@/services/global';

export function getDictMap(dict) {
  const dictMap = {};
  dict.forEach((item) => (dictMap[item.value] = item.text));
  return dictMap;
}

// 对象转查询字符串
export const objectToQueryStr = (obj) => {
  const str: string[] = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(p + '=' + obj[p]);
    }
  }
  return str.join('&');
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

  return data.map((item, index) => {
    const options = {
      ...defaultOptions,
      ..._.pick(item, _.keys(defaultOptions)),
    };

    if (!item.render) {
      item.render = (text) => {
        if (item.dict) {
          text = getDictMap(item.dict)[text];
        }
        return text === null || typeof text === 'undefined' ? '--' : text;
      };
    }

    if (item.formatTime) {
      item.render = (text) => {
        return text ? <span>{moment(text).format(options.format)}</span> : '--';
      };
    }

    if (item.ellipsis) {
      item.render = (text) => {
        text = text === null || typeof text === 'undefined' ? '--' : text;
        return options.ellipsisType === 'line' ? (
          <Ellipsis tooltip={true} lines={options.lines}>
            {text}
          </Ellipsis>
        ) : (
          <Ellipsis tooltip={true} length={options.number}>
            {text}
          </Ellipsis>
        );
      };
    }

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
      if (values[index] instanceof moment) {
        values[index] = values[index].format(format);
      }

      if (_.isArray(values[index])) {
        values[index] = String(values[index]);
      }
    }
  }
  return values;
};

export function exportFile(url, params) {
  return request.get(url, {
    params,
    parseResponse: false,
    responseType: 'blob',
  });
}

/**
 * 下载文件
 * @param searchParams
 * @param options
 * @param callback
 */
export const handleDownload = (
  searchParams,
  options = { url: '', fileName: '' },
  callback?: Function,
) => {
  exportFile(options.url, searchParams).then((response) => {
    if (response.status === 200) {
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, options.fileName);
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
  const userAgend: string = navigator.userAgent;
  const tempTextarea = document.createElement('textarea');
  document.body.appendChild(tempTextarea);
  tempTextarea.value = value;
  if (userAgend.match(/(iPhone|iPod|iPad):?/i)) {
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
