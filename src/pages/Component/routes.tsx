export default {
  name: '增删改组件',
  path: '/home',
  icon: 'smile',
  routes: [
    {
      name: 'class',
      path: '/home',
      redirect: '/home/class',
      hideInMenu: true,
      icon: 'smile',
    },
    {
      name: 'class',
      path: '/home/class',
      component: '@/pages/Component/class',
      icon: 'smile',
    },
    {
      name: 'hook',
      path: '/home/hook',
      component: '@/pages/Component/hook',
      icon: 'smile',
    },
  ],
};
