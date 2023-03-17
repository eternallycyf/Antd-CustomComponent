import React, { FC } from 'react';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
// import { Icon } from 'antd';
import classNames from 'classnames';
import styles from './index.less';

export interface ITrendProps {
  colorful?: boolean;
  flag: 'up' | 'down';
  style?: React.CSSProperties;
  reverseColor?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Trend: FC<ITrendProps> = ({ colorful = true, reverseColor = false, flag, children, className, ...rest }) => {
  const classString = classNames(
    styles.trendItem,
    {
      [styles.trendItemGrey]: !colorful,
      [styles.reverseColor]: reverseColor && colorful,
    },
    className,
  );
  return (
    <div {...rest} className={classString} title={typeof children === 'string' ? children : ''}>
      <span className={styles.value}>{children}</span>
      {flag && <span className={styles[flag]}>{flag === 'up' ? <CaretUpOutlined /> : <CaretDownOutlined />}</span>}
    </div>
  );
};

export default Trend;
