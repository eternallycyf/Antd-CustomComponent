import { Reducer } from 'redux';
import { UserInfo } from '@/typings';
import { Effect } from 'dva';
import * as service from '@/services';

export interface IGlobalModelState {
  theme: 'dark' | 'light';
  showTagNav: boolean;
  showNotice: boolean;
  showFullScreen: boolean;
  userInfo: UserInfo<number | string>;
  sliderMenuState: '1' | '2';
  breadcrumbNameMap: any;
  menuList: any;
}

export interface IGlobalModel {
  namespace: 'global';
  state: IGlobalModelState;
  reducers: {
    updateState: Reducer<any>;
  };
  effects: {
    fetch: Effect;
    fetchUserInfo: Effect;
    fetchMenu: Effect;
  };
  subscriptions: {
    setup: Effect;
  };
}

const GlobalModel: IGlobalModel = {
  namespace: 'global',
  state: {
    theme: 'dark',
    showTagNav: true,
    showNotice: true,
    showFullScreen: false,
    sliderMenuState: (localStorage.getItem('sliderMenuState') as '1') || '1',
    userInfo: {},
    breadcrumbNameMap: {},
    menuList: [],
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *fetch({ payload }, { call, put, select }) {
      yield put({ type: 'fetchUserInfo', payload: {} });
      yield put({ type: 'fetchMenu', payload: {} });
      // @ts-ignore
      const data = yield select((state: any) => state.global);
      return data;
    },
    *fetchUserInfo({ payload }, { call, put }) {
      const { data: userInfo } = yield call(service.fetchUserInfo);
      yield put({
        type: 'updateState',
        payload: {
          userInfo,
        },
      });
    },
    *fetchMenu({ payload }, { call, put }) {
      const { data } = yield call(service.fetchMenu);
      const { breadcrumbNameMap = {}, menuList = [] } = data;
      yield put({
        type: 'updateState',
        payload: {
          breadcrumbNameMap,
          menuList,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ location }: any) => {
        const { pathname } = location;
        if (pathname === '/') {
          // dispatch({ type: 'fetch', payload: {} });
        }
      });
    },
  },
};

export default GlobalModel;
