import { FormItemProps } from 'antd/es/form/FormItem';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { ButtonProps } from 'antd/lib/button';
import React, { ReactNode } from 'react';
import { FormInstance } from 'antd/es/form';
import { TableProps } from 'antd';
import {
  IBaseFormControlType,
  IDynamicBaseFormControlType,
  IBaseFormControlProps,
  IBaseControlProps,
  IBaseCol,
  IBaseFormat,
  IBaseInitialValue,
  IBaseLayout,
  IFetchConfig,
} from './base';
import { PaginationProps } from 'antd/lib/pagination';
import { TableRowSelection } from 'antd/lib/table/interface';

//表单控件
type boolFunc = (config: {
  form: FormInstance;
  formData: any;
  record: any;
}) => boolean;

export type IColumnsType<T = any> = ColumnsType<
  FormControl & { key: React.Key } & T
>;
interface ISearchMoreProps extends FormControl {}

export type ISearchesType = ISearchMoreProps[];

//弹窗类型
export enum ModalType {
  normal = 'normal',
  modal = 'modal',
  drawer = 'drawer',
}

interface ArrayProps {
  rowKey: string;
  columns: IColumnsType;
}

//  菜单项
export interface MenuItem {
  id?: string;
  code?: string; // 菜单路径
  path: string; //菜単路径
  name: string; // 菜单名称
  target?: string; // 菜单跳转路径
  icon?: string; // 菜单图标
  component?: string; // 菜单组件
  authority?: string[]; // 权限配置
  routes?: MenuItem[]; // 子菜单列表(配置)
  children?: MenuItem[]; // 子菜单列表
  hideInMenu?: boolean; // 是否在菜单中隐藏
  hideInTab?: boolean; // 是否在tab中隐藏
  multiple?: boolean; // 是否多开标签页
  keepAlive?: boolean; // 是否缓存标签页
}
// 用户信息
export interface UserInfo<T> {
  userId?: T;
  groupId?: T;
  username?: string;
  nickname?: string;
  phone?: string;
  email?: string;
  avatar?: string;
  authority?: string[];
  [otherField: string]: any;
}

export interface IButtonProps extends ButtonProps {
  text: string | ReactNode;
  code?: string;
  visible?: boolean;
  /**@description 暂时只有Button支持 */
  element?: ReactNode;
  buttonType?: 'delete';
}

//表格
export interface ICommonTable<T> extends TableProps<T> {
  /**@description 最外层容器 className */
  wrapClassStr?: string;
  /**@description table查询的请求地址 */
  urls?: {
    listUrl?: string;
    // TODO: 未实现
    // addUrl?: string;
    // editUrl?: string;
  };
  /**@description 后端接口返回的table数据关键key */
  recordKey?: string;
  /**@description 额外的table请求固定参数 */
  extraParams?: object;
  /**@description 是否奇偶行不同颜色 */
  alternateColor?: boolean;
  /**@description 默认一页多少个*/
  defaultPageSize?: number;
  /**@description 处理data 第一个参数多了index和rowKey */
  dataHandler?: (
    data: { index: number; rowKey: string; [props: string]: any },
    dataSource: any[],
  ) => any;
  /**@description 是否可拖动 */
  draggable?: boolean;
  /**@description 是否自适应*/
  resizable?: boolean;
  /**@description 是否可编辑 未实现 */
  editable?: boolean;
  /**@description table上的按钮 */
  button?: IButtonProps[];
  /**@description 操作栏item */
  itemButton?: IButtonProps[];
  /**@description 用于计算操作栏的宽度 默认不需要修改*/
  buttonLen?: number;
  /**@description 手动指定操作栏宽度 */
  itemButtonWidth?: number;
  /**@description 页脚 */
  footer?: (currentPageData: any) => React.ReactNode;
  /**@description 是否显示序号 */
  showIndex?: boolean;
  /**@description 是否计算列表高度 */
  calcHeight?: boolean;
  /**@description 手动指定数据源 当长度大于1时生效 */
  dataSource?: any[];
  /**@description 分页相关配置 */
  pagination?: TablePaginationConfig | false;
  /**@description 额外操作配置*/
  rowSelection?: TableRowSelection<T>;
  selectedRows?: React.Key[];
  /**@description 指定选中项的key数组*/
  selectedRowKeys?: React.Key[];
  /**@description 多选／单选 */
  selectType?: 'checkbox' | 'radio';
  /**@description 选择时候触发 */
  onSelect?: (selectRowKeys: React.Key[], selectedRows: any[]) => void;
  /**@description  是否显示汇总行 发送给后端的 limit为29*/
  isSummary?: boolean;
  /**@description 网络请求后data的路径 */
  dataPath?: string;
  children?: React.ReactNode;
  [propName: string]: any;
}

