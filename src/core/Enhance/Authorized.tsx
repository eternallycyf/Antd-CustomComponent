import { ConnectState } from '@/typings/connect';
import { connect, Dispatch, Outlet, withRouter } from '@umijs/max';
import { RouteComponentProps } from '@umijs/renderer-react';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { compose } from 'redux';
import { withRoutePage } from './withRoutePage';

interface IProps extends RouteComponentProps<any> {
  token: string;
  children: React.ReactNode;
  userInfo: ConnectState['global']['userInfo'];
  dispatch: Dispatch;
}

const Authorized: React.FC<IProps> = (props) => {
  const { token, children, dispatch, location } = props;

  useEffect(() => {
    // dispatch({ type: 'login/login', payload: { props } });
  }, [dispatch, props]);

  if (!token && location?.pathname !== '/login') {
    const path = `/login?redirect=${location?.pathname}${location?.search}`;
    return <Navigate to={path} />;
  }

  // 如果路由没有跳转到404
  // if (location?.pathname !== '/404') {
  //   return <Navigate to="/404" />;

  return <Outlet />;
};

export default compose<IProps>(
  withRoutePage,
  withRouter,
  connect(({ global, login }: ConnectState) => ({
    token: login.token,
    userInfo: global.userInfo,
  })),
)(Authorized);
