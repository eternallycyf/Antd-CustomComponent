export default {
  name: '增删改组件',
  path: '/home',
  routes: [
    {
      name: 'class',
      path: '/home',
      redirect: '/home/class',
      hideInMenu: true,
    },
    {
      name: 'class',
      path: '/home/class',
      component: '@/pages/Component',
    },
    {
      name: 'hook',
      path: '/home/hook',
      component: '@/pages/Component/hook',
    },
  ],
};
