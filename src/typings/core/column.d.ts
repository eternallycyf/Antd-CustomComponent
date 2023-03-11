import { FormItemProps } from 'antd';
import { ColumnGroupType, ColumnType } from 'antd/lib/table/interface';
import { ReactNode } from 'react';
import { Search } from './form';

//#region
type AnyData = Record<string, unknown>;
type RenderReturn<TRecord = AnyData> = ReturnType<NonNullable<ColumnType<TRecord>['render']>>;
type Column<TRecord = AnyData> =
  | (Omit<ColumnGroupType<TRecord>, 'render'> & {
      render?: (value: TRecord, record: TRecord, index: number) => RenderReturn<TRecord>;
    })
  | (ColumnType<TRecord> & {
      dataIndex?: keyof TRecord;
      render?: <T = TRecord>(value: T, record: TRecord, index: number) => RenderReturn<TRecord>;
    })
  | (ColumnType<TRecord> & {
      title: ReactNode | (() => ReactNode);
      // TODO: 拓展属性
      dataIndex?: keyof TRecord;
      tooltip?: React.ReactNode;
      // 仅在editable为true时生效
      editable?: boolean;
      formItemProps?: Search;
    });
// & FormControl
// 传入泛型 Columns<{ code: string }> 指定dataIndex及render的record类型
type Columns<TRecord = AnyData> = Column<TRecord>[];
//表单控件
export type IBaseColumnsType<T = AnyData> = Columns<T>;
//#endregion
