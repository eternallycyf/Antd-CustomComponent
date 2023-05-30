import { useAsync } from 'react-use';
import StackChart from '..';
import { BASE_CONFIG } from '../utils';
import { getAssetTrends } from './chart';

const Demo = () => {
  const { value: chartData2 = [], loading: chartData2Loading } = useAsync(async () => {
    return [
      {
        time: '2023-05-01',
        total: 240,
        cash: 120,
        shareCertificate: 250,
        other: 310,
        cashPercentage: 0.33,
        otherPercentage: 0.01,
        shareCertificatePercentage: 0.21,
      },
    ];
  }, []);

  return (
    <StackChart
      data={chartData2}
      chartConfig={getAssetTrends(chartData2)}
      baseConfig={
        {
          GRID_CONFIG: {
            left: '3%',
            right: '5%',
            bottom: '22%',
            top: '5%',
          },
          LINE_SERIES: {
            ...BASE_CONFIG.LINE_SERIES,
            smooth: false,
          },
          TIME: 'time',
          HAS_DATA_ZOOM: true,
          HAS_DATA_ZOOM_LOCK: true,
          DATA_ZOOM_START_AND_END_OBJ: true,
          // DATA_ZOOM_START: '2021-01月',
          HAS_TOP_LABEL: true,
          DATA_ZOOM_START: 0,
          DATA_ZOOM_END: 100,
          TOTAL_NAME: '合计',
        } as any
      }
    />
  );
};

export default Demo;
