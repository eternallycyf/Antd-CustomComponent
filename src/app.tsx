import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    // 'global',
    // 'login'
  ],
};

/**
 * 引入redux-persist持久化
 */
const persistEnhancer = () => (createStore: any) => (reducer: any, initialState: any, enhancer: any) => {
  const store = createStore(persistReducer(persistConfig, reducer), initialState, enhancer);
  const persist = persistStore(store, null);
  return {
    ...store,
    persist,
  };
};

export const dva = {
  config: {
    extraEnhancers: [persistEnhancer()],
    onError(err: any) {
      err.preventDefault();
    },
  },
};

export async function getInitialState(): Promise<any> {
  const data = {
    layout: {
      collapsed: true,
    },
  };
  return data;
}
