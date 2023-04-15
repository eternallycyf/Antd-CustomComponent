/**@description 表单的基础属性 */
import { FormItemProps } from 'antd';
import { Method } from 'axios';
import { ISelectFetchConfig } from './control/select';

const FORM_TYPE_DICT = [
  'input',
  'search',
  'password',
  'textarea',
  'inputNumber',
  'autoComplete',
  'select',
  'checkbox',
  'radio',
  'switch',
  'slider',
  'rate',
  'date',
  'year',
  'quarter',
  'dateRange',
  'month',
  'time',
  'monthRange',
  'editor',
  'custom',
  'editCol', // 可编辑单元格 直接可以操作 没有保存和删除按钮 实时保存的编辑表格
  'editRow', // 可编辑行 有保存和删除按钮
  'view',
] as const;

export type IBaseFormControlType = (typeof FORM_TYPE_DICT)[number];

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

export type IBaseLayout = {
  labelCol?: FormItemProps['labelCol'];
  wrapperCol?: FormItemProps['wrapperCol'];
};

type BuildArray<Length extends number, Ele = unknown, Arr extends unknown[] = []> = Arr['length'] extends Length
  ? Arr
  : BuildArray<Length, Ele, [...Arr, Ele]>;

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
