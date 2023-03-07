import { FC, useEffect, useMemo, useState } from 'react';
import { SwapOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import classNames from 'classnames';
import { Dispatch } from 'dva';
import { getFlatMenuKeys, getSubMenus } from '@/utils/menu';
import NewBaseMenu from './components/BaseMenu';
import OldBaseMenu from '@/core/base/SliderMenu/BaseMenu';
import styles from './index.less';
import { MenuItem } from '@/typings';
import { History } from 'history';
const { Sider } = Layout;

export interface IBaseMenuProps {
  theme?: 'dark' | 'light';
  menuList?: MenuItem[];
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  sliderMenuState: '1' | '2';
  location: History['location'];
  dispatch: Dispatch;
}

const SiderMenuWrapper: FC<IBaseMenuProps> = (props) => {
  const {
    theme,
    menuList,
    collapsed,
    location: { pathname },
    sliderMenuState,
    dispatch,
  } = props;

  const [openKeys, setOpenKeys] = useState<string[]>(
    getSubMenus(pathname, menuList),
  );

  useEffect(() => {
    setOpenKeys(getSubMenus(pathname, menuList));
  }, [menuList, pathname]);

  const isMainMenu = (key: string): boolean => {
    return !!menuList?.some((item) => item.code === key);
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
      theme={theme}
      style={{ background: '#fff' }}
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={0}
      width={180}
      className={siderClassName}
    >
      {sliderMenuState === '2' ? (
        <OldBaseMenu
          {...defaultProps}
          mode="inline"
          location={props.location}
          menuList={menuList}
          collapsed={collapsed}
          flatMenuKeys={flatMenuKeys}
          openKeys={openKeys}
          onOpenChange={handleOpenChange}
        />
      ) : (
        <NewBaseMenu
          {...defaultProps}
          mode="inline"
          location={props.location}
          menuList={menuList}
          collapsed={collapsed}
          flatMenuKeys={flatMenuKeys}
        />
      )}

      <div
        className={styles.swap}
        onClick={() => {
          dispatch({
            type: 'global/changeSliderMenuState',
            sliderMenuState: sliderMenuState === '1' ? '2' : '1',
          });
        }}
      >
        <SwapOutlined />
      </div>
    </Sider>
  );
};

export default SiderMenuWrapper;