import { ConnectState } from '@/typings/connect';
import { connect, Dispatch, withRouter, Outlet } from '@umijs/max';
import { History } from 'history';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

interface IProps {
  token: string;
  children: React.ReactNode;
  userInfo: any;
  dispatch: Dispatch;
  location: History['location'];
}

const Authorized: React.FC<IProps> = (props) => {
  const {
    token,
    children,
    dispatch,
    location: { pathname, search },
  } = props;

  useEffect(() => {
    dispatch({ type: 'login/login', payload: { props } });
  }, [dispatch, props]);

  // if (!token && pathname !== '/login') {
  //   const path = `/login?redirect=${pathname}${search}`;
  //   return <Navigate to={path} />;
  // }

  return <Outlet />;
};

export default connect(({ login, global }: ConnectState) => ({
  token: login.token,
  userInfo: global.userInfo,
}))(withRouter<any>(Authorized));
