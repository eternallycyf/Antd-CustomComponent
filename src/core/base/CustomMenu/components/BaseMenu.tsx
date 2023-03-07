import { MenuItem as MenuItemProps } from '@/typings';
import { getMenuMatches, urlToList } from '@/utils/menu';
import { List, Popover } from 'antd';
import React, { FC, useCallback } from 'react';
import styles from '../index.less';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import { IBaseMenuProps } from '../../SliderMenu/BaseMenu';
import { getImage, getMenuItemPath } from '@/core/helpers/utils';

const modifyClassForElement = (
  selectors: string = '',
  curClass = '',
  method = 'add',
) => {
  const dom = document.querySelector(selectors)!;
  const className = dom.className || '';
  let classList = className.split(' ');

  if (method === 'add' && !classList.includes(curClass)) {
    classList.push(curClass);
  } else {
    classList = classList.filter((item: string) => item !== curClass);
  }

  const finalClass = classList.reduce(
    (total: string, next: string) => total + ' ' + next,
  );
  dom.className = finalClass;
};

const getSelectedMenuKeys = ({
  pathname,
  flatMenuKeys,
  openKeys,
}: {
  pathname: string;
  flatMenuKeys: string[];
  openKeys: string[];
}) => {
  const keys = urlToList(pathname).map((itemPath) =>
    getMenuMatches(flatMenuKeys, itemPath).pop(),
  );

  // if pathname can't match, use the nearest parent's key
  let selectedKeys = keys.filter((key) => key);
  if (!selectedKeys.length && openKeys) {
    selectedKeys = [openKeys[openKeys.length - 1]];
  }
  return selectedKeys;
};

const showContentMask = (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();
  e.preventDefault();

  modifyClassForElement(
    '.core-base-tags-nav-index-tabs',
    '.core-base-tags-nav-index-showMask',
    'add',
  );
};

const hideContentMask = (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();
  e.preventDefault();
  modifyClassForElement(
    '.core-base-tags-nav-index-tabs',
    '.core-base-tags-nav-index-showMask',
    'remove',
  );
};

const getSelectedClass = (
  curPath: any = '',
  selectedPaths: string[] = [],
): string => {
  const [firstPath] = selectedPaths;
  if (!curPath === !firstPath) {
    return styles.selected;
  }

  if (curPath instanceof Array) {
    const flag = selectedPaths.some((path) =>
      curPath.some((otherPath) => path === otherPath.path),
    );
    return flag ? styles.selected : styles.unselected;
  }
  return '';
};

const BaseMenu: FC<IBaseMenuProps> = (props) => {
  const {
    collapsed,
    flatMenuKeys,
    menuList = [],
    location: { pathname },
    openKeys = [],
    ...restProps
  } = props;

  const selectedKeys = getSelectedMenuKeys({
    pathname,
    flatMenuKeys,
    openKeys,
  }) as string[];

  const getListItem = (
    infos: MenuItemProps,
    className: string,
    hasLink = false,
  ) => {
    return (
      <List.Item key={`list-item-${infos?.path}`} className={className}>
        {getImage(infos?.code || '')}
        {hasLink ? getMenuItemPath(infos, pathname) : infos?.name}
      </List.Item>
    );
  };

  const getMenuItem = (item: MenuItemProps) => {
    const selectedClass = getSelectedClass(item?.path, selectedKeys);
    return getListItem(item, selectedClass, true);
  };

  // 获取 subMenu || menuItem
  const getSubMenu = (infos: MenuItemProps) => {
    const { children } = infos;
    let flMenuClass = ''; // 一级菜单样式

    const content = children?.map((item) => {
      if (item.children && children.some((child) => child?.name)) {
        return (
          <SubMenu
            className={styles.subMenu}
            path={item.path}
            key={item.path || item.name}
            title={item.name}
          >
            {/* 三级菜单 */}
            {item?.children?.map((itemChild) => {
              const subMenuClass = getSelectedClass(
                itemChild?.path,
                selectedKeys,
              );
              if (!subMenuClass.includes(styles.selected)) {
                flMenuClass = styles.unselected;
              }
              return (
                <MenuItem
                  className={`${styles.menuItem} ${styles.subMenuClass} ${styles.thirdMenu}`}
                  key={itemChild.path || itemChild.name}
                >
                  {getMenuItemPath(itemChild, pathname)}
                </MenuItem>
              );
            })}
          </SubMenu>
        );
      }
      //  二级菜单
      return (
        <SubMenu
          className={styles.subMenu}
          path={item.path}
          key={item.path || item.name}
          title={item.name}
        ></SubMenu>
      );
    }) as JSX.Element[];

    const arr = new Array(2).fill(1);
    const contentWrapper = (
      <div
        onMouseOver={showContentMask}
        onMouseOut={hideContentMask}
        className={styles.overview}
      >
        {arr.map((_, ind) => (
          <div key={ind}>
            {handleSubMenu(content, ind + 1 === 3 ? 0 : ind + 1).map(
              (item: any, index: number) => {
                if (index === 0) {
                  return React.cloneElement(item, { type: '1' });
                }
                return item;
              },
            )}
          </div>
        ))}
      </div>
    );
    // 一级菜单
    const subMenu = (
      <Popover
        arrow={false}
        placement="right"
        key={infos.path || infos.name}
        getPopupContainer={() =>
          document.getElementsByClassName(
            'core-base-tags-nav-index-tabs',
          )[0] as HTMLElement
        }
        content={contentWrapper}
      >
        {getListItem(infos, styles.unselected)}
      </Popover>
    );
    return subMenu;
  };

  const handleSubMenu = (content: JSX.Element[], count: number) => {
    return content.filter(
      (_item: JSX.Element, ind: number) => (ind + 1) % 3 === count,
    );
  };

  const getSubMenuOrItem = (item: MenuItemProps) => {
    const { children } = item;
    return children ? getSubMenu(item) : getMenuItem(item);
  };

  const getNavMenuItems = useCallback(
    (list: MenuItemProps[]) => {
      if (!list) return [];
      console.log(list);
      const menu = list
        .filter((item) => item.path !== '/404')
        .filter((item) => item.upperId === '1')
        .filter((item) => item.name && !item.hideInMenu)
        .map((item) => getSubMenuOrItem(item))
        .filter((item) => item);

      const contentWrapper = (
        <div onMouseOver={showContentMask} onMouseOut={hideContentMask}>
          {menu}
        </div>
      );
      return contentWrapper;
    },
    [getSubMenuOrItem],
  );

  return (
    <List key="Menu" className={styles.menuList} {...restProps}>
      {getNavMenuItems(menuList)}
    </List>
  );
};

export default BaseMenu;
