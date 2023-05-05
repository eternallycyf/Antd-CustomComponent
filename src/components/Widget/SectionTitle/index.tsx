import styles from './index.less';
import { Row, Col } from 'antd';
import React, { FC } from 'react';

interface ISectionTitle {
  title: string;
  extraContent?: React.ReactNode;
  rowStyle?: React.CSSProperties;
}

const SectionTitle: FC<ISectionTitle> = (props) => {
  const { title, extraContent = '', rowStyle = {} } = props;
  return (
    <Row justify="space-between" align="middle" className={styles.SectionTitle} style={rowStyle}>
      <Col className={styles['SectionTitle-title']}>{title}</Col>
      <Col>{extraContent}</Col>
    </Row>
  );
};

export default SectionTitle;
