import { ConnectState } from '@/typings/connect';
import { Space } from 'antd';
import { FC } from 'react';
import { connect } from '@umijs/max';
import Avatar from './AvatarDropdown';
import styles from '../index.less';

interface IProps {
  userInfo: ConnectState['global']['userInfo'];
}

const GlobalHeaderRight: FC<IProps> = (props) => {
  const { userInfo } = props;
  if (!Object.keys(userInfo)) return null;
  return (
    <Space className={`${styles.right} ${styles.dark}`}>
      <Avatar />
    </Space>
  );
};

export default connect(({ global, login }: ConnectState) => ({
  token: login.token,
  userInfo: global.userInfo,
}))(GlobalHeaderRight);
