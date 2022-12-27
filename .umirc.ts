import { defineConfig } from 'umi';
const proxyConfig = require('./src/config/proxyConfig');
const path = require('path');

export default defineConfig({
  publicPath:
    process.env.NODE_ENV === 'production'
      ? 'http://wangxince.site/Antd-CustomComponent/'
      : '/',
  routes: [
    { path: '/', name: 'class方式', component: '@/pages/Home/index' },
    { path: '/hook', name: 'hook方式', component: '@/pages/Home/hook' },
  ],
  fastRefresh: {},
  layout: {
    title: '公众crud组件',
    contentWidth: 'Fluid',
    navTheme: 'light',
  },
  theme: { 'primary-color': '#3363D7' },
  mock: {},
  hash: true,
  history: { type: 'hash' },
  dynamicImport: {},
  nodeModulesTransform: {
    type: 'none',
  },
});
