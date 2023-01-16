export default {
  name: '权限管理',
  path: '/access',
  icon: 'smile',
  routes: [
    {
      name: '权限管理',
      path: '/access',
      redirect: '/access/home',
      hideInMenu: true,
      icon: 'smile',
    },
    {
      name: '配置',
      path: '/access/home',
      component: '@/pages/Access/Home',
      icon: 'smile',
    },
    {
      name: '添加权限',
      path: '/access/add',
      component: '@/pages/Access/Add',
      icon: 'smile',
    },
  ],
};
