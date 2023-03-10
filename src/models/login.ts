import { Effect } from '@/typings/connect';
import { Reducer } from 'redux';
import * as service from '@/services';
import { routerRedux } from 'dva';

export interface ILoginModelState {
  token: string;
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
    loading: false,
    userTeamList:
      (sessionStorage.getItem('userTeamList') as any as any[]) || [],
  },
  effects: {
    *login({ payload }, { call, put }) {
      const { data: token } = yield call(service.fetchToken);
      yield put({
        type: 'updateState',
        payload: {
          token,
        },
      });
      sessionStorage.setItem('token', token);
    },
    *ssoLogin({ payload }, { call, put }) {},
    *userInfo({ payload }, { call, put }) {},
    *getUserTeamList({ payload }, { call, put }) {},
    *menu({ payload }, { call, put }) {},
    *accessCode({ payload }, { call, put }) {},
    *logout({ payload }, { call, put }) {
      yield put({
        type: 'updateState',
        payload: { token: '' },
      });
      routerRedux.push('/login');
      sessionStorage.removeItem('token');
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};

export default LoginModal;
