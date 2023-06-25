import { IButtonGroupDefaultProps } from '@/components/AccessBtn/ButtonGroup';
import { ICommonEditTableColumnsType, ICommonEditTableHandle, ICommonEditTableProps } from '@/components/CommonEditTable/EditTable';
import { ICommonEditTableItemProps } from '@/components/CommonEditTable/Item';
import { IUpdateProps } from '@/components/CustomForm/FormItem/update';
import { TableProps } from 'antd';
import { FormInstance } from 'antd/es/form';
import { FormItemProps } from 'antd/es/form/FormItem';
import type { FormListFieldData } from 'antd/es/form/FormList';
import { FormListProps } from 'antd/es/form/FormList';
import { ButtonProps } from 'antd/lib/button';
import { TablePaginationConfig } from 'antd/lib/table';
import { TableRowSelection } from 'antd/lib/table/interface';
import React, { ReactNode } from 'react';
import { IBaseCol, IBaseFormat, IBaseFormControlType, IBaseInitialValue, IBaseLayout, IFetchConfig } from './base';
import type { IBaseColumnsType } from './core/column';
import { IBaseControlProps } from './core/control';
import { IBaseSearchesType } from './core/form';

type boolFunc = (config: { form: FormInstance; formData: any; record: any }) => boolean;

export type IColumnsType<T = Record<string, unknown>, R = Record<string, unknown>> = IBaseColumnsType<T, R>;
export type ISearchesType<T = Record<string, unknown>> = IBaseSearchesType<T>;

export type IEditTableHandle<Values = any, FormValues = any> = ICommonEditTableHandle<Values, FormValues>;
export type IEditTableProps<Values = any, Rest = Record<string, unknown>, FormValues = any> = ICommonEditTableProps<Values, Rest, FormValues>;
export type IEditTableColumnsType<Values = any, Rest = Record<string, unknown>> = ICommonEditTableColumnsType<Values, Rest>;
export type IEditTableItemProps<Values = any> = ICommonEditTableItemProps<Values>;

/**
 * @name 弹窗类型
 * @enum {string}
 * @example normal 普通弹窗
 * @example modal 模态框
 * @example drawer 抽屉
 */
export enum ModalType {
  normal = 'normal',
  modal = 'modal',
  drawer = 'drawer',
}

interface ArrayProps {
  rowKey: string;
  columns: IColumnsType<any>;
}

/**
 * @name 菜单项
 */
export interface MenuItem {
  id?: string;
  code?: string;
  /**@name 菜单路径 */
  path: string;
  /**@name 菜单名称 */
  name: string;
  /**@name 菜单跳转路径 */
  target?: string;
  /**@name 菜单图标 */
  icon?: string | null;
  /**@name 菜单组件 */
  component?: string | null;
  /**@name 权限配置 */
  authority?: string[];
  /**@name 菜单列表(配置) */
  routes?: MenuItem[];
  /**@name 子菜单列表 */
  children?: MenuItem[] | null;
  /**@name 是否在菜单中隐藏 */
  hideInMenu?: boolean;
  /**@name 是否在tab中隐藏 */
  hideInTab?: boolean;
  /**@name 是否多开标签页 */
  multiple?: boolean;
  /**@name 是否缓存标签页 */
  keepAlive?: boolean;
  /**@name 是否在面包屑中隐藏 */
  upperId?: string;
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

export interface IButtonGroupProps {
  groupValue?: string | number;
  onChange?: (value: string | number) => void;
  groupDict?: IButtonGroupDefaultProps['data'];
}

export interface IButtonDeleteProps {
  deleteText?: string;
}

export interface IButtonProps<T = any> extends Omit<ButtonProps, 'onClick' | 'onChange'>, IButtonGroupProps, IButtonDeleteProps {
  text: string | ReactNode;
  code?: string;
  visible?: boolean | boolFunc | ((field: FormListFieldData, e: Event, index: number) => void);
  /**@name 暂时只有Button支持 */
  element?: ReactNode;
  buttonType?: 'default' | 'link' | 'delete' | 'group' | 'formItem' | 'custom';
  formItemProps?: ISearchesType extends Array<infer U> ? U : any;
  onClick?: T;
}

export interface ICommonTableContext {
  loading: boolean;
}

/**
 * @typedef ICommonTable
 * @template T - dataIndex[]
 */
export interface ICommonTable<T = any> extends TableProps<T> {
  /**@name 最外层容器 className */
  wrapClassStr?: string;
  /**@name table查询的请求地址 */
  fetchMethod?: 'get' | 'post';
  /**@name 第一次初始化是否请求*/
  initRequest?: boolean;
  loading?: boolean;
  /**
   * @name 请求地址
   * @property {Record<string, any>} [urls = {}]
   * @type listUrl - 列表请求地址
   * @todo addUrl - 新增请求地址
   * @todo editUrl - 编辑请求地址
   */
  urls?: {
    listUrl?: string;
  };
  urlAlls?: {
    listUrl?: string;
  };
  /**@name 后端接口返回的table数据关键key */
  recordKey?: string;
  /**@name 额外的table请求固定参数 */
  extraParams?: object;
  /**@name 是否奇偶行不同颜色 */
  alternateColor?: boolean;
  /**@name 默认一页多少个*/
  defaultPageSize?: number;
  /**@name 处理data 第一个参数多了index和rowKey */
  dataHandler?: (data: { index: number; rowKey: string; [props: string]: any }[], dataSource: any[]) => any;

