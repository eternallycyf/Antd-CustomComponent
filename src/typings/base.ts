import {
  AutoCompleteProps,
  CheckboxProps,
  ColProps,
  DatePicker,
  FormItemProps,
  InputNumberProps,
  InputProps,
  RadioProps,
  RateProps,
  SelectProps,
  SwitchProps,
  DatePickerProps,
} from 'antd';
import { PasswordProps, SearchProps, TextAreaProps } from 'antd/es/input';
import { SliderBaseProps } from 'antd/es/slider';
import { Method } from 'axios';
import { ICustomProps } from './control/custom';
import { ISelectFetchConfig, ISelectProps } from './control/select';
import { IDatePickerProps } from './control/time';

export type IBaseFormControlType =
  | 'input'
  | 'search'
  | 'password'
  | 'textarea'
  | 'inputNumber'
  | 'autoComplete'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'switch'
  | 'slider'
  | 'rate'
  | 'date'
  | 'year'
  | 'quarter'
  | 'dateRange'
  | 'month'
  | 'time'
  | 'monthRange'
  | 'editor'
  | 'custom';

//#region
export type IDynamicBaseFormControlType<T extends IBaseFormControlType> =
  T extends 'input'
    ? InputProps
    : T extends 'search'
    ? SearchProps
    : T extends 'password'
    ? PasswordProps
    : T extends 'textarea'
    ? TextAreaProps
    : T extends 'inputNumber'
    ? InputNumberProps
    : T extends 'autoComplete'
    ? AutoCompleteProps
    : T extends 'select'
    ? SelectProps
    : T extends 'checkbox'
    ? CheckboxProps
    : T extends 'radio'
    ? RadioProps
    : T extends 'switch'
    ? SwitchProps
    : T extends 'slider'
    ? SliderBaseProps
    : T extends 'rate'
    ? RateProps
    : T extends 'date'
    ? DatePickerProps
    : T extends 'year'
    ? DatePickerProps
    : T extends 'quarter'
    ? DatePickerProps
    : T extends 'dateRange'
    ? DatePickerProps
    : T extends 'month'
    ? DatePickerProps
    : T extends 'time'
    ? DatePickerProps
    : T extends 'monthRange'
    ? DatePickerProps
    : T extends 'editor'
    ? TextAreaProps
    : T extends 'custom'
    ? any
    : any;
//#endregion

export type IBaseLayout = {
  labelCol?: FormItemProps['labelCol'];
  wrapperCol?: FormItemProps['wrapperCol'];
};

export type IBaseCol =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24';

export interface IBaseInitialValue {}

export interface IBaseFormat {}

export interface IFetchConfig extends ISelectFetchConfig {
  apiUrl: string;
  method?: Method;
  params?: any;
  searchKey?: string;
  dataPath?: string;
  initDictFn?: (record: any) => any[];
}

// 拓展 FormControl
export interface IBaseFormControlProps extends ISelectProps, IDatePickerProps {
  style?: React.CSSProperties;
  placeholder?: string;
  allowClear?: boolean;
  // 仅search可用
  transform?: (value: any) => any;
  Component?: (value: ICustomProps) => React.ReactNode;
}

interface IOriginDatePickerProps {
  [props: string]: DatePickerProps | any;
}

// 拓展 IControlProps
export interface IBaseControlProps
  extends Partial<
      InputProps &
        SearchProps &
        PasswordProps &
        TextAreaProps &
        InputNumberProps &
        AutoCompleteProps &
        SelectProps &
        CheckboxProps &
        RadioProps &
        SwitchProps &
        SliderBaseProps &
        RateProps
    >,
    Partial<IOriginDatePickerProps> {}
