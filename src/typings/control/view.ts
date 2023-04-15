export interface IViewProps {
  className?: string;
  /**
   * @description maxLength rows render 只能同时存在一个
   */
  /**
   * @description 是否可复制 没有 render 时生效
   */
  copyable?: boolean;
  maxLength?: number;
  rows?: number;
  /**
   * @description
   * 只参与展示 不参与最终结果
   * 参与最终onFinish的数据 以原始数据为基数(和parser的结果无关)
   */
  parser?: (value: any, record: any, values: any) => any;
  render?: (value: any, record: any, values: any) => React.ReactNode;
}
