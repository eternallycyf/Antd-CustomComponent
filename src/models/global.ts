import { Reducer } from 'redux';
import { UserInfo } from '@/typings';

export interface IGlobalModelState {
  theme: 'dark' | 'light';
  collapsed: boolean;
  showTagNav: boolean;
  showNotice: boolean;
  showFullScreen: boolean;
  userInfo: UserInfo<number | string>;
  sliderMenuState: '1' | '2';
}

export interface IGlobalModel {
  namespace: 'global';
  state: IGlobalModelState;
  reducers: {
    changeCollapsed: Reducer<any>;
    updateState: Reducer<any>;
  };
}

const GlobalModel: IGlobalModel = {
  namespace: 'global',
  state: {
    theme: 'dark',
    collapsed: false,
    showTagNav: true,
    showNotice: true,
    showFullScreen: false,
    sliderMenuState: (localStorage.getItem('sliderMenuState') as '1') || '1',
    userInfo: {},
  },
  reducers: {
    changeCollapsed(state, { payload }) {
      return { ...state, ...payload };
    },
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};

export default GlobalModel;
