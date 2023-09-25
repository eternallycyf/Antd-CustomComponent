import { ErrorBoundary } from '@/core/base/ErrorBoundary';
import { CardProps, Spin, SpinProps } from 'antd';
import React from 'react';
import { IPage } from './';
import styles from './index.less';

const Page: React.FC<IPage> = (props) => {
  const { loading, className, children, title, ...restProps } = props;

  return (
    <ErrorBoundary>
      <div id="container" className={`${styles.container} ${className}`} {...restProps}>
        {loading ? (
          <div className={styles.loading}>
            <Spin tip="加载中..." />
          </div>
        ) : (
          <div className={styles.content}>{children}</div>
        )}
      </div>
    </ErrorBoundary>
  );
};

Page.defaultProps = {
  loading: false,
};

export default React.memo(Page);
