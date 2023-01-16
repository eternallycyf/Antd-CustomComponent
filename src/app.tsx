import { ProLayout, ProLayoutProps } from '@ant-design/pro-components';
import { getDvaApp, Link } from '@umijs/max';
import BasicLayout from './core/layouts/BasicLayout';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    // 'global',
    // 'login'
  ],
};

/**
 * 引入redux-persist持久化
 */
const persistEnhancer =
  () =>
    (createStore: any) =>
      (reducer: any, initialState: any, enhancer: any) => {
        const store = createStore(
          persistReducer(persistConfig, reducer),
          initialState,
          enhancer,
        );
        const persist = persistStore(store, null);
        return {
          ...store,
          persist,
        };
      };

export const dva = {
  config: {
    extraEnhancers: [persistEnhancer()],
    onError(err: any) {
      err.preventDefault();
    },
  },
};

export async function getInitialState(): Promise<any> {
  const data = {
    layout: {
      collapsed: true,
    },
  };
  return data;
}

export const layout = (event: any) => {
  const { initialState, loading, error, refresh, setInitialState } = event;
  return {
    layout: 'mix',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: { locale: false },
    logout: () => { }, // do something
    avatarProps: {
      src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      size: 'small',
      title: '七妮妮',
    },
    menuItemRender: (menuItemProps: any, defaultDom: any) => {
      return (
        <div>
          <Link to={menuItemProps.path}>{defaultDom}</Link>
        </div>
      );
    },
    collapsed: initialState?.layout?.collapsed,
    onCollapse: (collapsed: boolean) => {
      setInitialState({
        ...initialState,
        layout: { ...initialState.layout, collapsed },
      });
    },
    pageTitleRender: false,
    collapsedButtonRender: false,
    childrenRender: (props: any) => (
      <BasicLayout props={props}>{props}</BasicLayout>
    ),
    breadcrumbRender: false,
  };
};
