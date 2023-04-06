import styles from './SectionTitle.less';
import { Row, Col } from 'antd';
import React from 'react';

const SectionTitle = (props: { title: string; extraContent?: React.ReactNode }) => {
  const { title, extraContent = '' } = props;
  return (
    <Row justify="space-between" align="middle" className={styles.SectionTitle}>
      <Col>{title}</Col>
      <Col>{extraContent}</Col>
    </Row>
  );
};

export default SectionTitle;
