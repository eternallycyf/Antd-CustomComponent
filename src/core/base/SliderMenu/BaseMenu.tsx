import React, { useCallback } from 'react';
import { Menu } from 'antd';
import { MenuItem } from '@/typings';
import { History } from 'history';
import { getSubMenuOrItem } from '@/core/helpers/utils';

export interface IBaseMenuProps {
  style?: React.CSSProperties;
  mode?: 'inline' | 'vertical';
  flatMenuKeys?: any;
  openKeys?: string[];
  collapsed?: boolean;
  location: History['location'];
  menuList?: MenuItem[];
  onOpenChange?: (openKeys: string[]) => void;
}

const BaseMenu: React.FC<IBaseMenuProps> = (props) => {
  const {
    collapsed,
    flatMenuKeys,
    menuList = [],
    location: { pathname },
    openKeys,
    ...restProps
  } = props;

  const getNavMenuItems = useCallback(
    (list: MenuItem[]) => {
      if (!list) return [];
      return list
        .filter((item) => item.upperId === '1')
        .filter((item) => item.name && !item.hideInMenu)
        .map((item) => getSubMenuOrItem(item, pathname))
        .filter((item) => item);
    },
    [getSubMenuOrItem],
  );

  return (
    <Menu
      key="Menu"
      inlineIndent={8}
      selectedKeys={openKeys}
      {...restProps}
      openKeys={openKeys}
      items={getNavMenuItems(menuList)}
    />
  );
};

export default BaseMenu;