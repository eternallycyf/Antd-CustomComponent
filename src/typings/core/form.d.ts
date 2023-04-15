import { FormItemProps } from 'antd';
import { FormControl } from '../';
import { ICustomProps } from '../control/custom';
import { ISelectProps } from '../control/select';
import { IDatePickerProps } from '../control/time';

// 拓展 FormControl
export interface IBaseFormControlProps<T> extends ISelectProps, ICustomProps, IDatePickerProps {
  name: keyof T;
  style?: React.CSSProperties;
  placeholder?: string;
  allowClear?: boolean;
  transform?: (value: any) => any;
  Component?: (value: ICustomProps) => React.ReactNode;
}

//#region
type AnyData = Record<string, unknown>;
export type Search<TRecord = AnyData> =
  | (Omit<FormControl, 'name'> & {
      name: keyof TRecord;
    })
  | (Omit<FormControl, 'name'> & {
      name: keyof TRecord;
    } & FormControl)
  | (Omit<FormControl, 'name'> & IBaseFormControlProps<TRecord> & FormControl & FormItemProps);

type Searches<TRecord = AnyData> = Search<TRecord>[];
export type IBaseSearchesType<T = AnyData> = Searches<T>;
//#endregion
