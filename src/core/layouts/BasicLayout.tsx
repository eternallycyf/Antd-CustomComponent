import TagsNav from '@/core/base/TagsNav';
import { connect, withRouter } from '@umijs/max';
import { RouteComponentProps } from '@umijs/renderer-react';
import { useEffect, Fragment, FC } from 'react';
import SiderMenu from '@/core/base/CustomMenu';
import { Layout, Spin } from 'antd';
import { Helmet, History } from '@umijs/max';
import { Dispatch, Outlet } from 'umi';
import _ from 'lodash';
import { ConnectState } from '@/typings/connect';
import styles from './index.less';
import config from '@/config/projectConfig';
import { WaterMark } from '@/components';
import routes from '@/routes';
const { Sider, Content, Header } = Layout;
const { title } = config;

interface IBaseBasicLayout extends RouteComponentProps<any> {
  location: History['location'];
  children: React.ReactNode;
  dispatch: Dispatch;
}

type IBasicLayout = IBaseBasicLayout &
  Pick<ConnectState, 'global'>['global'] &
  Pick<ConnectState, 'login'>['login'];

const BasicLayout: FC<IBasicLayout> = (props) => {
  const {
    menuList,
    breadcrumbNameMap,
    children,
    theme,
    collapsed,
    location,
    sliderMenuState,
    dispatch,
    userInfo,
  } = props;

  const handleRouterChange = async () => {
    await dispatch({ type: 'global/fetch', payload: {} });
    await dispatch({ type: 'global/fetchUserInfo' });
    await dispatch({ type: 'global/fetchMenu' });
    await dispatch({ type: 'global/fetchAccessCollection' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);

  useEffect(() => {
    handleRouterChange();
  }, [dispatch]);

  const siderMenuProps = {
    theme,
    menuList,
    location,
    collapsed,
    sliderMenuState,
    dispatch,
  };

  const TagsNavProps = {
    breadcrumbNameMap,
    menuList,
    location,
  };

  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="keyword" content="react, umi, antd"></meta>
      </Helmet>
      <Layout className={styles.container}>
        <WaterMark
          content={userInfo?.realName || '未登录'}
          fillStyle="rgba(123,139,167,0.2)"
        >
          <Header
            style={{ background: 'transparent' }}
            className="core-base-tags-nav-index-tabs"
          >
            <div className={styles.tab}>
              {!_.isEmpty(breadcrumbNameMap) && !_.isEmpty(userInfo) ? (
                <TagsNav {...TagsNavProps}>{children}</TagsNav>
              ) : (
                <Spin
                  spinning={true}
                  size="large"
                  className={styles.spinning}
                  tip="加载中..."
                />
              )}
            </div>
          </Header>
          <Layout className={styles.content}>
            <Sider theme={theme} style={{ background: 'transparent' }}>
              <SiderMenu {...siderMenuProps} />
            </Sider>
            <Content>
              <Outlet />
            </Content>
          </Layout>
        </WaterMark>
      </Layout>
    </Fragment>
  );
};

export default connect(({ global, login }: ConnectState) => ({
  ...login,
  ...global,
}))(withRouter<IBasicLayout>(BasicLayout));
