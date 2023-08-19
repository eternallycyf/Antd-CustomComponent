import OldBaseMenu from '@/core/base/SliderMenu/BaseMenu';
import { IRgba } from '@/core/layouts/BasicLayout';
import { MenuItem } from '@/typings';
import { getFlatMenuKeys, getSubMenus } from '@/utils/menu';
import { SwapOutlined } from '@ant-design/icons';
import { Layout, Popover } from 'antd';
import classNames from 'classnames';
import { Dispatch } from 'dva';
import { History } from 'history';
import { FC, useEffect, useMemo, useState } from 'react';
import NewBaseMenu from './components/BaseMenu';
import styles from './index.less';
const { Sider } = Layout;

export interface IBaseMenuProps {
  theme?: 'dark' | 'light';
  menuList?: MenuItem[];
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  sliderMenuState: '1' | '2';
  location: History['location'];
  dispatch: Dispatch;
  ref0: React.RefObject<HTMLDivElement>;
  color: IRgba;
}

const SiderMenuWrapper: FC<IBaseMenuProps> = (props) => {
  const {
    theme,
    menuList,
    collapsed,
    location: { pathname },
    sliderMenuState,
    dispatch,
    ref0,
    color,
  } = props;

  const [openKeys, setOpenKeys] = useState<string[]>(getSubMenus(pathname, menuList));

  useEffect(() => {
    setOpenKeys(getSubMenus(pathname, menuList));
  }, [menuList, pathname]);

  const isMainMenu = (key: string): boolean => {
    return !!menuList?.some((item) => item.code === key);
  };

  const handleOpenChange = (openKeys: string[]): void => {
    // const moreThanOne = openKeys.filter((openKey) => isMainMenu(openKey)).length > 1;
    setOpenKeys(openKeys);
  };

  const flatMenuKeys = useMemo(() => {
    return getFlatMenuKeys(menuList);
  }, [menuList]);

  const defaultProps = collapsed ? {} : { openKeys };
  const siderClassName = classNames(styles.sider, {
    [styles.light]: theme === 'light',
  });

  return (
    <div ref={ref0} style={{ height: '100%' }}>
      <Sider theme={theme} trigger={null} collapsible collapsed={collapsed} collapsedWidth={0} width={188} className={siderClassName}>
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

        <Popover placement="top" content={`切换到${sliderMenuState == '2' ? '悬浮菜单' : '传统菜单'}`}>
          <div
            className={styles.swap}
            style={{
              background: `rgba(${color.r},${color.g},${color.b},${color.a})`,
              '--swap-bg': `rgba(${color.r},${color.g},${color.b},0.8)`,
            }}
            onClick={() => {
              dispatch({
                type: 'global/changeSliderMenuState',
                sliderMenuState: sliderMenuState === '1' ? '2' : '1',
              });
            }}
          >
            <SwapOutlined style={{ color: '#fff' }} />
          </div>
        </Popover>
      </Sider>
    </div>
  );
};

export default SiderMenuWrapper;
