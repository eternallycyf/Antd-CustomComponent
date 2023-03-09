import { ConnectState } from '@/typings/connect';
import { connect, Dispatch, withRouter, Outlet } from '@umijs/max';
import { History } from 'history';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteComponentProps } from '@umijs/renderer-react';

interface IProps extends RouteComponentProps<any> {
  token: string;
  children: React.ReactNode;
  userInfo: ConnectState['global']['userInfo'];
  dispatch: Dispatch;
}

const Authorized: React.FC<IProps> = (props) => {
  const { token, children, dispatch, location } = props;

  useEffect(() => {
    dispatch({ type: 'login/login', payload: { props } });
  }, [dispatch, props]);

  // if (!token && location?.pathname !== '/login') {
  //   const path = `/login?redirect=${locaton?.pathname}${locaton?.search}`;
  //   return <Navigate to={path} />;
  // }

  return <Outlet />;
};

export default connect(({ login, global }: ConnectState) => ({
  token: login.token,
  userInfo: global.userInfo,
}))(withRouter<IProps>(Authorized));
