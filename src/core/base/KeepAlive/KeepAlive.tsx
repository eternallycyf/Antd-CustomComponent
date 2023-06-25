import React, { FC, useCallback, useReducer } from 'react';
import * as actionTypes from './actionTypes';
import { KeepAliveContext } from './KeepAliveContext';
import { KeepAliveActions, keepAliveReducer } from './KeepAliveReducer';

interface IKeepAliveProps {
  children: React.ReactNode;
}

export type ISetKeepAliveState = (arg: KeepAliveActions['payload']) => void;

/**
 * {
 *  keepAliveId: 'class'
 *  reactElement: ReactElement
 *  nodes: Node[]
 *  status: 'CREATING' | 'CREATED'
 * }
 */

const KeepAlive: FC<IKeepAliveProps> = (props) => {
  const [keepAliveStates, dispatch] = useReducer(keepAliveReducer, {});

  const setKeepAliveState: ISetKeepAliveState = useCallback(
    ({ reactElement, keepAliveId }) => {
      if (!keepAliveStates[keepAliveId]) {
        dispatch({
          type: actionTypes.CREATING,
          payload: {
            keepAliveId,
            reactElement,
          },
        });
      }
    },
    [keepAliveStates],
  );

  return (
    <KeepAliveContext.Provider
      value={{
        keepAliveStates,
        setKeepAliveState,
        dispatch,
      }}
    >
      {props.children}
      {Object?.values(keepAliveStates).map((state) => {
        const { keepAliveId, reactElement } = state;
        return (
          <div
            key={keepAliveId}
            ref={(node) => {
              if (node && !keepAliveStates[keepAliveId]?.nodes) {
                dispatch({
                  type: actionTypes.CREATED,
                  payload: {
                    keepAliveId,
                    nodes: Array.from(node.childNodes) as any[],
                  },
                });
              }
            }}
          >
            {reactElement}
          </div>
        );
      })}
    </KeepAliveContext.Provider>
  );
};

export default KeepAlive;
