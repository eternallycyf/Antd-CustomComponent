import React, { useEffect, useMemo, useState } from 'react';
import { Layout } from 'antd';
import classNames from 'classnames';
import BaseMenu from './BaseMenu';
import styles from './index.less';
import { MenuItem } from '@/typings';
import { History } from 'history';
import { getDefaultCollapsedSubMenus, getFlatMenuKeys } from '@/utils/menu';
const { Sider } = Layout;

export interface ISiderMenu {
  theme?: 'light' | 'dark';
  menuList: MenuItem[];
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  location: History['location'];
}

const SiderMenuWrapper: React.FC<ISiderMenu> = (props) => {
  const {
    theme,
    menuList,
    collapsed,
    location: { pathname },
    onCollapse,
  } = props;

  const [openKeys, setOpenKeys] = useState<string[]>(
    getDefaultCollapsedSubMenus(pathname, menuList),
  );

  useEffect(() => {
    setOpenKeys(getDefaultCollapsedSubMenus(pathname, menuList));
  }, [menuList, pathname]);

  const isMainMenu = (key: string): boolean => {
    return menuList.some((item) => {
      return key ? item.name === key || item.path === key : false;
    });
  };

  const handleOpenChange = (openKeys: string[]): void => {
    const moreThanOne =
      openKeys.filter((openKey) => isMainMenu(openKey)).length > 1;

    setOpenKeys(moreThanOne ? [openKeys.pop() as string] : [...openKeys]);
  };

  const flatMenuKeys = useMemo(() => {
    return getFlatMenuKeys(menuList);
  }, [menuList]);

  const defaultProps = collapsed ? {} : { openKeys };
  const siderClassName = classNames(styles.sider, {
    [styles.light]: theme === 'light',
  });
  return (
    <Sider
      style={{ background: 'transparent' }}
      theme={'light'}
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={0}
      width={210}
      className={siderClassName}
    >
      <BaseMenu
        {...defaultProps}
        mode="inline"
        location={props.location}
        menuList={menuList}
        collapsed={collapsed}
        flatMenuKeys={flatMenuKeys}
        onOpenChange={handleOpenChange}
      />
    </Sider>
  );
};

export default SiderMenuWrapper;
