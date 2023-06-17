import React from 'react';
import SectionTitle from '../SectionTitle';
import styles from './index.less';
import { IProcessPageCardProps } from './interface';

const ProcessPageCard: React.FC<IProcessPageCardProps> = (props) => {
  const { title, children, extraContent } = props;
  return (
    <div className={styles.ProcessPageCard}>
      <SectionTitle title={title} extraContent={extraContent} />
      <div style={{ marginTop: 16 }}>{children}</div>
    </div>
  );
};

export default ProcessPageCard;
