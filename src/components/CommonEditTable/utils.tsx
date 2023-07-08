import Ellipsis from '@/core/base/Ellipsis';
import { getFieldComp } from '@/core/helpers';
import { formatNumber, formatPercent, formatTime, getDictMap } from '@/utils/util';
import { FormInstance } from 'antd';
import _ from 'lodash';
import { downloadExcel } from '../File/FileExportExcel';
import { ICommonEditTableColumnsType } from './EditTable';

export type IHandleExport<Values = any> = (title: string, columns: any[], dataSource: Values[]) => void;

export const handleExport: IHandleExport = (title, columns = [], dataSource = []) => {
  const getItem = (item: ICommonEditTableColumnsType) => (columns || [])?.find((ele) => ele?.dataIndex === item?.dataIndex);
  downloadExcel({
    filename: title,
    sheets: [
      {
        sheetName: title,
        columns: columns
          .filter((item) => item.dataIndex !== 'operation' || item.key !== 'operate')
          .map((item) => ({
            ...item,
            title: typeof item.title === 'string' ? item.title : getItem(item)?.title ?? item?.dataIndex,
          })),
        dataSource: dataSource,
        header: title,
      },
    ],
  });
};

export const getCurrentFieldValue = (form: FormInstance, name: string, index: number) => {
  if (!form) return [undefined, undefined];
  const record = (form.getFieldValue(name) || [])?.[index] || {};
  const arr = form.getFieldValue(name) || [];
  return [record, arr];
};

export const formatEditTableColumns = (defaultOptions: ICommonEditTableColumnsType, val: any) => {
  const options = {
    format: 'YYYY-MM-DD',
    ellipsis: false,
    ellipsisType: 'line',
    rows: 1,
    maxLength: 100,
    ...defaultOptions,
  };

  let text = val;
  if (_.isNil(text)) return '--';
  if (typeof text == 'string' && text.trim()?.length == 0) return '--';

  if (options.dict) {
    text = getDictMap(options.dict)[text];
    text = _.isNil(text) ? '--' : text;
  }

  if (options.formatTime) {
    text = formatTime(options, text);
  }

  if (options.formatPercent) {
    text = formatPercent(text);
  }

  if (Number.isInteger(options.formatNumber) || options.formatNumber) {
    text = formatNumber(options, text);
  }

  if (options.ellipsis) {
    return options.ellipsisType === 'line' ? (
      <Ellipsis lines={options.rows}>{text}</Ellipsis>
    ) : (
      <Ellipsis length={options.maxLength}>{text}</Ellipsis>
    );
  }

  return text;
};

export const removeExtraColumnsProps = (columns: ICommonEditTableColumnsType[] = []): ICommonEditTableColumnsType[] => {
  return columns.map((item) => {
    const { ellipsis, format, tooltip, formatNumber, formatPercent, dict, formatTime, ...originProps } = item;
    return originProps;
  });
};
