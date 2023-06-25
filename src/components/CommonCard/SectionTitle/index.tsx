import { Col, Row } from 'antd';
import React, { FC } from 'react';
import styles from './index.less';

interface ISectionTitle {
  title: React.ReactNode;
  extraContent?: React.ReactNode;
  rowStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
}

const SectionTitle: FC<ISectionTitle> = (props) => {
  const { title, extraContent = '', rowStyle = {}, titleStyle = {} } = props;
  return (
    <Row justify="space-between" align="middle" className={styles.SectionTitle} style={rowStyle}>
      <Col className={styles['SectionTitle-title']} style={titleStyle}>
        {title}
      </Col>
      <Col>{extraContent}</Col>
    </Row>
  );
};

export default SectionTitle;
