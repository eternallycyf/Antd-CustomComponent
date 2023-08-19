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
