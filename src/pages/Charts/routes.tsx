export default {
  name: 'charts',
  path: '/charts',
  routes: [
    {
      name: 'charts',
      path: '/charts',
      redirect: '/charts/echarts',
      hideInMenu: true,
      icon: 'smile',
    },
    {
      name: 'antd-charts',
      path: '/charts/antd-charts',
      component: '@/pages/Charts/ACharts',
      icon: 'smile',
    },
    {
      name: 'echarts',
      path: '/charts/ECharts',
      component: '@/pages/Charts/ECharts',
      icon: 'smile',
    },
  ],
};
