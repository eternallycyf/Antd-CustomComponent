/* eslint-disable no-useless-escape */
import styles from './chart.less';

export const formatNumber = (config: { number: number; isPercent?: boolean }) => {
  if (config?.number == undefined) return '--';
  const { number, isPercent = true } = config;
  if (number == 0) return 0;
  if (!number) return '--';
  if (isPercent) {
    const haveDecimal = /\./.test((number * 100).toString());
    return haveDecimal ? (Number(number) * 100).toFixed(2) : number * 100;
  }
  const haveDecimal = /\./.test(number.toString());
  return haveDecimal ? Number(number).toFixed(2) : number;
};

export const BASE_CONFIG = {
  TOOLTIP_WIDTH: 320,
  TOOLTIP_HEIGHT: 350,
  TOOLTIP_SHADOW_COLOR: '#F0F6FF',
  SUNBURST_SERIES: {},
  GRID_CONFIG: {},
} as const;

export const renderTooltip = (
  data: {
    name: string;
    value: number;
    percent: number;
    unitSymbol: string;
    color: string;
    shape: string;
    isBlod?: boolean;
  }[],
) => {
  return `
  <div class="${styles.tooltipBox}" style=\"marginLeft: 100px\">
        <div>
          <div class="${styles.contrastContent}">
            ${data
              .map((item) => {
                const shape = 'circle';
                const left = shape ? `<div class="${styles[shape]}" style=\"--color:${item.color}\"></div>` : '';
                const isBlod = item?.isBlod;

                return `
                <div class="${styles.content}">
                  <div class="${styles.left}">
                  ${left}
                  <div class="${styles.text} ${isBlod && styles.bold}">${item.name}</div>
                  </div>
                  <div class="${styles.right} ${styles.bold}">
                    ${item.percent}${item?.unitSymbol ?? ''}
                    </div>
                </div>
              `;
              })
              .join('')}
          </div>
  `;
};
