import { defineConfig } from '@umijs/max';
import routerConfig from './src/routes';
import zhCN from 'antd/locale/zh_CN';
const proxyConfig = require('./src/config/proxyConfig');
const path = require('path');

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  base: process.env.NODE_ENV === 'production' ? '/umi4-tab/' : '/',
  publicPath:
    process.env.NODE_ENV === 'production'
      ? 'http://wangxince.site/Antd-CustomComponent/'
      : '/',
  routes: routerConfig,
  layout: {
    title: '公众crud组件"',
    contentWidth: 'Fluid',
    locale: false,
  },
  locale: {
    // 默认使用 src/locales/zh-CN.ts 作为多语言文件
    antd: true,
    default: 'zh-CN',
    baseSeparator: '-',
  },
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  devtool: process.env.NODE_ENV === 'production' ? 'eval' : 'source-map',
  antd: {
    configProvider: {
      locale: zhCN,
    },
    theme: { '@primary-color': '#00CA88' },
  },
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
