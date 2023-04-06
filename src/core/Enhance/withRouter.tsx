import React from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
}

export const withRouter = <Props extends WithRouterProps>(Component: React.ComponentType<Props>) => {
  return (props: Omit<Props, keyof WithRouterProps>) => {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    return <Component {...(props as Props)} location={location} params={params} navigate={navigate} />;
  };
};
