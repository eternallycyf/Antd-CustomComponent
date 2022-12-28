import { defineConfig } from '@umijs/max';
import routerConfig from "./src/routes";
const proxyConfig = require("./src/config/proxyConfig");
const path = require("path");

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  base: '/',
  history: { type: "hash" },
  publicPath:
    process.env.NODE_ENV === 'production'
      ? 'http://wangxince.site/Antd-CustomComponent/'
      : '/',
  routes: routerConfig,
  layout: {
    title: '公众crud组件"',
    contentWidth: "Fluid",
    locale: false,
  },
  theme: { '@primary-color': '#00CA88' },
  devtool: process.env.NODE_ENV === 'development' ? 'eval' : false,
  antd: {},
  fastRefresh: true,
  proxy: proxyConfig,
  clickToComponent: {},
  dva: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  hash: true,
  mfsu: true,
  npmClient: 'yarn',
});

