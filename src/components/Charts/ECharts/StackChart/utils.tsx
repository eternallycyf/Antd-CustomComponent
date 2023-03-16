/* eslint-disable no-useless-escape */
import { IChartConfig } from './interface';
import styles from './chart.less';

export const formatNumber = (number: number, isPercent = true) => {
  if (number == 0) return 0;
  if (number == undefined) return '--';
  if (!number) return '--';
  if (isPercent) {
    const haveDecimal = /\./.test((number * 100).toString());
    return haveDecimal ? (Number(number) * 100).toFixed(2) : number * 100;
  }
  const haveDecimal = /\./.test(number.toString());
  return haveDecimal ? Number(number).toFixed(2) : number;
};

export const defaultFormatColor = ({ formatColor, value, BASE_CONFIG }: any) => {
  const hasFormatColor = formatColor && typeof formatColor === 'function';
  let valueColor = '';
  if (hasFormatColor) {
    valueColor = formatColor(value);
  } else {
    valueColor = value == 0 || value == '0.00' ? BASE_CONFIG.BLACK : value > 0 ? BASE_CONFIG.RED : BASE_CONFIG.GREEN;
  }
  return valueColor;
};

export const BASE_CONFIG = {
  // 时间的字段
  TIME: 'time',
  // 合计的字段
  TOTAL: 'total',
  // x轴时间格式化
  XAXIS_FORMATE_TIME: 'YYYY-MM月',
  // tooltip 时间格式化
  TOOLTIP_FORMATE_TIME: 'YYYY-MM月',

  // 是否展示区域缩放滑块
  HAS_DATA_ZOOM: false,
  // 区域缩放 滑块是否可自定义拉伸大小
  HAS_DATA_ZOOM_LOCK: false,
  /**
   * @description 区域缩放-滑块初始化开始点
   * @example '2021-03月'
   */
  DATA_ZOOM_START_VALUE: '',
  // 区域缩放-滑块初始化结束点
  DATA_ZOOM_END_VALUE: '',

  TOOLTIP_WIDTH: 320,
  TOOLTIP_HEIGHT: 350,

  YAXIS_NAME1: '',
  YAXIS_NAME2: '',
  XAXIS_NAME: '',

  // tooltip 数值格式化颜色
  BLACK: '#2A303B',
  RED: '#E62C3B',
  GREEN: '#0FBE3F',
  TOOLTIP_SHADOW_COLOR: '#F0F6FF',
  // 折线样式
  LINE_SERIES: {
    type: 'line',
    smooth: true,
    symbol: 'none',
    yAxisIndex: 1,
    itemStyle: {
      normal: {
        color: '#3376B5',
      },
    },
  },
  BAR_SERIES: {
    type: 'bar',
    stack: 'sum',
    barWidth: '20px',
  },
  GRID_CONFIG: {},
  GET_LEGEND_FN: (item: IChartConfig, data: any[]) => {
    const name = `${item.name}${item?.legendSuffix ?? ''}`;
    return {
      name,
      // icon: item?.shape,
      icon: item?.shape === 'rect' ? 'path://M80,80,h80,v80,h-80Z' : item?.shape,
    };
  },
} as const;

export const renderTooltip = (
  data: (IChartConfig & {
    time: string;
    total: number;
    value: number;
    valueColor: string;
    width: number;
    height: number;
  })[],
) => {
  const { total, time, width, height } = data[0];
  return `
  <div class="${styles.tooltipBox}" style=\"--width:${width};--height:${height};marginLeft: 100px\">
        <div class="${styles.timeContent}">
          <svg viewBox="64 64 896 896" focusable="false" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path></svg>
          <span class="${styles.time}">${time}</span>
        </div>
        <div class="${styles.hr}"></div>
        <div>
          <div class="${styles.contrastContent}">
            ${data
              .map((item) => {
                const left = item.shape
                  ? `<div class="${styles[item.shape]}" style=\"--color:${item.shapeColor}\"></div>`
                  : '';
                const currentValue = item?.format ? item.format(item.value) : item.value;
                const isBold = item?.isBold ? styles.isBold : undefined;
                const isOnly = item?.isOnly ? styles.contentCenter : styles.content;
                const Hr = item.hasHr ? `<div class="${styles.hr}"></div>` : '';
                return `
                <div class="${isOnly}">
                  <div class="${styles.left}">
                  ${left}
                  <div class="${styles.text} ${isBold} ${item?.leftClassName}">${item.name}</div>
                  </div>
                  <div class="${styles.right} ${isBold} ${item?.rightClassName}" style=\"--color:${item?.valueColor};\">
                    ${currentValue} ${item?.unitSymbol ?? ''}
                    </div>
                </div>
                ${Hr}
              `;
              })
              .join('')}
          </div>
  `;
};
