import styles from './index.less';
import React from 'react';
import { Card, SpinProps, CardProps } from 'antd';

interface IPage {
  loading?: boolean;
  children?: React.ReactNode;
  spinProps?: SpinProps;
  CardProps?: CardProps;
}

const Page: React.FC<IPage> = (props) => {
  const {
    loading,
    children
  } = props;

  return (
    <Card id='container' loading={loading}>
      {children}
    </Card>
  )
}

Page.defaultProps = {
  loading: false
}

export default React.memo(Page);