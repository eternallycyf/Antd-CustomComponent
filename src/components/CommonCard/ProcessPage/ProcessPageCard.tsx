import { Space } from 'antd';
import React from 'react';
import SectionTitle from '../SectionTitle';
import styles from './index.less';
import { IProcessPageCardProps } from './interface';

const ProcessPageCard: React.FC<IProcessPageCardProps> = (props) => {
  const { title, children, extraContent, descList } = props;

  return (
    <div className={styles.ProcessPageCard}>
      {(title || extraContent) && <SectionTitle title={title} extraContent={extraContent} />}
      {descList != undefined && (
        <div style={{ marginTop: 16 }}>
          <Space size={30}>
            {(descList || []).map((val, index) => (
              <span key={index} className={styles.desc}>
                {val}
              </span>
            ))}
          </Space>
        </div>
      )}
      <div style={{ marginTop: descList == undefined ? 16 : 0 }}>{children}</div>
    </div>
  );
};

export default ProcessPageCard;
