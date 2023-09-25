import { CardProps, SpinProps, TabsProps } from 'antd';
import Page from './Page';
import IndexPage from './IndexPage';
import Line from './Line';

export interface IPage {
  loading?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  spinProps?: SpinProps;
  CardProps?: CardProps;
  title?: React.ReactNode;
}

export interface IIndexPageProps<T = any> {
  loading?: boolean;
  header?: React.ReactNode;
  tabProps?: TabsProps;
  componentProps?: T;
  tabList?: {
    tab: string;
    key: string | number;
    Component: any;
    visible: boolean;
    cardStyles?: React.CSSProperties;
    [props: string]: any;
  }[];
  children?: React.ReactNode;
}

const CompoundedCommonPage = Page;

type CompoundedComponent = typeof CompoundedCommonPage & {
  IndexPage: typeof IndexPage;
  Line: typeof Line;
};

const CommonPage = CompoundedCommonPage as CompoundedComponent;

CommonPage.IndexPage = IndexPage;
CommonPage.Line = Line;

export default CommonPage;
