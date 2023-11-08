import { MenuItem } from '@/typings';
import { Link } from '@umijs/max';
// 去除多余斜杠
export const conversionPath = (path: string) => {
  if (path && path.indexOf('http') === 0) {
    return path;
  }
  return `/${path || ''}`.replace(/\/+/g, '/');
};

// 一级菜单前缀icon
export const getImage = (code: string = '') => {
  let icon: string | JSX.Element = '';
  try {
    const path = require(`@/assets/images/CustomMenu/${code}.png`);
    icon = <img src={path} style={{ width: 24, height: 24, marginRight: 8 }} alt={code} />;
  } catch (error) {}
  return icon;
};

/**
 * 判断是否是http链接.返回 Link 或 a
 * @param {MenuItem} item
 */
export const getMenuItemPath = (item: MenuItem, pathname: string) => {
  const { name, code } = item;
  const itemPath = conversionPath(item.path);
  // const icon = getIcon(item.icon!);
  const { target } = item;
  // Is it a http link
  if (/^https?:\/\//.test(itemPath)) {
    return (
      <a href={itemPath} target={target}>
        <span>{name}</span>
      </a>
    );
  }
  return (
    <Link className="menu-link" to={itemPath} target={target} replace={itemPath === pathname} title={name}>
      {getImage(code as any)}
      <span className="nameClass">{name}</span>
    </Link>
  );
};

export const getSubMenuOrItem = (item: MenuItem, pathname: string): any => {
  if (item.children && item.children.some((child) => child.name)) {
    const { name, code } = item;
    return {
      key: item.code,
      className: 'sider-base-menu',
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {getImage(code as any)}
          <span>{name}</span>
        </div>
      ),
      children: getNavMenuItems(item.children, pathname),
    };
  }
  return {
    key: item.code,
    label: getMenuItemPath(item, pathname),
  };
};

export const getNavMenuItems = (list: MenuItem[], pathname: string) => {
  if (!list) return [];
  const menu = list
    .filter((item) => item.name && !item.hideInMenu)
    .map((item) => getSubMenuOrItem(item, pathname))
    .filter((item) => item);
  return menu;
};

/**
 * 合并路由配置
 * @param menuList
 * @param routes
 * @deprecated
 */
export const mergeMenuList = (menuList: MenuItem[], routes: any[]) => {
  const merge = (data, config) => {
    try {
      data.map((item) => {
        // 匹配的菜单
        const menu = config.find((i) => i.name === item.name);
        if (menu) {
          item.path = item.path || menu.path;
          item.multiple = menu.multiple;
          item.keepAlive = menu.keepAlive;
          item.icon = item.icon || menu.icon;
        }

        if (item.children && item.children.length && !_.isEmpty(menu) && menu.routes && menu.routes.length) {
          // 合并隐藏菜单
          const hideMenu = menu.routes.filter((item) => item.hideInMenu).filter((i) => i);
          if (item.children) {
            item.children = [...item.children, ...hideMenu];
            merge(item.children, menu.routes);
          } else {
            menuList = menuList.concat(hideMenu);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  merge(menuList, routes);
  return menuList;
};

export const getBreadcrmbRouter = (routes: any[]) => {
  const routerMap = {};

  const flattenMenuData = (data: any[]) => {
    data.forEach((menuItem) => {
      if (menuItem.children || menuItem.routes) {
        flattenMenuData(menuItem.children || menuItem.routes);
      }
      routerMap[menuItem.path] = menuItem;
    });
  };

  flattenMenuData(routes);
  return routerMap;
};
