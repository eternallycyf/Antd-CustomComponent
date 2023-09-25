import Charts from '@/components/Charts/ECharts/index';
import { Empty } from 'antd';
import { Fragment } from 'react';
import { getOptions } from './chart';
import { IGetOptions } from './interface';
import { BASE_CONFIG } from './utils';

const PieChart = (props: IGetOptions) => {
  const { data, baseConfig = BASE_CONFIG, chartConfig = {}, style, emptyStyle } = props;
  const isEmpty = !data || data.length === 0;
  return (
    <Fragment>
      {isEmpty ? (
        <Empty
          style={{
            height: style?.height ?? 300,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'column',
            ...emptyStyle,
          }}
        />
      ) : (
        <Charts option={getOptions({ data, baseConfig, chartConfig })} style={style} />
      )}
    </Fragment>
  );
};

export default PieChart;
