import { FormItemProps } from 'antd/es/form/FormItem';
import { TableProps } from 'antd/es/table/Table';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { ButtonProps } from 'antd/lib/button';
import React, { ReactNode } from 'react';
import { FormInstance } from 'antd/es/form';

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
  visible?: any;
  element?: any;
  buttonType?: string;
}

//表格
export interface ICommonTable<T> extends TableProps<T> {
  wrapClassStr?: string;
  urls?: {
    listUrl?: string;
    addUrl?: string;
    editUrl?: string;
  };
  recordKey?: string;
  extraParams?: object; // 查询固定参数
  alternateColor?: boolean; // 是否奇偶行不同颜色
  defaultPageSize?: number;
  dataHandler?: (data: any) => any;
  draggable?: boolean;
  resizable?: boolean;
  editable?: boolean;
  button?: IButtonProps[]; // 列表buttonItem
  itemButton?: IButtonProps[]; // 列表项item
  buttonLen?: number;
  footer?: any; // 列表页脚
  showIndex?: boolean; // columns展示索引
  calcHeight?: boolean; // 是否计算列表高度
  dataSource?: any[];
  pagination?: TablePaginationConfig | false;
  rowSelection?: any;
  selectedRowKeys?: any[]; // 指定选中项的key数组
  selectType?: 'checkbox' | 'radio' | boolean; // 多选／单选
  onSelect?: (selectedRowKeys: string[] | number[], selectedRows: any[]) => any;
  isSummary?: boolean; // 是否显示汇总行
  dataPath?: string;
  children?: React.ReactNode;
  [propName: string]: any;
}

//弹窗类型
export enum ModalType {
  normal = 'normal',
  modal = 'modal',
  drawer = 'drawer',
}

//表单控件
type boolFunc = (config: any) => boolean;

export type IColumnsType<T = any> = ColumnsType<
  FormControl & { key: React.Key } & T
>;
interface ISearchMoreProps<T> extends FormControl {
  [props: number]: T;
}
export type ISearchesType<T = any> = ISearchMoreProps<T>[];

interface ArrayProps {
  rowKey: string;
  columns: IColumnsType;
}

export interface EditTableProps extends ICommonTable<any> {
  form: FormInstance;
  columns: IColumnsType;
  handleSave?: any; // 保存
}

export interface FieldCompType {
  name: string;
  type: string;
  record?: any;
  controlProps?: IControlProps;
  tableProps?: EditTableProps;
  arrayProps?: ArrayProps;
  formFieldProps?: FormItemProps;
  [propName: string]: any;
}

//表単
export interface CustomForm {
  formList?: any[]; //控件列表
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
   *使用record数据对表单进行赋值，时间类型初始值需要转换成moment类型
   */
  record?: any;
  [otherProps: string]: any;
}

interface ArrayProps {
  rowKey: string;
  columns: IColumnsType;
}

export interface EditTableProps extends ICommonTable<any> {
  form: FormInstance;
  columns: IColumnsType;
  handleSave?: any; //保存
}

export interface FormControl {
  //通用配置
  name: string; // 控件name
  label: string; // 控件名称
  type?: string; // 控件类型
  style?: React.CSSProperties;
  width?: number;
  initialValue?: any; // 初始值
  format?: any; // 格式化
  // 表单布局配置
  col?: any;
  layout?: any;
  //远程请求配置
  fetchConfig?: {
    apiUrl: string;
    method?: any;
    params?: any;
    searchKey?: string;
    dataPath?: string;
    initDictFn?: (record: any) => any[];
    firstFetch?: boolean;
  };
  placeholder?: string;
  // item配置
  itemProps?: FormItemProps;
  // 表单配置
  formFieldProps?: FormItemProps;
  //控件属性配置
  controlProps?: IControlProps;
  dict?: IControlProps['dict'];
  dictConfig?: { textKey: string; valueKey: string }; //表格属性配置
  tableProps?: EditTableProps;
  // 动态表单配置
  arrayProps?: ArrayProps;
  //控件状态配置
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
}

//表単控件属性
export interface IControlProps {
  fetchConfig?: {
    apiUrl: string;
    method?: any;
    params?: any;
    searchKey?: string;
    dataPath?: string;
    initDictFn?: (record: any) => any[];
    firstFetch?: boolean;
  };
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
