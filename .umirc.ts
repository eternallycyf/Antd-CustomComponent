import { defineConfig } from 'umi';
const proxyConfig = require('./src/config/proxyConfig');
const path = require('path');

export default defineConfig({
  publicPath: 'http://wangxince.site/Antd-CustomComponent/',
  routes: [
    { path: '/', component: '@/pages/Home/index' },
    { path: '/hook', component: '@/pages/Home/hook' },
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
