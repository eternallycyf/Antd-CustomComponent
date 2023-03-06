import { Menu } from 'antd';
import { Link } from '@umijs/max';
import { MenuItem } from '@/typings';
const { SubMenu } = Menu;
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
    icon = (
      <img
        src={path}
        style={{ width: 24, height: 24, marginRight: 8 }}
        alt={code}
      />
    );
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
    <Link to={itemPath} target={target} replace={itemPath === pathname}>
      {getImage(code as any)}
      <span>{name}</span>
    </Link>
  );
};

export const getSubMenuOrItem = (item: MenuItem, pathname: string) => {
  if (item.children && item.children.some((child) => child.name)) {
    const { name, code } = item;
    return (
      <SubMenu
        className="sider-base-menu"
        key={item.code}
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {getImage(code as any)}
            <span>{name}</span>
          </div>
        }
      >
        {item.children.map((child) => getSubMenuOrItem(child, pathname))}
      </SubMenu>
    );
  }
  return (
    <Menu.Item key={item.code}>{getMenuItemPath(item, pathname)}</Menu.Item>
  );
};
