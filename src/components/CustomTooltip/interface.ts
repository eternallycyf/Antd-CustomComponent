import { ColProps } from 'antd';

interface IBaseProps {
  /**
   * @name 需要格式化的string
   * @property {string | React.ReactNode} text=''
   */
  text: string | any;
  /**
   * @name 样式
   * @property {React.CSSProperties} [style={color: 'rgba(0,0,0,0.45)',fontSize: 14}]
   */
  style?: React.CSSProperties | any;
  /**
   * @name 栅格
   * @type number | string
   * @default 35
   */
  col?: number | string;
  /**
   * @name 是否可以复制
   * @property {boolean} [copyable=false]
   */
  copyable?: boolean;
  colProps?: ColProps;
  paragraphClassName?: string;
  tooltipClassName?: string;
  expandIcon?: React.ReactNode;
  retractIcon?: React.ReactNode;
}
interface ISingleRowProps {
  /**
   * @name 最大长度 maxLength和row同时只有一个生效
   * @property {number} [maxLength=35]
   */
  maxLength?: number;
}
interface RowProps {
  /**
   * @name 最大行数
   * @type number | 'autoSize'
   * @default 1
   */
  rows: number | 'autoSize';
  /**
   * @name 是否显示省略号 => ...
   * @property {boolean} [EllipsisSymbol=true]
   */
  EllipsisSymbol?: boolean;
  /**
   * @name 是否可展开收起
   * @property {boolean} [expend=true]
   */
  expend?: boolean;
  /**
   * @name 一行的最大高度 当开启展开收起时 传入用于 处理闪烁问题 初次渲染如果超过这个高度自动隐藏
   * @property {number} [lineMaxHeight=50]
   */
  lineMaxHeight?: number;
  /**
   * @name 展开收起按钮是否固定在最右边
   * @property {boolean} [isRight=true]
   */
  isRight?: boolean;
  btnStyle?: 'default' | 'btn';
  /**
   * @name 展开收起按钮样式
   * @type 'default' | 'btn'
   * @default undefined
   * @example <caption>default</caption>
   * customShowBtn: () => arr.length > 10 ? true : false
   */
  customShowBtn?: () => boolean;
  /**
   * @name 更多的长度
   */
  customMoreLength?: number;
  /**
   * @name 是否是标签
   * @property {boolean} [isTag=false]
   */
  isTag?: boolean;
}
interface IRowProps {
  /**
   * @name 行配置 maxLength和row同时只有一个生效
   * @property {number} [maxLength=35]
   */
  row?: RowProps;
}
export interface ICustomTooltipProps extends IBaseProps, ISingleRowProps, IRowProps {}
type ICustomTooltipSimpleProps = IBaseProps & ISingleRowProps;
type ICustomTooltipRowProps = IBaseProps & IRowProps;
export type IProps<T extends boolean | unknown> = T extends true
  ? ICustomTooltipRowProps
  : T extends false
  ? ICustomTooltipSimpleProps
  : ICustomTooltipProps;
