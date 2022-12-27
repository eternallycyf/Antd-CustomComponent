export default {
  name: "权限管理",
  path: "/access",
  routes: [
    {
      name: "权限管理",
      path: "/access",
      redirect: "/access/home",
      hideInMenu: true,
    },
    {
      name: "配置",
      path: "/access/home",
      component: "@/pages/Access/Home",
    },
    {
      name: "添加权限",
      path: "/access/add",
      component: "@/pages/Access/Add",
    },
  ],
};
