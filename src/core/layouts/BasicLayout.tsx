import { WaterMark } from '@/components';
import config from '@/config/projectConfig';
import SiderMenu from '@/core/base/CustomMenu';
import GlobalHeader from '@/core/base/GlobalHeader';
import TagsNav from '@/core/base/TagsNav';
import { ConnectState } from '@/typings/connect';
import {
  connect,
  Dispatch,
  getDvaApp,
  Helmet,
  History,
  Outlet,
  withRouter,
} from '@umijs/max';
import { RouteComponentProps } from '@umijs/renderer-react';
import { ConfigProvider, Layout, Spin, theme as antdTheme } from 'antd';
import _ from 'lodash';
import { FC, Fragment, useEffect, useState } from 'react';
import ColorPicker from '../base/GlobalHeader/ColorPicker';
import styles from './index.less';
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

export interface IRgba {
  r: string;
  g: string;
  b: string;
  a: string;
}

const BasicLayout: FC<IBasicLayout> = (props) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [color, setColor] = useState<IRgba>({
    r: '25',
    g: '141',
    b: '241',
    a: '100',
  });
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

  const {
    breadcrumbNameMap: localBreadcrumbNameMap = {},
    menuList: localMenuList = [],
  } = getDvaApp()._store.getState().global;

  const siderMenuProps = {
    theme,
    menuList: menuList || localMenuList,
    location,
    collapsed,
    sliderMenuState,
    dispatch,
  };

  const TagsNavProps = {
    breadcrumbNameMap: breadcrumbNameMap || localBreadcrumbNameMap,
    menuList: menuList || localMenuList,
    location,
  };

  const algorithmObj = isDark
    ? { algorithm: antdTheme.darkAlgorithm }
    : { algorithm: antdTheme.defaultAlgorithm };

  console.log(isDark, algorithmObj);

  return (
    <Fragment>
      <ConfigProvider
        theme={{
          ...algorithmObj,
          token: {
            colorPrimary: color
              ? `rgba(${color?.r}, ${color?.g}, ${color?.b}, ${color?.a})`
              : 'cornflowerblue',
          },
        }}
      >
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
            <GlobalHeader
              isDark={isDark}
              setIsDark={setIsDark}
              ColorPicker={<ColorPicker color={color} setColor={setColor} />}
            >
              <div>
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
            </GlobalHeader>
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
      </ConfigProvider>
    </Fragment>
  );
};

export default connect(({ global, login }: ConnectState) => ({
  ...login,
  ...global,
}))(withRouter<IBasicLayout>(BasicLayout));
