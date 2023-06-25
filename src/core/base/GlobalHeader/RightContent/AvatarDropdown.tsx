import { ConnectState } from '@/typings/connect';
import { LogoutOutlined } from '@ant-design/icons';
import { connect, Dispatch, withRouter } from '@umijs/max';
import { RouteComponentProps } from '@umijs/renderer-react';
import { Avatar, MenuProps } from 'antd';
import { FC } from 'react';
import styles from '../index.less';
import HeaderDropdown from './HeaderDropdown';

interface IProps extends RouteComponentProps<any> {
  userInfo: ConnectState['global']['userInfo'];
  dispatch: Dispatch;
}
const AvatarDropdown: FC<IProps> = (props) => {
  const { userInfo, dispatch } = props;
  const handleLogout = () => {
    dispatch({ type: 'login/logout' });
  };

  const items: MenuProps['items'] = [
    {
      key: 'logout',
      label: (
        <div onClick={handleLogout}>
          <LogoutOutlined />
          退出登录
        </div>
      ),
      className: styles.menu,
    },
  ];

  return (
    <HeaderDropdown
      menu={{
        items,
        selectedKeys: ['logout'],
      }}
    >
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar size="small" className={styles.avatar} alt="avatar" />
        <span className={`${styles.name} anticon`}>{userInfo?.username}</span>
      </span>
    </HeaderDropdown>
  );
};

export default connect(({ login, global }: ConnectState) => ({
  token: login.token,
  userInfo: global.userInfo,
}))(withRouter<any>(AvatarDropdown));
