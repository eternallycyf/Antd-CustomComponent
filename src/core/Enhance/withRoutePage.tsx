import _ from 'lodash';
import React from 'react';

export const shouldRoutePageUpdate = (nextProps: any, thisProps: any) => {
  const {
    children: nextChildren,
    computedMatch: nextComputedMatch,
    history: nextHistory,
    location: nextLocation,
    match: nextMatch,
    route: nextRoute,
    staticContext: nextStaticContext,
    ...nextRest
  } = nextProps;

  const {
    children: thisChildren,
    computedMatch: thisComputedMatch,
    history: thisHistory,
    location: thisLocation,
    match: thisMatch,
    route: thisRoute,
    staticContext: thisStaticContext,
    ...thisRest
  } = thisProps;

  if (!_.isEqual(nextRest, thisRest)) return false;

  const { pathname: nextPathname, search: nextSearch, state: nextState } = nextLocation || {};

  const { pathname: thisPathname, search: thisSearch, state: thisState } = thisLocation || {};

  const isLocationChange = nextPathname !== thisPathname || nextSearch !== thisSearch || !_.isEqual(nextState, thisState);

  if (isLocationChange) return false;
  return true;
};

function getDisplayName<T>(WrappedComponent: React.ComponentType<T>) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export function withRoutePage<Wrapper = React.ComponentClass<any>>(WrappedComponent: React.ComponentType<any>): Wrapper {
  const WithRoutePage = React.memo((props: any) => {
    return <WrappedComponent {...props} />;
  }, shouldRoutePageUpdate);

  WithRoutePage.displayName = `WithRoutePage(${getDisplayName(WrappedComponent)})`;

  return WithRoutePage as Wrapper;
}
