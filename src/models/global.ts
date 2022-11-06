import { Reducer } from 'redux';
import { UserInfo } from '@/typings';

export interface IGlobalModelState {
  theme: 'dark' | 'light';
  collapsed: boolean;
  showTagNav: boolean;
  showNotice: boolean;
  showFul1Screen: boolean;
  userInfo: UserInfo<number | string>;
  sliderMenuState: '1' | '2';
}
