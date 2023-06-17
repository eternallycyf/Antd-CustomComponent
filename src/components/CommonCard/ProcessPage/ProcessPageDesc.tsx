import { Space } from 'antd';
import React from 'react';
import styles from './index.less';
import { IProcessPageDescProps } from './interface';

const ProcessPageCard: React.FC<IProcessPageDescProps> = (props) => {
  const { descList } = props;
  return (
    <Space size={30} className={styles.ProcessPageDesc}>
      {(descList || []).map((val, index) => (
        <span key={index} className={styles.desc}>
          {val}
        </span>
      ))}
    </Space>
  );
};

export default ProcessPageCard;
