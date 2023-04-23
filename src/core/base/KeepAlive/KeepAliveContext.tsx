import { createContext } from 'react';
import { ISetKeepAliveState } from './KeepAlive';
import { KeepAliveActions, KeepAliveState } from './KeepAliveReducer';

export interface IKeepAliveContext {
  keepAliveStates: KeepAliveState;
  setKeepAliveState: ISetKeepAliveState;
  dispatch: React.Dispatch<KeepAliveActions>;
}

export const KeepAliveContext = createContext<IKeepAliveContext>({} as IKeepAliveContext);
