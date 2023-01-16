export default {
  name: 'charts',
  path: '/charts',
  routes: [
    {
      name: 'echarts',
      path: '/charts',
      redirect: '/charts/echarts',
      hideInMenu: true,
      icon: 'smile',
    },
    {
      name: 'antd-charts',
      path: '/charts/ACharts',
      component: '@/pages/Charts/ACharts',
      icon: 'smile',
    },
    {
      name: 'ECharts',
      path: '/charts/Echarts',
      component: '@/pages/Charts/ECharts',
      icon: 'smile',
    },
  ],
};
