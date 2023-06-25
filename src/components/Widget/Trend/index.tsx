import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
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
  upSymbol?: React.ReactNode;
  downSymbol?: React.ReactNode;
}

const Trend: FC<ITrendProps> = ({
  colorful = true,
  reverseColor = false,
  flag,
  children,
  className,
  upSymbol = null,
  downSymbol = null,
  ...rest
}) => {
  const classString = classNames(
    styles.trendItem,
    {
      [styles.trendItemGrey]: !colorful,
      [styles.reverseColor]: reverseColor && colorful,
    },
    className,
  );
  const up = upSymbol ? upSymbol : <CaretUpOutlined className={styles[flag]} />;
  const down = downSymbol ? downSymbol : <CaretDownOutlined className={styles[flag]} />;
  return (
    <div {...rest} className={classString} title={typeof children === 'string' ? children : ''}>
      <span className={styles.value}>{children}</span>
      {flag && <span className={styles[flag]}>{flag === 'up' ? up : down}</span>}
    </div>
  );
};

export default Trend;
