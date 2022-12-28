import Routes from "./routes";
const flatMap: any = (arr: any) =>
  Array.isArray(arr) ? arr.reduce((a, b) => [...a, ...flatMap(b)], []) : [arr];

const Router = [
  {
    path: "/",
    hideInPanelTab: true,
  },
  ...flatMap(Routes),
  {
    path: "*",
    hideInPanelTab: true,
  },
];

export default Router;

// 递归获取树形路由
// function getRoutes(routes: any) {
//   return routes.reduce((arr: any, route: any) => {
