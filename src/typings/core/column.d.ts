import { ColumnType } from 'antd/lib/table/interface';
import { ReactNode } from 'react';
import { Search } from './form';

//#region
type AnyData = Record<string, unknown>;
type RenderReturn<TRecord = AnyData> = ReturnType<NonNullable<ColumnType<TRecord>['render']>>;

/**
 * @typedef {object} tableColumn
 * @template {TRecord = AnyData} - TRecord
 */
export type Column<TRecord = AnyData> =
  | ColumnType<TRecord> & {
      title: ReactNode | (() => ReactNode);
      /**
       * @name 仅针对title的tooltip
       * */
      tooltip?:
        | string
        | (() => ReactNode)
        | {
            text?: () => ReactNode;
            extraText?: () => ReactNode;
          };
      /**
       * @name 格式化时间
       * @example formatTime:true 默认格式化为YYYY-MM-DD
       * @example formatTime:true format:YYYY-MM-DD HH:mm:ss => 格式化为YYYY-MM-DD HH:mm:ss
       * @example formatTime:{ type: 'YYYY.MM.DD', format: 'YYYY-MM-DD' } => 格式化为YYYY-MM-DD
       * @example 针对特殊格式 可传入人对象 dayjs(text, type).format(format)
       */
      format?: string;
      formatTime?: boolean | { type?: string; format: string };
      /**
       * @name 格式化金融数据 增加千分号
       * @example formatNumber: (val) => [val/10000, 2]  (最后一个是保留的位数)
       */
      formatNumber?: boolean | number | ((value: number) => number) | ((value: number) => [number, number]);
      formatPercent?: boolean;
      dict?: ReadonlyArray<{
        text: string;
        value: string | number;
        [key: string]: any;
      }>;

      ellipsis?:
        | boolean
        | {
            ellipsisType?: 'line' | undefined;
            lines?: number;
            number?: number;
          };
      /**
       * @name 更多展开收起 - 仅在ellipsis为false时生效 && 节点必须是单行(块级元素)
       * @returns {[React.ReactNode,number]|[React.ReactNode]|false} [节点,最大行数] 最大行数默认为2 传入false时不显示
       * @example <caption>示例</caption>
       * renderExpandMore: () => {
       *  return [Array.from({ length: 3 }, (v, i) => <div key={i}>string</div>),2]
       * }
       * @example <caption>返回空时显示--</caption>
       * renderExpandMore: () => false
       */
      renderExpandMore?: (text: any, record: keyof TRecord, index: number) => [React.ReactNode, number] | [React.ReactNode] | false;
      /**
       * @property {keyof TRecord | string} [dataIndex = '']
       */
      dataIndex?: keyof TRecord;
      children?: Column<TRecord>[];
      /**
       * @name 是否可编辑 仅在editable为true时生效
       */
      editable?: boolean;
      formItemProps?: Search<TRecord>;
      /**
       * @name 权限控制是否可见
       */
      acpCode?: string;

      /**
       * @name 自定义排序发给后端的字段
       */
      sorterIndex?: string;

      /**
       * @name 点击分页功能 是否刷新 用于前端自己排序
       */
      isRefresh?: boolean;
      /**
       * @name 初始化是否显示
       */
      initChecked?: boolean;
      /**
       * @name 初始化checkbox是否禁用
       */
      initCheckedDisabled?: boolean;
      useSummary?: (content: React.ReactNode, record: keyof TRecord) => React.ReactNode;
    };
type Columns<TRecord = AnyData, Rest = AnyData> = (Column<TRecord> & Rest)[];
export type IBaseColumnsType<T = AnyData, R = AnyData> = Columns<T, R>;
//#endregion