  /**@name 是否使用虚拟列表*/
  isVirtual?: boolean;
  /**@name 用于处理虚拟列表 点击排序 保留滚动位置 */
  handleScroll?: () => void;

  /**@name 虚拟列表-点击事件 */
  rowEventHandlers?: {
    onClick: (rowKey: string | number, rowData: any, rowIndex: number) => void;
  };
  /**@name 是否可拖动 */
  draggable?: boolean;
  /**@name 是否自适应*/
  resizable?: boolean;
  /**@name 是否可编辑 未实现 */
  editable?: boolean;
  /**@name table上的按钮 */
  button?: IButtonProps[];
  /**@name table左上的按钮 */
  buttonLeft?: IButtonProps[];
  /**@name 操作栏item */
  itemButton?: IButtonProps[];
  /**@name 用于计算操作栏的宽度 默认不需要修改*/
  buttonLen?: number;
  /**@name 手动指定操作栏宽度 */
  itemButtonWidth?: number;
  /**@name 页脚 */
  footer?: (currentPageData: any) => React.ReactNode;
  /**@name 是否显示序号 */
  showIndex?: boolean;
  /**@name 是否计算列表高度 */
  calcHeight?: boolean;
  /**@name 其他的高度 */
  otherHeight?: number;
  /**@name 手动指定数据源 当长度大于1时生效 */
  dataSource?: any[];
  /**@name 分页相关配置 */
  pagination?: TablePaginationConfig | false;
  /**@name 额外操作配置*/
  rowSelection?: TableRowSelection<T>;
  selectedRows?: React.Key[];
  /**@name 指定选中项的key数组*/
  selectedRowKeys?: React.Key[];
  /**@name 多选／单选 */
  selectType?: 'checkbox' | 'radio' | boolean;
  /**@name 选择时候触发 */
  onSelect?: (selectRowKeys: React.Key[], selectedRows: any[]) => void;
  expandable?: TableProps<T>['expandable'];

  /**
   * @example <caption>固定行方式1. 传入 rowkey 固定在最上方</caption>
   * 内部将包含rowkey 的数据 unshift 到数据最前面)
   * 使用条件:
   * 1. 后端一次返回了所有的数据 (如果没有返回所有的 没有返回时当然没法固定啦)
   * 2. 需要手动传入单元格的高度 (fixRowHeight)
   */
  fixRowKeys?: (number | string)[];
  /**@default [fixRowHeight=45] */
  fixRowHeight?: number;
  /**
   * @example <caption>固定行方式2. 通过调用后端接口 后端有一个和列表一样的接口</caption>
   * 通过 antd.summary(新建了一个table) 来实现固定化
   * 使用条件:
   * 1. 需要后端接口 或者自己mock数据支持 (后端接口是 urlAlls(多传了一个isAmounted) ,自己可以传入summaryDataSource:any[])
   * 2. 自定义固定单元格的内容 columns.userSummary(content: string, data: any[]) 方法自定义
   * 3. removeSummary 需要排除的合计项 (直接显示'--'了)
   */
  isSummary?: boolean;
  summaryDataSource?: any[];
  /**
   * @default [summaryPosition='top']
   */
  summaryPosition?: 'top' | 'bottom';
  /**@name 需要排除的合计项  */
  removeSummary?: string[];
  /**@name 操作栏是否固定 */

