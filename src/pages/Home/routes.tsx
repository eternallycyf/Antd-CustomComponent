export default {
  name: 'Home',
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
      component: '@/pages/Home',
    },
    {
      name: 'hook',
      path: '/home/hook',
      component: '@/pages/Home/hook',
    },
  ],
};
