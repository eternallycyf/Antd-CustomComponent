import { withRouter } from '@umijs/max';
import React, { FC, useCallback } from 'react';
import styles from '../index.less';
import { RouteComponentProps } from '@umijs/renderer-react';

interface ISubmenuProps extends RouteComponentProps<any> {
  title: string;
  className: string;
  children?: React.ReactNode;
  path: string;
  type?: string;
}

const SubMenu: FC<ISubmenuProps> = (props) => {
  const { title, className, children, path, history, type } = props;
  const handleClick = useCallback(() => {
    if (path) {
      history!.push(path);
    }
  }, []);

  return (
    <div className={className} style={{ marginTop: type === '1' ? 0 : 32 }}>
      <div className={styles.title} onClick={handleClick} style={{ cursor: 'pointer' }}>
        {title}
        <div className={styles.divider}></div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default withRouter<ISubmenuProps>(SubMenu);
