import StackChart from '@/components/Charts/ECharts/StackChart';
import ScatterChart from '@/components/Charts/ECharts/ScatterChart';
import { Row, Col } from 'antd';
import { getChartConfig, getChartConfig2 } from './chart';
import { DATA, DATA2 } from './constant';

const Chart = () => {
  return (
    <Row>
      <Col span={12}>
        <ScatterChart
          baseConfig={{
            GRID_CONFIG: {
              left: '1.5%',
              right: '1.5%',
              bottom: '25%',
            },
            // 交换位置-公司tooltip放最前面
            RENDER_TOOLTIP_FN: (data) => {
              [data[2], data[0]] = [data[0], data[2]];
              return data;
            },
          }}
          chartConfig={getChartConfig2(DATA)}
          data={DATA2}
        />
      </Col>
      <Col span={12}>
        <StackChart
          baseConfig={{
            GRID_CONFIG: {
              left: '1.5%',
              right: '1.5%',
              bottom: '25%',
            },
            HAS_DATA_ZOOM: true as any,
            HAS_DATA_ZOOM_LOCK: true as any,
            DATA_ZOOM_START_VALUE: '2021-03月' as any,
            DATA_ZOOM_END_VALUE: '2022-03月' as any,
          }}
          chartConfig={getChartConfig(DATA)}
          data={DATA}
        />
      </Col>
    </Row>
  );
};

export default Chart;
