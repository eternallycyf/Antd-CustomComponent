import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/hook', component: '@/pages/hook' },
  ],
  fastRefresh: {},
  mock: {},
  history: { type: 'hash' },
  dynamicImport: {},
  publicPath:
    process.env.APP_ENV === 'development'
      ? '/'
      : 'http://wangxince.site/Antd-CustomComponent/',
});
