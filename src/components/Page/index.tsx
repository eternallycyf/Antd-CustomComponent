import styles from './index.less';
import React from 'react';
import { Card, SpinProps, CardProps } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

interface IPage {
  loading?: boolean;
  children?: React.ReactNode;
  spinProps?: SpinProps;
  CardProps?: CardProps;
  hasBreadcrumb?: boolean;
}

const Page: React.FC<IPage> = (props) => {
  const { loading, children, hasBreadcrumb } = props;

  const cardProps = {
    id: 'container',
    loading,
    style: { marginLeft: 12 },
    bodyStyle: {
      margin: '24px 24px 24px 32px',
      height: '100%',
      minHeight: 'calc(100vh - 120px)',
      maxHeight: 'calc(100vh - 120px)',
      overflow: 'auto',
    },
  };

  if (hasBreadcrumb) {
    return (
      <PageContainer>
        <Card {...cardProps}>{children}</Card>
      </PageContainer>
    );
  }

  return <Card {...cardProps}>{children}</Card>;
};

Page.defaultProps = {
  loading: false,
  hasBreadcrumb: false,
};

export default React.memo(Page);
