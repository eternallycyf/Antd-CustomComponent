//@ts-nocheck
import mockjs from 'mockjs';
import Router from '../src/routes';
import { getBreadcrumbNameMap } from '../src/utils/menu';

export const menuList = [
  {
    children: null,
    code: 'react_index_page',
    component: null,
    icon: null,
    id: 'index',
    name: '首页',
    path: '/',
    upperId: '0',
    url: null,
  },
  {
    children: [
      {
        children: [
          {
            children: null,
            code: 'access_config_home',
            component: null,
            icon: null,
            id: 'access_config_home',
            name: '配置',
            path: '/access/config/home',
            upperId: 'access_config',
            url: null,
          },
          {
            children: null,
            code: 'access_config_add',
            component: null,
            icon: null,
            id: 'access_config_add',
            name: '添加权限',
            path: '/access/config/add',
            upperId: 'access_config',
            url: null,
          },
        ],
        code: 'access_config',
        component: null,
        icon: null,
        id: 'access_config',
        name: '配置项',
        path: '/access/config',
        upperId: 'access',
        url: null,
      },
    ],
    code: 'access',
    component: null,
    icon: null,
    id: 'access',
    name: '权限管理',
    path: '/access',
    upperId: '1',
    url: null,
  },
  {
    children: null,
    code: 'access_config',
    component: null,
    icon: null,
    id: 'access_config',
    name: '配置项',
    path: '/access/config',
    upperId: 'access',
    url: null,
  },
  {
    children: null,
    code: 'access_config_home',
    component: null,
    icon: null,
    id: 'access_config_home',
    name: '配置',
    path: '/access/config/home',
    upperId: 'access_config',
    url: null,
  },
  {
    children: null,
    code: 'access_config_add',
    component: null,
    icon: null,
    id: 'access_config_add',
    name: '添加权限',
    path: '/access/config/add',
    upperId: 'access_config',
    url: null,
  },
  {
    children: [
      {
        children: null,
        code: 'home_class',
        component: null,
        icon: null,
        id: 'home_class',
        name: 'class',
        path: '/home/class',
        upperId: 'home',
        url: null,
      },
      {
        children: null,
        code: 'home_hook',
        component: null,
        icon: null,
        id: 'home_hook',
        name: 'hook',
        path: '/home/hook',
        upperId: 'home',
        url: null,
      },
    ],
    code: 'home',
    component: null,
    icon: null,
    id: 'home',
    name: '增删改组件',
    path: '/home',
    upperId: '1',
    url: null,
  },
  {
    children: null,
    code: 'home_class',
    component: null,
    icon: null,
    id: 'home_class',
    name: 'class',
    path: '/home/class',
    upperId: 'home',
    url: null,
  },
  {
    children: null,
    code: 'home_hook',
    component: null,
    icon: null,
    id: 'home_hook',
    name: 'hook',
    path: '/home/hook',
    upperId: 'home',
    url: null,
  },
  {
    children: null,
    code: 'export_excel',
    component: null,
    icon: null,
    id: 'export_excel',
    name: '导出Excel',
    path: '/ExportExcel',
    upperId: '1',
    url: null,
  },
  {
    children: [
      {
        children: null,
        code: 'antd-charts',
        component: null,
        icon: null,
        id: 'antd-charts',
        name: 'antd-charts',
        path: '/charts/antd-charts',
        upperId: 'charts',
        url: null,
      },
      {
        children: null,
        code: 'echarts',
        component: null,
        icon: null,
        id: 'echarts',
        name: 'echarts',
        path: '/charts/ECharts',
        upperId: 'charts',
        url: null,
      },
    ],
    code: 'charts',
    component: null,
    icon: null,
    id: 'charts',
    name: 'charts',
    path: '/charts',
    upperId: '1',
    url: null,
  },
  {
    children: null,
    code: 'antd-charts',
    component: null,
    icon: null,
    id: 'antd-charts',
    name: 'antd-charts',
    path: '/charts/antd-charts',
    upperId: 'charts',
    url: null,
  },
  {
    children: null,
    code: 'echarts',
    component: null,
    icon: null,
    id: 'echarts',
    name: 'echarts',
    path: '/charts/echarts',
    upperId: 'charts',
    url: null,
  },
  {
    children: null,
    code: 'export_word',
    component: null,
    icon: null,
    id: 'export_word',
    name: '导出word',
    path: '/ExportWord',
    upperId: '1',
    url: null,
  },
  {
    children: null,
    code: 'file_viewer',
    component: null,
    icon: null,
    id: 'file_viewer',
    name: '文件预览',
    path: '/FileViewer',
    upperId: '1',
    url: null,
  },
  {
    children: null,
    code: 'VirtualList',
    component: null,
    icon: null,
    id: 'VirtualList',
    name: '虚拟列表',
    path: '/VirtualList',
    upperId: '1',
    url: null,
  },
  {
    children: null,
    code: 'leaflet',
    component: null,
    icon: null,
    id: 'leaflet',
    name: 'leaflet',
    path: '/leaflet',
    upperId: '1',
    url: null,
  },
  {
    children: null,
    code: 'water_mark',
    component: null,
    icon: null,
    id: 'water_mark',
    name: '水印',
    path: '/WaterMark',
    upperId: '1',
    url: null,
  },
  {
    children: null,
    code: '404',
    component: null,
    icon: null,
    id: '404',
    name: '404',
    path: '/404',
    upperId: '1',
    url: null,
  },
];

export const breadcrumbNameMap = getBreadcrumbNameMap(menuList, Router);

export default {
  'POST /login': {
    code: 200,
    msg: '请求成功',
    success: true,
    data: 'JSKJDLLSDH',
  },
  'POST /fetchUserInfo': {
    code: 200,
    msg: '请求成功',
    success: true,
    data: {
      username: '测试用户',
    },
  },
  'POST /fetchMenu': {
    code: 200,
    msg: '请求成功',
    success: true,
    data: {
      breadcrumbNameMap,
      menuList,
    },
  },
  'POST /fetchAccessCollection': {
    code: 200,
    msg: '请求成功',
    success: true,
    data: ['class-editButton', 'class-deleteButton'],
  },
};
