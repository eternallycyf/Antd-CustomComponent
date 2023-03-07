import React, { useCallback } from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { Avatar, MenuProps, Spin } from 'antd';
import { history, useModel } from '@umijs/max';
import HeaderDropdown from './HeaderDropdown';
import styles from '../index.less';

const loginOut = async () => {
  // await outLogin();
  // store.remove('TOKEN');
  // const { query = {}, search, pathname } = history.location;
  // const { redirect } = query; // Note: There may be security issues, please note
  // if (window.location.pathname !== '/user/login' && !redirect) {
  //   history.replace({
  //     pathname: '/user/login',
  //     search: stringify({
  //       redirect: pathname + search,
  //     }),
  //   });
  // }
};

const AvatarDropdown = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const onMenuClick = useCallback(
    (event: any) => {
      const { key } = event;
      if (key === 'logout') {
        loginOut();
        return;
      }
      history.push(`/account/${key}`);
    },
    [setInitialState],
  );
  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (!initialState) {
    return loading;
  }

  const { currentUser } = initialState;

  if (!currentUser) {
    // history.push('/user/login');
  }

  const items: MenuProps['items'] = [
    {
      key: 'logout',
      type: 'group',
      label: (
        <div>
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
        onClick: onMenuClick,
      }}
    >
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar size="small" className={styles.avatar} alt="avatar" />
        <span className={`${styles.name} anticon`}>{currentUser?.name}</span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
