import Routes from './routes';
const flatMap: any = (arr: any) =>
  Array.isArray(arr) ? arr.reduce((a, b) => [...a, ...flatMap(b)], []) : [arr];

const Router: any[] = [
  {
    path: '/',
    hideInPanelTab: true,
  },
  ...flatMap(Routes),
  {
    path: '*',
    hideInPanelTab: true,
  },
];

export default Router;
