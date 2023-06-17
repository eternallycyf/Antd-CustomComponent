import styles from './index.less';
import React from 'react';
import { SpinProps, CardProps, Spin } from 'antd';

interface IPage {
  loading?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  spinProps?: SpinProps;
  CardProps?: CardProps;
  title?: React.ReactNode;
}

const Page: React.FC<IPage> = (props) => {
  const { loading, className, children, title, ...restProps } = props;

  return (
    <div id="container" className={`${styles.container} ${className}`} {...restProps}>
      {loading ? (
        <div className={styles.loading}>
          <Spin tip="加载中..." />
        </div>
      ) : (
        <div className={styles.content}>{children}</div>
      )}
    </div>
  );
};

Page.defaultProps = {
  loading: false,
};

export default React.memo(Page);
