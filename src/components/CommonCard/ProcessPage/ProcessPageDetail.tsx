import { Row } from 'antd';
import React from 'react';
import styles from './index.less';
import { IProcessPageDetailProps } from './interface';
import { renderDetail } from './utils';

const ProcessPageDetail: React.FC<IProcessPageDetailProps> = (props) => {
  const { info, list = [], subInfo } = props;
  if (list?.length == 0) return null;
  return (
    <div className={styles.ProcessPageDetail}>
      {info && (
        <Row className={styles.subHeader} gutter={[18, 18]} justify="start" align="middle">
          {renderDetail(list, info, subInfo)}
        </Row>
      )}
    </div>
  );
};

export default ProcessPageDetail;
