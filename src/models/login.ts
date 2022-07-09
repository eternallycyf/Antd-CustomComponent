import { Effect } from '@/typings/connect';
import { Reducer } from 'redux';
import { routerRedux } from 'dva';

export interface ILoginModelState {
  token: string;
  accessCollection: any[];
  breadcrumbNameMap: any;
  loading: boolean;
}

export interface ILoginModel {
  namespace: 'login';
  state: ILoginModelState;
  effects: {
    menu: Effect;
    login: Effect;
    logout: Effect;
    userInfo: Effect;
    soLogin: Effect;
    accessCode: Effect;
  };
  reducers: {
    updateState: Reducer<any>;
  };
}
