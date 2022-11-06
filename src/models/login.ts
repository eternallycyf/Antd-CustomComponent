import { Effect } from '@/typings/connect';
import { Reducer } from 'redux';
import { routerRedux } from 'dva';

export interface ILoginModelState {
  token: string;
  accessCollection: any[];
  breadcrumbNameMap: any;
  loading: boolean;
  userTeamList: any[];
}

export interface ILoginModel {
  namespace: 'login';
  state: ILoginModelState;
  effects: {
    menu: Effect;
    login: Effect;
    logout: Effect;
    userInfo: Effect;
    ssoLogin: Effect;
    accessCode: Effect;
    getUserTeamList: Effect;
  };
  reducers: {
    updateState: Reducer<any>;
  };
}

const LoginModal: ILoginModel = {
  namespace: 'login',
  state: {
    token: sessionStorage.getItem('token') || '',
    accessCollection:
      (sessionStorage.getItem('accessCollection') as any as any[]) || [],
    breadcrumbNameMap: {},
    loading: false,
    userTeamList:
      (sessionStorage.getItem('userTeamList') as any as any[]) || [],
  },
  effects: {
    *login({ payload }, { call, put }) {},
    *ssoLogin({ payload }, { call, put }) {},
    *userInfo({ payload }, { call, put }) {},
    *getUserTeamList({ payload }, { call, put }) {},
    *menu({ payload }, { call, put }) {},
    *accessCode({ payload }, { call, put }) {},
    *logout({ payload }, { call, put }) {},
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};

export default LoginModal;
