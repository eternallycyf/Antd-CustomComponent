import { BASE_CONFIG } from './utils';
import { CSSProperties } from 'react';

export type IGetOptions = {
  data: any;
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

interface fieldNames {
  name: string;
  valueKey: string | number;
  percentKey: string | number;
  color: CSSProperties['color'];
  children?: Omit<fieldNames, 'children'>[];
}

export interface IChartConfig {
  /**
   * @description 数据key
   * @required
   */
  fieldNames: fieldNames;
  /**
   * @description tooltip 显示的单位
   * @default ''
   */
  unitSymbol?: string;
}
