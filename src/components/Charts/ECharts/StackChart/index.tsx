import Charts from '@/components/Charts/ECharts/index';
import { Empty } from 'antd';
import { Fragment, useCallback, useLayoutEffect, useRef, useState } from 'react';
import { getOptions } from './chart';
import { IGetOptions } from './interface';
import { BASE_CONFIG } from './utils';
import React from 'react';
import ReactECharts from 'echarts-for-react';
import _ from 'lodash';

const StackChart = (props: IGetOptions) => {
  const [options, setOptions] = useState({});
  const EchartsRef = useRef<any>(null);

  const { data, baseConfig: newBaseConfig, chartConfig = {}, style } = props;
  const baseConfig = { ...BASE_CONFIG, ...newBaseConfig };
  const HAS_TOP_LABEL = baseConfig.HAS_TOP_LABEL;
  const TOTAL_NAME = baseConfig.TOTAL_NAME;
  const TIME = baseConfig.TIME;

  const isEmpty = !data || data.length === 0;

  useLayoutEffect(() => {
    const options = getOptions({
      data,
      baseConfig,
      chartConfig,
    });
    setOptions(options);
    if (EchartsRef?.current?.getEchartsInstance()) {
      EchartsRef?.current?.getEchartsInstance()?.setOption(options, true);
    }
  }, [data]);

  const hanleChangeLegend = useCallback(
    (obj: any) => {
      if (!HAS_TOP_LABEL) return;
      const { selected } = obj;
      const barList = chartConfig.filter((item: any) => item.type === 'bar');
      const currentList = Object.entries(selected)
        .filter(([key, val]) => val)
        .map((item) => item?.[0])
        .filter(Boolean);

      const currentBarList = _.intersection(
        barList?.map((item: any) => item.name),
        currentList,
      ).filter(Boolean);

      const topKey = chartConfig.find((item: any) => item.name === TOTAL_NAME)?.dataKey;
      const otherKeyList = currentBarList.map((item) => chartConfig?.find((ele: any) => ele?.name == item)?.dataKey);

      const newData = ([...data] || []).map((item: any) => {
        let total = 0;
        otherKeyList.forEach((ele) => {
          total = total + (Number(item?.[ele]) || 0);
        });
        return { ...item, [topKey]: total ? (+total?.toFixed(2)).toLocaleString() : 0 };
      });

      let newOptions = getOptions({
        data: newData,
        baseConfig,
        chartConfig,
      });

      const index = newOptions?.series?.findIndex((item: any) => item.isTopFlag);

      console.log(newOptions);

      if (newOptions?.series?.[index]) {
        // newOptions?.series?.[index]?.label?.formatter = (item) => {
        //   const newObj = newData.find((ele: any) => ele[TIME] === item?.data?.[TIME]);
        //   return newObj?.[topKey] || '';
        // };
      }

      // setOptions(newOptions);
      // EchartsRef?.current?.getEchartsInstance()?.setOption(newOptions);
    },
    [data],
  );

  const onEvents = {
    legendselectchanged: hanleChangeLegend,
  };

  return (
    <Fragment>
      {isEmpty ? (
        <Empty
          style={{
            height: 300,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'column',
          }}
        />
      ) : (
        <ReactECharts option={options} style={style} onEvents={onEvents} ref={EchartsRef} />
      )}
    </Fragment>
  );
};

export default StackChart;
