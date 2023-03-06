import { AnyAction } from 'redux';
import { EffectsCommandMap } from 'dva';
import { FormInstance } from 'antd/es/form';
import { ILoginModelState } from '../models/login';
import { IGlobalModelState } from '../models/global';
import { History } from '@umijs/max';

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    app?: boolean;
  };
}

export interface ConnectState {
  loading: Loading;
  global: IGlobalModelState;
  login: ILoginModelState;
}

/**
 * @type T: Params matched in dynamic routing
 */
export interface ConnectProps<P extends { [K in keyof P]?: string } = any>
  extends Partial<History> {
  dispatch?: Dispatch;
}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & {
    select: <T>(func: (state: ConnectState) => T) => T;
  },
) => void;

/**
 * @type P: Type of payload
 * @type C: Type of callback
 */
export type Dispatch = <P = any, C = (payload: P) => void>(action: {
  type: string;
  payload?: P;
  callback?: C;
  [key: string]: any;
}) => any;

/**
 * Window declare
 */
declare global {
  interface Window {
    closeTab: (pathname: string, event?: any) => void;
    refreshTab: (pathname: any) => void;
    tabChildren: any;
  }
}
