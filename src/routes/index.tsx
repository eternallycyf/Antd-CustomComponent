import Routes from './routes';
const flatMap: any = (arr: any) => (Array.isArray(arr) ? arr.reduce((a, b) => [...a, ...flatMap(b)], []) : [arr]);

const Router = [
  {
    path: '/',
    hideInPanelTab: true,
    component: '../core/layouts/BasicLayout',
    wrappers: ['@/core/Enhance/Authorized'],
    routes: Routes,
  },
  {
    path: '/login',
    component: '../core/base/Login',
  },
  {
    path: '*',
    component: '../core/base/404',
  },
];

export default Router;
