import { FormItemProps } from 'antd';
import { ColumnGroupType, ColumnType } from 'antd/lib/table/interface';
import { ReactNode } from 'react';
import { Search } from './form';

//#region
type AnyData = Record<string, unknown>;
type RenderReturn<TRecord = AnyData> = ReturnType<NonNullable<ColumnType<TRecord>['render']>>;
type Column<TRecord = AnyData> =
  // | (Omit<ColumnGroupType<TRecord>, 'render'> & {
  //     render?: (value: TRecord, record: TRecord, index: number) => RenderReturn<TRecord>;
  //   })
  // | (ColumnType<TRecord> & {
  //     dataIndex?: keyof TRecord;
  //     render?: <T = TRecord>(value: T, record: TRecord, index: number) => RenderReturn<TRecord>;
  //   })
  | ColumnType<TRecord> & {
      title: ReactNode | (() => ReactNode);
      /**
       * @description 仅针对title的tooltip
       * 可传入字符串 或者传入对象
       * */
      tooltip?:
        | string
        | (() => ReactNode)
        | {
            text?: () => ReactNode;
            extraText?: () => ReactNode;
          };
      /**
       * @description 格式化时间
       * 1. formatTime:true 默认格式化为YYYY-MM-DD
       * 2. formatTime:true format:YYYY-MM-DD HH:mm:ss => 格式化为YYYY-MM-DD HH:mm:ss
       * 3. formatTime:{ type: 'YYYY.MM.DD', format: 'YYYY-MM-DD' } => 格式化为YYYY-MM-DD
       * 针对特殊格式 可传入人对象 dayjs(text, type).format(format)
       */
      format?: string;
      formatTime?: boolean | { type?: string; format: string };
      /**
       * @description 格式化金融数据 增加千分号
       * 可传入具体的保留位数
       */
      formatNumber?: boolean | number;
      formatPercent?: boolean;
      dict?: {
        text: string;
        value: string | number;
      }[];

      ellipsis?:
        | boolean
        | {
            ellipsisType?: 'line' | undefined;
            lines?: number;
            number?: number;
          };

      dataIndex?: keyof TRecord;
      children?: Column<TRecord>[];
      // 仅在editable为true时生效
      editable?: boolean;
      formItemProps?: Search;
      // 权限控制
      acpCode?: string;

      // 自定义排序发给后端的字段
      sorterIndex?: string;

      /**
       * @description 点击分页功能 是否刷新 用于前端自己排序
       */
      isRefresh?: boolean;
      /**
       * @description 初始化是否显示
       */
      initChecked?: boolean;
      /**
       * @description 初始化checkbox是否禁用
       */
      initCheckedDisabled?: boolean;
    };
// & FormControl
// 传入泛型 Columns<{ code: string }> 指定dataIndex及render的record类型
type Columns<TRecord = AnyData> = Column<TRecord>[];
//表单控件
export type IBaseColumnsType<T = AnyData> = Columns<T>;
//#endregion
