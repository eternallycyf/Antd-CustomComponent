import React from 'react';

interface Props {
  [key: string]: any;
}

interface ComponentWithAuthProps extends Props {
  isAuth: boolean;
}

export default function withAuthentication<P extends Props>(Component: React.ComponentType<P>): React.FC<ComponentWithAuthProps & P> {
  return function AuthenticatedComponent(props: ComponentWithAuthProps & P) {
    const { isAuth, ...rest } = props;

    if (isAuth) {
      return <Component {...(rest as P)} />;
    } else {
      return <div className="error">no Auth</div>;
    }
  };
}
