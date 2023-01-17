import DefaultRouter from '@/routes';
import { getBreadcrumbNameMap } from '@/utils/menu';

// TODO: 从后端接口获取
// export const menuList = [
//   {
//     children: null,
//     code: 'react_index_page',
//     component: null,
//     icon: null,
//     id: 'index',
//     name: '首页',
//     path: '/',
//     upperId: '0',
//     url: null,
//   },
//   {
//     children: [
//       {
//         children: null,
//         code: 'access_home',
//         component: null,
//         icon: null,
//         id: 'access_home',
//         name: '配置',
//         path: '/access/home',
//         upperId: 'access',
//         url: null,
//       },
//       {
//         children: null,
//         code: 'access_add',
//         component: null,
//         icon: null,
//         id: 'access_add',
//         name: '添加权限',
//         path: '/access/add',
//         upperId: 'access',
//         url: null,
//       },
//     ],
//     code: 'access',
//     component: null,
//     icon: null,
//     id: 'access',
//     name: '权限管理',
//     path: '/access',
//     upperId: '1',
//     url: null,
//   },
//   {
//     children: null,
//     code: 'access_home',
//     component: null,
//     icon: null,
//     id: 'access_home',
//     name: '配置',
//     path: '/access/home',
//     upperId: 'access',
//     url: null,
//   },
//   {
//     children: null,
//     code: 'access_add',
//     component: null,
//     icon: null,
//     id: 'access_add',
//     name: '添加权限',
//     path: '/access/add',
//     upperId: 'access',
//     url: null,
//   },
//   {
//     children: [
//       {
//         children: null,
//         code: 'home_class',
//         component: null,
//         icon: null,
//         id: 'home_class',
//         name: 'class',
//         path: '/home/class',
//         upperId: 'home',
//         url: null,
//       },
//       {
//         children: null,
//         code: 'home_hook',
//         component: null,
//         icon: null,
//         id: 'home_hook',
//         name: 'hook',
//         path: '/home/hook',
//         upperId: 'home',
//         url: null,
//       },
//     ],
//     code: 'home',
//     component: null,
//     icon: null,
//     id: 'home',
//     name: 'home',
//     path: '/home',
//     upperId: '1',
//     url: null,
//   },
//   {
//     children: null,
//     code: 'home_class',
//     component: null,
//     icon: null,
//     id: 'home_class',
//     name: 'class',
//     path: '/home/class',
//     upperId: 'home',
//     url: null,
//   },
//   {
//     children: null,
//     code: 'home_hook',
//     component: null,
//     icon: null,
//     id: 'home_hook',
//     name: 'hook',
//     path: '/home/hook',
//     upperId: 'home',
//     url: null,
//   },
//   {
//     children: null,
//     code: 'export_excel',
//     component: null,
//     icon: null,
//     id: 'export_excel',
//     name: '导出Excel',
//     path: '/ExportExcel',
//     upperId: '1',
//     url: null,
//   },
//   {
//     children: null,
//     code: 'export_word',
//     component: null,
//     icon: null,
//     id: 'export_word',
//     name: '导出word',
//     path: '/ExportWord',
//     upperId: '1',
//     url: null,
//   },
//   {
//     children: null,
//     code: 'file_viewer',
//     component: null,
//     icon: null,
//     id: 'file_viewer',
//     name: '文件预览',
//     path: '/FileViewer',
//     upperId: '1',
//     url: null,
//   },
//   {
//     children: null,
//     code: 'VirtualList',
//     component: null,
//     icon: null,
//     id: 'VirtualList',
//     name: '虚拟列表',
//     path: '/VirtualList',
//     upperId: '1',
//     url: null,
//   },
//   {
//     children: null,
//     code: 'water_mark',
//     component: null,
//     icon: null,
//     id: 'water_mark',
//     name: '水印',
//     path: '/WaterMark',
//     upperId: '1',
//     url: null,
//   },
//   {
//     children: null,
//     code: '404',
//     component: null,
//     icon: null,
//     id: '404',
//     name: '404',
//     path: '/404',
//     upperId: '1',
//     url: null,
//   },
// ];

export let menuList = DefaultRouter.map(({ routes, ...item }) => ({
  ...item,
  children: routes,
  icon: item?.icon || null,
  code: item.path == '/' ? '1' : item.path,
  id: item.path == '/' ? '1' : item.path,
  upperId: '0',
}));

const addAttrToNodes = (tree: any) => {
  tree.forEach((item: any, index: any) => {
    if (item?.routes) {
      item.children = item.routes;
      delete item.routes;
    }
    if (!item?.id) item.id = item.path;
    if (!item?.icon) item.icon = null;
    if (!item?.code) item.code = item.path;

    if (item.children && item.children.length > 0) {
      const redirectIndex = item.children.findIndex(
        (item: any) => item?.redirect,
      );
      item.children.forEach((ele: any, index: any) => {
        ele.upperId = item.id;
      });
      if (redirectIndex != -1) {
        item.children.splice(redirectIndex, 1);
      }

      addAttrToNodes(item.children);
    }
  });
  return tree;
};

menuList = addAttrToNodes(menuList);

export const breadcrumbNameMap = getBreadcrumbNameMap(menuList, DefaultRouter);
