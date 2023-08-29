import { WaterMark } from '@/components/Widget';
import config from '@/config/projectConfig';
import SiderMenu from '@/core/base/CustomMenu';
import GlobalHeader from '@/core/base/GlobalHeader';
import TagsNav from '@/core/base/TagsNav';
import { ConnectState } from '@/typings/connect';
import { localStore } from '@/utils/storage';
import { StyleProvider } from '@ant-design/cssinjs';
import { BellOutlined } from '@ant-design/icons';
import { connect, Dispatch, getDvaApp, Helmet, History, Outlet, withRouter } from '@umijs/max';
import { RouteComponentProps, useAppData } from '@umijs/renderer-react';
import { ConfigProvider, FloatButton, Layout, Spin, theme as antdTheme, Tour, TourProps } from 'antd';
import _ from 'lodash';
import { FC, Fragment, useEffect, useRef, useState } from 'react';
import ColorPicker from '../base/GlobalHeader/ColorPicker';
import { KeepAlive } from '../base/KeepAlive';
import styles from './index.less';
import IndexPage from './IndexPage';

const { Sider, Content, Header } = Layout;
const { title } = config;

interface IBaseBasicLayout extends RouteComponentProps<any> {
  location: History['location'];
  children: React.ReactNode;
  dispatch: Dispatch;
}

type IBasicLayout = IBaseBasicLayout & Pick<ConnectState, 'global'>['global'] & Pick<ConnectState, 'login'>['login'];

export interface IRgba {
  r: string;
  g: string;
  b: string;
  a: string;
}

const BasicLayout: FC<IBasicLayout> = (props) => {
  const { routes } = useAppData();
  const [open, setOpen] = useState<'1' | '0'>(localStore.get('hasTour') || '1');
  const ref0 = useRef<HTMLDivElement>(null!);
  const ref1 = useRef<HTMLDivElement>(null!);
  const ref2 = useRef<HTMLDivElement>(null!);
  const ref3 = useRef<HTMLDivElement>(null!);
  const { menuList, color, breadcrumbNameMap, children, collapsed, location, sliderMenuState, dispatch, userInfo, theme } = props;
  const currentRoutesObj = Object.values(routes).filter((item) => item?.path == location.pathname)?.[0];
  // TODO: routes 添加keepAlive配置
  // const hasKeepAlive = currentRoutesObj?.keepAlive;

  const steps: TourProps['steps'] = [
    {
      title: '自定义的menu',
      description: (
        <div>
          <div>鼠标悬浮时展开-而不是点击下拉图标-更加清晰-更易使用</div>
          <div style={{ color: `rgba(${color?.r}, ${color?.g}, ${color?.b}, ${color?.a})` }}>可以鼠标悬浮一下 权限管理</div>
          <div>公众组件路由：home-class</div>
        </div>
      ),
      target: () => ref0.current,
      placement: 'right',
    },
    {
      title: '多tabs页签切换',
      description: '增加了缓存功能',
      target: () => document.querySelector('#container-TagsNav .ant-tabs-nav')!,
    },
    {
      title: '主题色切换',
      description: '动态改变',
      target: () => ref2.current,
    },
    {
      title: '暗黑色调切换',
      description: '点击即可切换',
      target: () => ref3.current,
    },
  ];

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

  const { breadcrumbNameMap: localBreadcrumbNameMap = {}, menuList: localMenuList = [] } = getDvaApp()._store.getState().global;

  const siderMenuProps = {
    theme,
    menuList: menuList || localMenuList,
    location,
    collapsed,
    sliderMenuState,
    dispatch,
    color,
  };

  const TagsNavProps = {
    breadcrumbNameMap: breadcrumbNameMap || localBreadcrumbNameMap,
    menuList: menuList || localMenuList,
    location,
  };

  const algorithmObj = theme == 'dark' ? { algorithm: antdTheme.darkAlgorithm } : { algorithm: antdTheme.defaultAlgorithm };

  return (
    <Fragment>
      <ConfigProvider
        theme={{
          ...algorithmObj,
          token: {
            colorPrimary: color ? `rgba(${color?.r}, ${color?.g}, ${color?.b}, ${color?.a})` : 'rgba(51,9,215)',
          },
        }}
      >
        <Helmet>
          <title>{title}</title>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <meta name="keyword" content="react, umi, antd"></meta>
        </Helmet>
        <StyleProvider hashPriority="high">
          <Layout className={styles.container} style={{ '--primary-color': `rgba(${color?.r}, ${color?.g}, ${color?.b}, ${color?.a})` }}>
            <GlobalHeader ref2={ref2} ref3={ref3} dispatch={dispatch} theme={theme} ColorPicker={<ColorPicker dispatch={dispatch} color={color} />} />
            <Layout className={styles.content}>
              <Sider theme={theme} style={{ background: 'transparent', display: collapsed ? 'none' : '' }}>
                <SiderMenu {...siderMenuProps} ref0={ref0} />
              </Sider>
              <div id="container-TagsNav" style={{ width: 'calc( 100vw - 200px)', background: '#fff' }}>
                {!_.isEmpty(breadcrumbNameMap) && !_.isEmpty(userInfo) ? (
                  <TagsNav {...TagsNavProps}>
                    <WaterMark content={userInfo?.username || '未登录'} fillStyle="rgba(123,139,167,0.2)">
                      {location.pathname !== '/' ? <Outlet /> : <IndexPage />}
                    </WaterMark>
                  </TagsNav>
                ) : (
                  <Spin spinning={true} size="large" className={styles.spinning} tip="加载中..." />
                )}
              </div>
              {/* <Content> */}
              {/* <KeepAlive>{location.pathname !== '/' ? <Outlet /> : <IndexPage />}</KeepAlive> */}
              {/* </Content> */}
            </Layout>
          </Layout>
        </StyleProvider>
        <FloatButton
          type="primary"
          icon={<BellOutlined />}
          tooltip={'重新打开操作指引'}
          onClick={() => {
            setOpen('1');
            localStore.set('hasTour', '1');
          }}
        />
        <Tour
          open={Boolean(Number(open))}
          onClose={() => {
            setOpen('0');
            localStore.set('hasTour', '0');
          }}
          steps={steps}
        />
      </ConfigProvider>
    </Fragment>
  );
};

export default connect(({ global, login }: ConnectState) => ({
  ...login,
  ...global,
}))(withRouter<IBasicLayout>(BasicLayout));
