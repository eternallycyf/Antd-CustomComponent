export default {
  name: '权限管理',
  path: '/access',
  icon: 'smile',
  routes: [
    {
      name: '权限管理',
      path: '/access',
      redirect: '/access/config',
      hideInMenu: true,
      icon: 'smile',
    },
    {
      name: '配置',
      path: '/access/config',
      routes: [
        {
          name: '配置home',
          path: '/access/config/home',
          component: '@/pages/Access/Home',
          icon: 'smile',
        },
        {
          name: '添加权限',
          path: '/access/config/add',
          component: '@/pages/Access/Add',
          icon: 'smile',
        },
      ],
    },
  ],
};
