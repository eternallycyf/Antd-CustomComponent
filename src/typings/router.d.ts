import { useLocation, useNavigate, useParams } from 'react-router-dom';

export interface RouteComponentProps<T = ReturnType<typeof useParams>> {
  history?: {
    back: () => void;
    goBack: () => void;
    location: ReturnType<typeof useLocation>;
    push: (url: string, state?: any) => void;
    replace: (url: string, state?: any) => void;
  };
  location?: ReturnType<typeof useLocation>;
  match: {
    params: T;
  };
  params?: T;
  path?: string;
  navigate?: ReturnType<typeof useNavigate>;
}