  operFixed?: 'right' | 'center' | 'left';
  /**@name 网络请求后data的路径 */
  dataPath?: string;
  /**@name 渲染前最后处理一次column */
  formatColumn?: (column: any[]) => any[];
  children?: React.ReactNode;
  columns: IColumnsType<T>;

  preChildren?: (value: ICommonTableContext) => React.ReactNode | null;

  [propName: string]: any;
}

export interface EditTableProps {
  columns: IColumnsType;
  handleFormatRowValues?: (text: string, record: any, index: number) => string;
  formListProps?: FormListProps;
  hasCancelButton?: boolean;
  hasSaveButton?: boolean;
  [props: string]: any;
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
  /**@name 控件列表 */
  formList?: ISearchesType;
  /**@name 表单布局 */
  type?: 'grid' | 'inline';
  /**@name Row配置 */
  rows?: object;
  /**@name Col配置 */
  cols?: object;
  className?: string;
  defaultLayout?: any;
  /**@name 加载状态 */
  loading?: boolean;
  /**@name 弹窗类型 */
  modalType?: ModalType;
  /**@name 提交方法 */
  handleSubmit?: (values: any) => void;
  /**@name 关闭弹窗或重置方法 */
  handleCancel?: () => void;
  /**
   * @name 使用record数据对表单进行赋值，时间类型初始值需要转换成dayjs类型
   */
  record?: any;
  [otherProps: string]: any;
}

/**
 * @name 表単控件属性
 */
export interface FormControl {
  /**@name 控件name */
  name?: string;
  /**@name 控件名称 */
  label?: React.ReactNode | (() => React.ReactNode);
  /**@name 控件类型 */
  type?: IBaseFormControlType;
  width?: number;
  placeholder?: string;
  style?: React.CSSProperties;
  /**@name 控件初始值 */
  initialValue?: IBaseInitialValue;
  /**@name 格式化 */
  format?: IBaseFormat;
  /**@name  表单布局配置*/
  col?: IBaseCol;
  layout?: IBaseLayout;
  children?: ISearchesType;

  /**@name 远程请求配置 */
  fetchConfig?: IFetchConfig;
  /**@name form.item配置 */
  itemProps?: FormItemProps & { next?: IUpdateProps['next'] };
  /**
   * @name 表单配置 尽量使用itemProps 传递form.Item的属性
   * formFieldProps 一般用于传递 rules 如果包含嵌套情况 可能无法传递属性到form.Item
   */
  formFieldProps?: { rules?: FormItemProps['rules']; style?: React.CSSProperties };
  /**@name 控件属性配置 */
  controlProps?: (IControlProps & IBaseControlProps) | Object;

  dict?: IControlProps['dict'];
  /**@name 表格属性配置 */
  dictConfig?: { textKey: string; valueKey: string };
  tableProps?: EditTableProps;

  /**@name 动态表单配置 */
  arrayProps?: ArrayProps;
  /**@name 控件状态配置 */
  hide?: boolean | boolFunc;
  disabled?: boolean | boolFunc;
  /**@name 是否可编辑 */
  editable?: boolean | boolFunc;
  /**
   * @name 匹配规则正则或者字符串
   * @example 表单中的字段 id:＇01＇ ＆＆ name:＇aaa＇ 时将禁用输入框
   */
  condition?: [
    {
      regex: object;
      action: 'disabled' | 'show' | 'hide';
    },
  ];
  acpCode?: string;

  /**@name 多余的按钮 */
  otherType?: 'button';
  otherText?: React.ReactNode;
}

/**
 * @name 表単控件属性
 */
export interface IControlProps {
  fetchConfig?: IFetchConfig;
  itemProps?: FormItemProps;
  tableProps?: EditTableProps;
  arrayProps?: ArrayProps;
  dictConfig?: { textKey: string; valueKey: string };
  Component?: any;
  dict?: ReadonlyArray<{
    text: string;
    value: string | number;
    disabled?: boolean;
    children?: Array<{ text: string; value: string; disabled?: boolean }>;
    rules?: any[]; //校验规则
    placeholder?: string;
    onChange?: (...args: any[]) => any;
    [propName: string]: any;
  }>;
  [propName: string]: any;
}
