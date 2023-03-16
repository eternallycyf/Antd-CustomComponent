import dayjs from 'dayjs';
import { IGetOptions, IChartConfig } from './interface';
import { defaultFormatColor, renderTooltip, BASE_CONFIG as BASECONFIG, formatNumber } from './utils';

export const getOptions = (config: IGetOptions) => {
  const { data: DATA, baseConfig = {}, chartConfig = {} } = config;
  const BASE_CONFIG = { ...BASECONFIG, ...baseConfig };
  const CHART_CONFIG: IChartConfig[] = [...chartConfig];
  console.log(BASE_CONFIG.HAS_DATA_ZOOM);
  return {
    axisPointer: {
      type: 'cross',
      axis: 'radius',
      link: { xAxisIndex: 'all' },
      lineStyle: { type: 'dashed' },
      label: {
        backgroundColor: 'black',
        color: '#fff',
      },
    },
    legend: {
      type: 'scroll',
      z: 999999,
      textStyle: { color: '#5B6371', fontSize: 12, fontWeight: 400 },
      orient: 'horizontal',
      show: true,
      bottom: 0,
      itemGap: 30,
      data: CHART_CONFIG.filter((item) => item.isLegend).map((item) => BASE_CONFIG.GET_LEGEND_FN(item, DATA)),
    },
    grid: {
      top: '10%',
      left: '2%',
      right: '4%',
      bottom: '15%',
      containLabel: true,
      ...BASE_CONFIG.GRID_CONFIG,
    },
    yAxis: [
      {
        type: 'value',
        name: BASE_CONFIG.YAXIS_NAME1,
        nameLocation: 'end',
        nameTextStyle: {
          fontSize: 12,
          padding: [0, 185, 0, 0],
          color: '#B3B8C2',
        },
        position: 'right',
        show: true,
        offset: 35,
        axisLabel: {
          textStyle: {
            color: '#5B6371 ',
            fontSize: 12,
            fontWeight: 400,
          },
          formatter: (value: number) => Number(value).toFixed(2) + '%',
        },
        splitLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: 'rgba(239,241,244,1)',
          },
        },
        axisLine: {
          lineStyle: {
            // color: 'transparent',
          },
        },
      },
      {
        type: 'value',
        position: 'left',
        name: BASE_CONFIG.YAXIS_NAME2,
        nameLocation: 'end',
        nameTextStyle: {
          fontSize: 12,
          padding: [0, 0, 0, 15],
          color: '#B3B8C2',
        },
        show: true,
        axisLabel: {
          textStyle: {
            color: '#5B6371 ',
            fontSize: 12,
            fontWeight: 400,
          },
          align: 'right',
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed', //默认实线，dashed虚线
            width: 1,
            color: 'rgba(239,241,244,1)',
          },
        },
        axisLine: {
          lineStyle: {
            // color: 'transparent',
          },
        },
      },
    ],
    xAxis: {
      type: 'category',
      min: 'dataMin',
      max: 'dataMax',
      name: BASE_CONFIG.XAXIS_NAME,
      nameLocation: 'end',
      nameTextStyle: {
        align: 'right',
        verticalAlign: 'top',
        fontSize: 12,
        padding: [30, 5, 0, 0],
        color: '#B3B8C2',
      },
      boundaryGap: true,
      alignWithLabel: true,
      axisLine: {
        lineStyle: {
          color: '#CACED7',
        },
      },
      axisLabel: {
        textStyle: {
          color: '#5B6371 ',
          fontSize: 12,
          fontWeight: 400,
        },
        interval: 0,
        formatter: (v: string) => {
          const values = v?.split('-');
          if (!Array.isArray(values)) return '--';
          if (values?.length === 0) return '--';
          return [`{a|${values[1]}}`, `{b|${values[0]}}`].join('\n');
        },
        rich: {
          a: {
            fontSize: 12,
            fontFamily: 'PingFangSC-Regular, PingFang SC',
            fontWeight: 400,
            color: '#5B6371',
            lineHeight: 12,
          },
          b: {
            fontSize: 10,
            fontFamily: 'PingFangSC-Regular, PingFang SC',
            fontWeight: 400,
            color: '#B3B8C2',
            lineHeight: 20,
          },
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed', //默认实线，dashed虚线
          width: 1,
          color: 'transparent',
        },
      },
      axisTick: {
        alignWithLabel: true,
      },
      data: DATA.map((item: any) => {
        return dayjs(item[BASE_CONFIG.TIME]).format(BASE_CONFIG.XAXIS_FORMATE_TIME);
      }),
    },
    series: CHART_CONFIG.filter((item) => Boolean(item.isLegend || item.isTopFlag)).map((item) => {
      const name = `${item.name}${item?.legendSuffix ?? ''}`;
      const customProps = item.type === 'line' ? BASE_CONFIG.LINE_SERIES : BASE_CONFIG.BAR_SERIES;
      return {
        ...item,
        ...customProps,
        name,
        yAxisIndex: item.type === 'line' ? '0' : '1',
        lineStyle: { color: item.shapeColor },
        itemStyle: { color: item.shapeColor },
        textStyle: {
          color: 'transparent',
          fontSize: 12,
          fontWeight: 400,
        },
        symbol: 'none',
        label: {
          show: false,
          rotate: 0,
          position: 'top',
          distance: -10,
          textStyle: {
            color: '#5B6371',
            fontSize: 12,
            fontWeight: 400,
          },
          formatter: (config: any) => formatNumber(config.data[item.dataKey]) + (item?.unitSymbol ?? ''),
        },
        data: DATA.map((ele: any) => ({
          ...ele,
          value: ele[item.dataKey],
          total: ele[BASE_CONFIG.TOTAL],
          time: ele[BASE_CONFIG.TIME],
        })),
        ...(item.series || {}),
      };
    }),
    dataZoom: BASE_CONFIG.HAS_DATA_ZOOM
      ? [
          {
            type: 'inside',
            zoomOnMouseWheel: 'shift',
            startValue: BASE_CONFIG.DATA_ZOOM_START_VALUE,
            endValue: BASE_CONFIG.DATA_ZOOM_END_VALUE,
            top: 50,
            textStyle: {
              color: '#5B6371',
              fontSize: 12,
              fontWeight: 400,
              textShadowOffsetY: 45,
              textShadowOffsetX: -45,
            },
          },
          {
            type: 'slider',
            show: true,
            y: '90%',
            top: '80%',
            brushSelect: false,
            handleIcon:
              'path://M-9.35,34.56V42m0-40V9.5m-2,0h4a2,2,0,0,1,2,2v21a2,2,0,0,1-2,2h-4a2,2,0,0,1-2-2v-21A2,2,0,0,1-11.35,9.5Z',
            dataBackground: {
              lineStyle: {
                color: '#C7DEFF',
                opacity: 1,
              },
              areaStyle: {
                color: '#E0EDFF',
              },
            },
            borderColor: '#B2CFFB',
            textStyle: {
              color: '#5B6371',
              fontSize: 12,
              fontWeight: 400,
              textShadowOffsetY: 45,
              textShadowOffsetX: -45,
            },
            width: 'ph',
            height: 'ph',
            bottom: null,
            borderRadius: 3,
            backgroundColor: 'rgba(47,69,84,0)',
            fillerColor: 'rgba(145,175,274,0.2)',
            handleSize: '100%',
            handleStyle: {
              color: '#fff',
              borderColor: '#B2CFFB',
            },
            moveHandleSize: 7,
            showDetail: true,
            showDataShadow: 'auto',
            realtime: true,
            zoomLock: BASE_CONFIG.HAS_DATA_ZOOM_LOCK,
            rangeMode: 'value',
            brushStyle: {
              color: 'rgba(135,175,274,0.15)',
            },
            emphasis: {
              handleStyle: {
                borderColor: '#8Fb0F7',
              },
            },
          },
        ]
      : false,
    tooltip: {
      trigger: 'axis',
      renderMode: 'html',
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: BASE_CONFIG.TOOLTIP_SHADOW_COLOR,
          opacity: 0.2,
        },
      },
      backgroundColor: '#transparent',
      borderColor: 'transparent',
      confine: true,
      formatter: (params: any) => {
        const arr = params.sort((a: any, b: any) => a.seriesIndex - b.seriesIndex);
        const time = dayjs(arr[0].data[BASE_CONFIG.TIME]).format(BASE_CONFIG.TOOLTIP_FORMATE_TIME);
        const total = arr[0]?.data[BASE_CONFIG.TOTAL];
        const defaultDataObj = arr[0].data;
        const defaultConfig = {
          time,
          total,
        };
        const newArr = CHART_CONFIG.filter((item) => Boolean(!item.isTopFlag)).map((item) => {
          let value = defaultDataObj[item.dataKey];
          value = value ?? (item.type === 'line' ? 0.0 : undefined);
          return {
            ...item,
            ...defaultConfig,
            valueColor: defaultFormatColor({ ...item, value, BASE_CONFIG }),
            value,
            width: BASE_CONFIG.TOOLTIP_WIDTH,
            height: BASE_CONFIG.TOOLTIP_HEIGHT,
          };
        });
        return renderTooltip(newArr);
      },
    },
  };
};
