import { IChartConfig } from '@/components/Charts/ECharts/StackChart/interface';
import { IChartConfig as IChartConfig2 } from '@/components/Charts/ECharts/ScatterChart/interface';
import { formatNumber, BASE_CONFIG } from '@/components/Charts/ECharts/StackChart/utils';
import _ from 'lodash';

type IGetChartConfig = (data: any) => IChartConfig[];
type IGetChartConfig2 = (data: any) => IChartConfig2[];

const formatMoney = (val: number) => {
  if (_.isNil(val)) return '--';
  if (!_.isNumber(val)) return val;
  const value = formatNumber(val, false);
  return Number(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export const getChartConfig: IGetChartConfig = (data) => {
  return [
    {
      name: '1111',
      dataKey: 'pureCommis',
      isLegend: true,
      isSeries: true,
      unitSymbol: '万',
      shape: 'rect',
      type: 'bar',
      isBold: true,
      // hasHr: true,
      shapeColor: '#5781DF',
      format: formatMoney,
      formatColor: (val: number) => BASE_CONFIG.BLACK,
    },
    {
      name: '2221',
      dataKey: 'total',
      isLegend: true,
      isSeries: true,
      unitSymbol: '万',
      shape: 'rect',
      type: 'bar',
      isBold: true,
      // hasHr: true,
      shapeColor: 'pink',
      format: formatMoney,
      formatColor: (val: number) => BASE_CONFIG.BLACK,
    },
  ];
};

export const getChartConfig2: IGetChartConfig2 = (data) => {
  return [
    {
      name: 'name1',
      dataKey: 'pay',
      isLegend: false,
      isSeries: true,
      unitSymbol: '万',
      shape: false,
      type: 'scatter',
      isBold: true,
      // hasHr: true,
      shapeColor: '#5781DF',
      format: formatMoney,
      formatColor: (val: number) => BASE_CONFIG.BLACK,
    },
    {
      name: 'name2',
      dataKey: 'use',
      isLegend: false,
      isSeries: false,
      unitSymbol: '万',
      shape: false,
      type: 'scatter',
      isBold: true,
      // hasHr: true,
      shapeColor: 'pink',
      format: formatMoney,
      formatColor: (val: number) => BASE_CONFIG.BLACK,
    },
    {
      name: '',
      dataKey: 'company',
      isLegend: false,
      isSeries: true,
      unitSymbol: '',
      shape: false,
      type: 'line',
      isOnly: true,
      isBold: true,
      hasHr: true,
      shapeColor: 'pink',
      format: formatMoney,
      formatColor: (val: number) => BASE_CONFIG.BLACK,
    },
  ];
};
