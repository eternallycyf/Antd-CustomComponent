import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
}

export const withRouter = <Props extends WithRouterProps>(Component: React.ComponentType<Props>) => {
  return React.forwardRef((props: Omit<Props, keyof WithRouterProps>, ref) => {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    return <Component ref={ref} {...(props as Props)} location={location} params={params} navigate={navigate} />;
  });
};
