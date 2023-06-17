import { FormInstance, FormProps } from 'antd';
import { Search } from '@/typings/core/form';

/**
 * @description
 * parser和transform同时使用:
 * 1. parser 用于展示
 * 2. transform 用于最终onFinish的数据
 * 3. 两者基准数据都是原始数据
 */
export type IFormList = Search<any> & {
  /**
   * @description 是否展示风格
   */
  isView?: boolean;
  /**
   * @description 只用于展示 isView === true 时使用
   * 只展示
   * 不参与最终onFinish的数据
   */
  parser?: (value: any, record: any) => any;
  /**
   * @description
   * 不展示
   * 参与最终onFinish的数据 以原始数据为基数(和parser的结果无关)
   */
  transform?: (value: any, values: any) => any;
};

export type IHandle = {
  form: FormInstance;
  /**
   * @description 转换数据方法 && 设置回显数据
   * @param record
   * @param formList
   * @param isInit
   * @param cb
   * @returns
   */
  getParserValues: (record: any, formList: IFormList[], isInit?: boolean, cb?: (values: any) => any) => any;
};

export type IMyFormProps = {
  /**
   * @description 组件ref
   * @type {React.RefObject<IHandle>}
   */
  wrapperRef: any;
  /**
   * @description 表单
   */
  formList: IFormList[];
  /**
   * @description 初始数据
   */
  defaultValue?: Object;
  /**
   * @description 是否展示风格
   */
  isViewMode?: boolean;
  /**
   * FormProps
   */
  formProps?: FormProps;
  /**
   * @description 提交回调
   */
  onFinish: (values: any) => void;
  /**
   * @description 重置回调
   */
  onResetCallback?: () => void;
};
