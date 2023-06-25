import { IRgba } from '@/core/layouts/BasicLayout';
import * as service from '@/services';
import { MenuItem, UserInfo } from '@/typings';
import { Effect } from 'dva';
import { Reducer } from 'redux';
import { breadcrumbNameMap as BREAD_CRUMB_NAEMMAP, menuList as MENU_LIST } from './constant';

export interface IGlobalModelState {
  theme: 'dark' | 'light';
  collapsed: boolean;
  showTagNav: boolean;
  showNotice: boolean;
  showFullScreen: boolean;
  userInfo: UserInfo<number | string>;
  sliderMenuState: '1' | '2';
  breadcrumbNameMap: any;
  menuList: MenuItem[];
  accessCollection: string[];
  color: IRgba;
  crmUserInfo: {
    userId: string;
    realname: string;
  };
}

export interface IGlobalModel {
  namespace: 'global';
  state: IGlobalModelState;
  reducers: {
    changeCollapsed: Reducer<any>;
    changeColor: Reducer<any>;
    changeTheme: Reducer<any>;
    changeSliderMenuState: Reducer<any>;
    updateState: Reducer<any>;
  };
  effects: {
    fetch: Effect;
    fetchUserInfo: Effect;
    fetchMenu: Effect;
    fetchAccessCollection: Effect;
  };
  subscriptions: {
    setup: Effect;
  };
}

const GlobalModel: IGlobalModel = {
  namespace: 'global',
  state: {
    theme: 'light',
    collapsed: false,
    showTagNav: true,
    showNotice: true,
    showFullScreen: false,
    sliderMenuState: (localStorage.getItem('sliderMenuState') as '1') || '1',
    userInfo: {},
    breadcrumbNameMap: {},
    menuList: [],
    accessCollection: (sessionStorage.getItem('accessCollection') as any as any[]) || [],
    color: { r: '51', g: '99', b: '215', a: '1' },
    crmUserInfo: {
      userId: '',
      realname: '',
    },
  },
  reducers: {
    changeCollapsed(state, { collapsed }) {
      return { ...state, collapsed };
    },
    changeColor(state, { color }) {
      return { ...state, color };
    },
    changeTheme(state, { theme }) {
      return { ...state, theme };
    },
    changeSliderMenuState(state, { sliderMenuState }) {
      localStorage.setItem('sliderMenuState', sliderMenuState);
      return { ...state, sliderMenuState };
    },
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *fetch({ payload }, { call, put, select }) {
      yield put({ type: 'fetchUserInfo', payload: {} });
      yield put({ type: 'fetchMenu', payload: {} });
      yield put({ type: 'fetchAccessCollection', payload: {} });
      // @ts-ignore
      const data = yield select((state: any) => state.global);
      return data;
    },
    *fetchUserInfo({ payload }, { call, put }) {
      try {
        const { data: userInfo } = yield call(service.fetchUserInfo);
        yield put({
          type: 'updateState',
          payload: {
            userInfo,
          },
        });
      } catch (error) {
        yield put({
          type: 'updateState',
          payload: {
            userInfo: {},
          },
        });
      }
    },
    *fetchMenu({ payload }, { call, put }) {
      try {
        const { data } = yield call(service.fetchMenu);
        const { breadcrumbNameMap = {}, menuList = [] } = data;
        yield put({
          type: 'updateState',
          payload: {
            breadcrumbNameMap,
            menuList,
          },
        });
      } catch (error) {
        yield put({
          type: 'updateState',
          payload: {
            breadcrumbNameMap: BREAD_CRUMB_NAEMMAP,
            menuList: MENU_LIST,
          },
        });
      }
    },
    *fetchAccessCollection({ payload }, { call, put }) {
      const { data } = yield call(service.fetchAccessCollection);
      yield put({
        type: 'updateState',
        payload: {
          accessCollection: data,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ location }: any) => {
        const { pathname } = location;
        // if (pathname === '/') {
        //   dispatch({ type: 'fetch', payload: {} });
        // }
      });
    },
  },
};

export default GlobalModel;
