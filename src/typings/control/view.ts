export interface IViewProps {
  className?: string;
  /**
   * @name maxLength rows render 只能同时存在一个
   */
  /**
   * @name 是否可复制 没有 render 时生效
   */
  copyable?: boolean;
  maxLength?: number;
  rows?: number;
  /**
   * @name 解析展示数据
   * 只参与展示 不参与最终结果
   * 参与最终onFinish的数据 以原始数据为基数(和parser的结果无关)
   */
  parser?: (value: any, record: any, values: any) => any;
  render?: (value: any, record: any, values: any) => React.ReactNode;
}
