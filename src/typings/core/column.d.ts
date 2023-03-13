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
        | ReactNode
        | {
            text?: ReactNode;
            extraText?: ReactNode;
          };
      /**
       * @description 格式化时间
       * 针对特殊格式 可传入人对象 dayjs(text, type).format(format)
       */
      formatTime?: string | { type?: string; format: string };
      /**
       * @description 格式化金融数据 增加千分号
       * 可传入具体的保留位数
       */
      formatNumber?: boolean | number;
      dataIndex?: keyof TRecord;
      // 仅在editable为true时生效
      editable?: boolean;
      formItemProps?: Search;
    };
// & FormControl
// 传入泛型 Columns<{ code: string }> 指定dataIndex及render的record类型
type Columns<TRecord = AnyData> = Column<TRecord>[];
//表单控件
export type IBaseColumnsType<T = AnyData> = Columns<T>;
//#endregion
