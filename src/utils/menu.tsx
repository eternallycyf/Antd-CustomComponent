import React from 'react';
import _ from 'lodash';
import pathToRegXp from 'path-to-regexp';
import { MenuItem } from '@/typings';

/**
 * 获取面包屑映射
 * before:
 * [{ path: '/', name: '首页' }, { path: '/user', name: '用户管理' }, { path: '/user/list', name: '用户列表' }],
 * to:
 * {
 *  '/': { path: '/', name: '首页' },
 *  '/user': { path: '/user', name: '用户管理' },
 *  '/user/list': { path: '/user/list', name: '用户列表' }
 * }
 * @param {Object} menuList 菜单配置
 * @param routes
 * @returns
 */
export const getBreadcrumbNameMap = (menuList: any, routes: any[]) => {
  const routerMap: any = {};
  const flattenMenuData = (data: any) => {
    data.forEach((menuItem: any) => {
      if (menuItem.children || menuItem.routes) {
        flattenMenuData(menuItem.children || menuItem.routes);
      }
      // Reduce memory usage
      routerMap[menuItem.path] = menuItem;
    });
  };
  flattenMenuData(routes);
  flattenMenuData(menuList);
  return routerMap;
};

/**
 * 递归获取菜单中的路由集合
 * before:
 * [{path: '/mail'}, {path: '/customer', children: {path: 'all'}}]
 * to:
 * ['/mail', 'customer' ,'/customer/all']
 * @param menus
 * @returns
 */
export const getFlatMenuKeys = (menus: MenuItem[] = []): string[] => {
  let keys: any[] = [];
  menus.forEach((item) => {
    keys.push(item.path);
    if (item.children) {
      keys = keys.concat(getFlatMenuKeys(item.children));
    }
  });
  return keys;
};

/**
 * 根据 path 找出所有匹配的 menuKeys
 * before:
 * ['/abc', '/abc/:id' ,'/abc/:id/info', '/abc']
 * to:
 * ['/abc', '/abc/11' ,'/abc/11/info']
 * @param flatMenuKeys
 * @param path
 * @returns
 */
export const getMenuMatches = (
  flatMenuKeys: string[],
  path: string,
): string[] => {
  return flatMenuKeys.filter((item) => {
    return item ? pathToRegXp(item).test(path) : false;
  });
};

/**
 * 将一个url拆分成path数组
 * (/customer/all) => ['/customer', '/customer/all']
 * @param url
 * @returns
 */
export function urlToList(url: string): string[] {
  const urlList = url.split('/').filter((i) => i);
  return urlList.map((_, index) => `/${urlList.slice(0, index + 1).join('/')}`);
}

/**
 * 获取默认的菜单
 * @param pathname
 * @param menus
 * @param path
 * @returns
 */
export function getSubMenus(
  pathname: string,
  menus: MenuItem[] = [],
  path?: string[],
) {
  let newPath = path == undefined ? [] : path;
  let arr: any[] = [];
  menus.map((item) => {
    let temPath: string[] = newPath?.concat();
    temPath.push(item.code!);
    temPath.push(item.path!);
    if (pathname === item.path) {
      arr.push(...temPath);
      return temPath;
    }
    if (item.children) {
      arr.push(...getSubMenus(pathname, item.children, temPath));
      return getSubMenus(pathname, item.children, temPath);
    }
    return undefined;
  });
  return arr;
}

/**
 * 根据 pathname 获取默认 展开的 subMenu
 * @param pathName
 * @param menuList
 * @returns
 */
export const getDefaultCollapsedSubMenus = (
  pathName: string,
  menuList: MenuItem[],
): string[] => {
  const flatMenuKeys = getFlatMenuKeys(menuList);
  return urlToList(pathName)
    .map((item) => getMenuMatches(flatMenuKeys, item)[0])
    .filter((item) => item);
};

/**
 * 合并路由配置
 * @param menuList
 * @param routes
 * @returns
 */
export const mergeMenuList = (newMenuList: MenuItem[], routes: any[]) => {
  let menuList = [...newMenuList];
  const merge = (data: MenuItem[], config: any) => {
    try {
      data.map((item: MenuItem) => {
        const menu = config.find((c: any) => c.name === item.name);
        if (menu) {
          item.path = menu.path;
          item.multiple = menu.multiple;
          item.keepAlive = menu.keepAlive;
          item.icon = menu.icon;
        }

        if (
          item.children &&
          item.children.length &&
          !_.isEmpty(menu?.children) &&
          menu?.children.length
        ) {
          // 合并隐藏的菜单
          const hideMenu = menu.routes
            .filter((item: any) => item.hideInMenu)
            .filter((i: any) => i);
          if (item.children) {
            item.children = [...item.children, ...hideMenu];
            merge(item.children, menu.routes);
          } else {
            menuList = [...menuList, ...hideMenu];
          }
        }
        return undefined;
      });
    } catch (error) {
      console.log(error);
    }
  };
  merge(menuList, routes);
  return menuList;
};
