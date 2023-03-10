import { defineConfig } from '@umijs/max';
import routerConfig from './src/routes';
import zhCN from 'antd/locale/zh_CN';
const proxyConfig = require('./src/config/proxyConfig');
const path = require('path');

const repo = 'Antd-CustomComponent';
const content = `(function(){
  let divs = document.createElement('div');
  divs.className = 'snow-container';
  document.querySelector('body')?.appendChild(divs);
})()`;

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  base: process.env.NODE_ENV === 'production' ? '/Antd-CustomComponent/' : '/',
  publicPath:
    process.env.NODE_ENV === 'production'
      ? 'http://wangxince.site/Antd-CustomComponent/'
      : '/',
  routes: routerConfig,
  layout: false,
  // layout: {
  //   title: '公众crud组件"',
  //   contentWidth: 'Fluid',
  //   locale: false,
  // },
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
    // theme: { '@primary-color': '#00CA88' },
  },
  // metas: [
  //   {
  //     'http-equiv': 'Content-Security-Policy',
  //     content: 'upgrade-insecure-requests',
  //   },
  //   { 'http-equiv': 'Cache-control', content: 'no-cache' },
  //   { 'http-equiv': 'Cache', content: 'no-cache' },
  // ],
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
  headScripts: [{ src: 'https://unpkg.com/jquery@3.6.4/dist/jquery.js' }],
  scripts: [
    { content, charset: 'utf-8' },
    {
      src:
        process.env.NODE_ENV === 'development'
          ? '/js/snow.js'
          : `/${repo}/js/snow.js`,
    },
  ],
  tailwindcss: {},
});
