import { IUpdateProps } from '@/components/CustomForm/FormItem/update';
import { IBaseViewProps } from '@/components/CustomForm/FormItem/view';
import { IFileUploadProps } from '@/components/File/FileUpload/interface';
import {
  AutoCompleteProps,
  CascaderProps,
  CheckboxProps,
  DatePickerProps,
  InputNumberProps,
  InputProps,
  MentionProps,
  RadioProps,
  RateProps,
  SelectProps,
  SwitchProps,
  TimePickerProps,
  TransferProps,
  TreeSelectProps,
  UploadProps,
} from 'antd';
import { MonthPickerProps, RangePickerProps } from 'antd/es/date-picker';
import { PasswordProps, SearchProps, TextAreaProps } from 'antd/es/input';
import { SliderBaseProps } from 'antd/es/slider';
import { BraftEditorProps } from 'braft-editor';
import { IBaseFormControlType } from '../base';

interface IOriginDatePickerProps {
  [props: string]: DatePickerProps | any;
}

// 拓展 IControlProps
export type IBaseControlProps = (InputProps & SearchProps) &
  PasswordProps &
  TextAreaProps &
  InputNumberProps &
  AutoCompleteProps &
  SelectProps &
  CheckboxProps &
  RadioProps &
  SwitchProps &
  SliderBaseProps &
  RateProps &
  DatePickerProps &
  RangePickerProps &
  TimePickerProps &
  CascaderProps &
  MentionProps &
  TransferProps<any> &
  TreeSelectProps &
  UploadProps &
  IBaseViewProps &
  IFileUploadProps;

// 自己使用的时候，可以这样使用 controlProps: {} as IControlType<'input'>
//#region
export type IControlType<T extends IBaseFormControlType> = T extends 'input'
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
  ? MonthPickerProps
  : T extends 'quarter'
  ? MonthPickerProps
  : T extends 'dateRange'
  ? RangePickerProps
  : T extends 'month'
  ? MonthPickerProps
  : T extends 'time'
  ? TimePickerProps
  : T extends 'monthRange'
  ? MonthPickerProps
  : T extends 'editor'
  ? BraftEditorProps
  : T extends 'custom'
  ? any
  : T extends 'view'
  ? IBaseViewProps
  : T extends 'update'
  ? IUpdateProps
  : T extends 'fileUpload'
  ? IFileUploadProps
  : any;
//#endregion