export interface EditTableProps extends ICommonTable<any> {
  form: FormInstance;
  columns: IColumnsType;
  handleSave?: any; // 保存
}

export interface EditTableProps extends ICommonTable<any> {
  form: FormInstance;
  columns: IColumnsType;
  handleSave?: any; //保存
}

export interface FieldCompType {
  name: string;
  type: IBaseFormControlType;
  record?: any;
  controlProps?: IControlProps;
  tableProps?: EditTableProps;
  arrayProps?: ArrayProps;
  formFieldProps?: FormItemProps;
  [propName: string]: any;
}

//表単
export interface CustomForm {
  formList?: FormControl[]; //控件列表
  type?: 'grid' | 'inline'; //布局类型
  rows?: object; //Row配置
  cols?: object; //Col配置
  className?: string;
  defaultLayout?: any;
  loading?: boolean; //加载状态
  modalType?: ModalType; //弹窗类型
  handleSubmit?: (values: any) => void; //提交方法
  handleCancel?: () => void; //关闭弹窗或重置方法
  /**
   *使用record数据对表单进行赋值，时间类型初始值需要转换成dayjs类型
   */
  record?: any;
  [otherProps: string]: any;
}

/**@description 通用配置 */
export interface FormControl extends IBaseFormControlProps {
  /**@description 控件name */
  name: string;
  /**@description 控件名称 */
  label?: React.ReactNode | (() => React.ReactNode);
  // /**@description 控件类型 */
  type?: IBaseFormControlType;
  width?: number;
  /**@description 控件初始值 */
  initialValue?: IBaseInitialValue;
  /**@description 格式化 */
  format?: IBaseFormat;
  /**@description  表单布局配置*/
  col?: IBaseCol;
  layout?: IBaseLayout;
  children?: FormControl[];

  /**@description 远程请求配置 */
  fetchConfig?: IFetchConfig;
  /**@description form.item配置 */
  itemProps?: FormItemProps;
  /**@description 表单配置 */
  formFieldProps?: FormItemProps;
  /**@description 控件属性配置 */
  controlProps?: IControlProps;

  dict?: IControlProps['dict'];
  /**@description 表格属性配置 */
  dictConfig?: { textKey: string; valueKey: string };
  tableProps?: EditTableProps;

  /**@description 动态表单配置 */
  arrayProps?: ArrayProps;
  /**@description 控件状态配置 */
  hide?: boolean | boolFunc;
  disabled?: boolean | boolFunc;
  condition?: [
    {
      //匹配规则 正则或者字符串
      // eg:表单中的字段 id:＇01＇ ＆＆ name:＇aaa＇ 时将禁用输入框
      regex: object;
      action: 'disabled' | 'show' | 'hide';
    },
  ];

  /**description 多余的按钮 */
  otherType?: 'button';
  otherText?: React.ReactNode;
  [props: number]: FormItemProps;
}

//表単控件属性
export interface IControlProps extends IBaseControlProps {
  fetchConfig?: IFetchConfig;
  itemProps?: FormItemProps;
  tableProps?: EditTableProps;
  arrayProps?: ArrayProps;
  dictConfig?: { textKey: string; valueKey: string };
  Component?: any;
  dict?: Array<{
    text: string;
    value: string;
    disabled?: boolean;
    children?: Array<{ text: string; value: string; disabled?: boolean }>;
    rules?: any[]; //校验规则
    placeholder?: string;
    onChange?: (...args: any[]) => any;
    [propName: string]: any;
  }>;
  [props: string]: any;
}
