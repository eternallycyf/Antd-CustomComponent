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
import { SearchProps, PasswordProps, TextAreaProps } from 'antd/es/input';
import { SliderBaseProps } from 'antd/es/slider';
import { IBaseFormControlType } from '../base';
import { ISelectFetchConfig } from '../control/select';

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

//#region
export type IDynamicBaseFormControlType<T extends IBaseFormControlType> = T extends 'input'
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
