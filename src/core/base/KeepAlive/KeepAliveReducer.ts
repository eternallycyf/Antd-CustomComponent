import * as actionTypes from './actionTypes';

export interface KeepAliveState {
  [key: string]: {
    keepAliveId: string;
    reactElement?: React.ReactElement;
    status: string;
    nodes?: Array<React.ReactElement>;
  };
}

const initialState = {};

export type KeepAliveActions =
  | {
      type: 'CREATING';
      payload: {
        keepAliveId: string;
        reactElement?: React.ReactElement;
        nodes?: Array<HTMLDivElement>;
      };
    }
  | {
      type: 'CREATED';
      payload: {
        keepAliveId: string;
        reactElement?: React.ReactElement;
        nodes?: Array<HTMLDivElement>;
      };
    };

export function keepAliveReducer(state: KeepAliveState | any, action: KeepAliveActions): KeepAliveState {
  const { type, payload } = action;
  const { keepAliveId, reactElement, nodes } = payload;
  switch (action.type) {
    case actionTypes.CREATING: {
      return {
        ...state,
        [keepAliveId]: {
          keepAliveId,
          reactElement,
          status: type,
          nodes: null,
        },
      };
    }
    case actionTypes.CREATED: {
      return {
        ...state,
        [keepAliveId]: {
          ...state[keepAliveId],
          status: type,
          nodes,
        },
      };
    }
    default: {
      return state;
    }
  }
}
