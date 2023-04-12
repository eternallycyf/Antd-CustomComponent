import { ColProps } from 'antd';

interface IBaseProps {
  /**
   * @description 需要格式化的string
   * @type string | React.ReactNode
   * @default '''
   */
  text: string | any;
  /**
   * @description 样式
   * @type React.CSSProperties
   * @default {color: 'rgba(0,0,0,0.45)',fontSize: 14,}
   */
  style?: React.CSSProperties | any;
  /**
   * @description 栅格
   * @type number
   * @default 35
   */
  col?: number | string;
  /**
   * @description 是否可以复制
   * @type boolean
   * @default false
   */
  copyable?: boolean;
  colProps?: ColProps;
  paragraphClassName?: string;
  tooltipClassName?: string;
}
interface ISingleRowProps {
  /**
   * @description 最大长度 maxLength和row同时只有一个生效
   * @type number
   * @default 35
   */
  maxLength?: number;
}
interface RowProps {
  /**
   * @description 最大行数
   * @type number | 'autoSize'
   * @default 1
   */
  rows: number | 'autoSize';
  /**
   * @description 是否显示省略号 => ...
   * @type boolean
   * @default true
   */
  EllipsisSymbol?: boolean;
  /**
   * @description 是否可展开收起
   * @type boolean
   * @default true
   */
  expend?: boolean;
  /**
   * @description 一行的最大高度 当开启展开收起时 必须传入用于 处理闪烁问题 初次渲染如果超过这个高度自动隐藏
   * @type number
   * @default 50
   */
  lineMaxHeight?: number;
  /**
   * @description 展开收起按钮是否固定在最右边
   * @type boolean
   * @default false
   */
  isRight?: boolean;
  /**
   * @description 自定义是否展示 展开收起按钮
   * customShowBtn: () => arr.length > 10 ? true : false
   * @default undefined
   */
  btnStyle?: 'default' | 'btn';
  customShowBtn?: () => boolean;
}
interface IRowProps {
  /**
   * @description 行配置 (maxLength和row同时只有一个生效)
   * @type IRowProps
   * @default IRowProps
   */
  row?: RowProps;
}
interface ICustomTooltipProps extends IBaseProps, ISingleRowProps, IRowProps {}
type ICustomTooltipSimpleProps = IBaseProps & ISingleRowProps;
type ICustomTooltipRowProps = IBaseProps & IRowProps;
export type IProps<T extends boolean | unknown> = T extends true
  ? ICustomTooltipRowProps
  : T extends false
  ? ICustomTooltipSimpleProps
  : ICustomTooltipProps;
