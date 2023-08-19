import { withRouter } from '@umijs/max';
import { RouteComponentProps } from '@umijs/renderer-react';
import React, { FC, useCallback } from 'react';
import styles from '../index.less';

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
    <div className={className} style={{ marginBottom: 38 }}>
      <div className={styles.title} onClick={handleClick} style={{ cursor: 'pointer' }}>
        {title}
        <div className={styles.divider}></div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default withRouter<ISubmenuProps>(SubMenu);
