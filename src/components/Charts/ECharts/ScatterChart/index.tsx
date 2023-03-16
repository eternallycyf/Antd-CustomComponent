import Charts from '@/components/Charts/ECharts/index';
import { Empty } from 'antd';
import { Fragment } from 'react';
import { getOptions } from './chart';
import { IGetOptions } from './interface';
import { BASE_CONFIG } from './utils';
import React from 'react';

const StackChart = (props: IGetOptions) => {
  const { data, baseConfig = BASE_CONFIG, chartConfig = {} } = props;
  const isEmpty = !data || data.length === 0;
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
        <Charts option={getOptions({ data, baseConfig, chartConfig })} />
      )}
    </Fragment>
  );
};

export default StackChart;
