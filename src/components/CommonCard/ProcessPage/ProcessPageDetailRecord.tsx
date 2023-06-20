import projectConfig from '@/config/projectConfig';
import { ICommonTable } from '@/typings';
import React from 'react';
import CommonTable from '../../CommonTableV5/CommonTableV5';
import styles from './index.less';
import { IProcessPageDetailRecord } from './interface';
const { apiPrefix } = projectConfig;

const ProcessPageDetail: React.FC<IProcessPageDetailRecord> = (props) => {
  const { flowId, ...restProps } = props;
  if (!flowId) return null;

  const tableParams: ICommonTable<any> = {
    columns: [],
    rowKey: 'flowId',
    fetchMethod: 'get',
    showIndex: false,
    dataPath: 'data.data',
    urls: {
      listUrl: `${apiPrefix}/api/flow/list/${flowId}`,
    },
    pagination: false,
    ...restProps,
  };

  return (
    <div className={styles.ProcessPageDetailRecord}>
      <CommonTable {...tableParams} />
    </div>
  );
};

export default ProcessPageDetail;
