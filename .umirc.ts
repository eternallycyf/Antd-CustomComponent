import { defineConfig } from 'umi';
const proxyConfig = require('./src/config/proxyConfig');
const path = require('path');

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  publicPath:
    process.env.APP_ENV === 'development'
      ? '/'
      : 'http://wangxince.site/Antd-CustomComponent/',
  routes: [
    { path: '/', component: '@/pages/Home/index' },
    { path: '/hook', component: '@/pages/Home/hook' },
  ],
  fastRefresh: {},
  layout: {
    title: 'Antd-CustomComponent',
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
