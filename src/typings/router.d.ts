import { useLocation, useNavigate, useParams } from 'react-router-dom';

interface ILocation extends ReturnType<typeof useLocation> {
  query: Record<string, unknown>;
}

export interface RouteComponentProps<T = ReturnType<typeof useParams>> {
  history?: {
    back: () => void;
    goBack: () => void;
    location: ILocation;
    push: (url: string, state?: any) => void;
    replace: (url: string, state?: any) => void;
    listen: (listener: (location: ILocation) => void) => void;
  };
  location?: ILocation;
  match: {
    params: T;
  };
  params?: T;
  path?: string;
  navigate?: ReturnType<typeof useNavigate>;
}
