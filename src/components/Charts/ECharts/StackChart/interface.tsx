import { BASE_CONFIG } from './utils';
import { CSSProperties } from 'react';

export type IGetOptions = {
  data: any[];
  /**
   * @description 基础配置
   */
  baseConfig?: Partial<typeof BASE_CONFIG>;
  /**
   * @description echarts配置
   */
  chartConfig?: any;
  style?: CSSProperties;
};

export interface IChartConfig {
  name: string;
  /**
   * 当showName和name不一致时，showName会显示在tooltip中
   */
  showName?: string;
  /**
   * @description 数据key
   * @required
   */
  dataKey: string;
  /**
   * @description 百分比字段 添加了就会出现在tooltip中
   */
  percentKey?: string;
  /**
   * @description 是否显示在图例中
   * @required
   */
  isLegend: boolean;
  /**
   * @description 图例name额外后缀
   * @default ''
   */
  legendSuffix?: string;
  /**
   * @description 是否显示在series中
   * @deprecated
   * @todo 暂时根据 isLegend 判断 只有 isLegend 为 true 时才显示在 series 中
   */
  isSeries: boolean;
  /**
   * @description tooltip 显示的单位
   * @default ''
   */
  unitSymbol?: string;
  /**
   * @description tooltip 及 legend 图标显示的形状
   * @default ''
   * @enum rect | line | false
   */
  shape: 'rect' | 'line' | false;
  /**
   * @description 图表类型
   * @default ''
   * @enum 'bar' | 'line'
   */
  type?: 'bar' | 'line';
  /**
   * @description 图表形状颜色
   * @required ''
   */
  shapeColor?: CSSProperties['color'];
  leftClassName?: string;
  rightClassName?: string;
  isBold?: boolean;
  /**
   * @description 格式化数据
   */
  format: (value: number) => number | string;
  /**
   * @description 自定义格式化 tooltip 数字颜色 如果大于0 显示红色，小于0显示绿色...
   * @default (val) => val === 0 ? '#2A303B' : (val > 0 ? '#E62C3B' : '#0FBE3F') : '#2A3038'
   */
  formatColor?: (val: number) => CSSProperties['color'];
  hasHr?: boolean;
  /**
   * @description 是否为上方显示的tag
   * @default false
   */
  isTopFlag?: boolean;
  /**
   * @description 自定义series
   */
  series?: Object;
  /**
   * @description 一行是否只有一个 Name 没有value 则居中显示
   * @default false
   */
  isOnly?: boolean;
  tootipType?: string | number;
}
