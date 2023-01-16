import { getDvaApp } from '@umijs/max';

export default async (initialState: any) => {
  getDvaApp()._store.dispatch({
    type: 'global/fetch',
    payload: {},
  });

  const canSeeAdmin = !!(
    initialState && initialState.name !== 'dontHaveAccess'
  );

  return {
    canSeeAdmin,
  };
};
