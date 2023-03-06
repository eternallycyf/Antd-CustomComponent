import Routes from './routes';
const flatMap: any = (arr: any) =>
  Array.isArray(arr) ? arr.reduce((a, b) => [...a, ...flatMap(b)], []) : [arr];

const Router = [
  {
    path: '/',
    hideInPanelTab: true,
    component: '../core/layouts/BasicLayout',
    routes: Routes,
  },
  {
    path: '*',
    hideInPanelTab: true,
  },
];

export default Router;
