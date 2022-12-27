import projectConfig from '@/config/projectConfig';
import { ConnectState } from '@/typings/connect';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Dropdown, Menu, MenuProps, Tabs, TabsProps } from 'antd';
import cx from 'classnames';
import { connect } from 'dva';
import React from 'react';
import { RouteProps } from 'react-router';
import styles from './index.less';
const { homePage: homePagePath } = projectConfig;
const { TabPane } = Tabs;

export enum closeType {
  refresh = 'refresh',
  closeOne = 'closeOne',
  closeALl = 'closeALl',
  closeOthers = 'closeOthers',
}

export interface MenuTab {
  tab: string;
  key: string;
  refresh?: boolean;
  closeable?: boolean;
  location?: RouteProps['location'];
  extraProperties?: any;
}

export interface MenuTabsProps {
  tabs: MenuTab[];
  activeKey: string;
  tabChildren?: any;
  tabsProps?: TabsProps;
  onRefresh: (key: string) => void;
  onSwitch: (key: string) => void;
  onRemove: (key: string) => void;
  onRemoveAll: (key: string) => void;
  onRemoveOthers: (key: string) => void;
  dispatch?: any;
  collapsed?: boolean;
}

const MenuTabs: React.FC<MenuTabsProps> = (props) => {
  const {
    tabs,
    activeKey,
    tabChildren,
    tabsProps,
    onRefresh,
    onSwitch,
    onRemove,
    onRemoveAll,
    onRemoveOthers,
    dispatch,
    collapsed,
  } = props;

  const handleTabEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => {
    if (action === 'remove' && typeof targetKey === 'string') {
      onRemove(targetKey);
    }
  };

  const handleTabsMenuClick =
    (tabKey: string): MenuProps['onClick'] =>
    (event) => {
      const { key } = event;
      if (key === closeType.refresh) {
        onRefresh(tabKey);
      } else if (key === closeType.closeOne) {
        onRemove(tabKey);
      } else if (key === closeType.closeALl) {
        onRemoveAll(tabKey);
      } else if (key === closeType.closeOthers) {
        onRemoveOthers(tabKey);
      }
    };

  const getMenu = (key: string, index: number) => {
    return [
      {
        label: '刷新',
        disabled: key !== activeKey,
        key: closeType.refresh,
      },
      {
        label: '关闭当前',
        disabled: index === 0,
        key: closeType.closeOne,
      },
      {
        label: '关闭所有',
        key: closeType.closeALl,
      },
      {
        label: '关闭其他',
        disabled: tabs.length === 1,
        key: closeType.closeOthers,
      },
    ];
  };

  const setTab = (tab: string, key: string, index: number) => {
    return (
      <span onContextMenu={(event) => event.preventDefault()}>
        <Dropdown
          menu={{
            items: getMenu(key, index),
            onClick: () => handleTabsMenuClick(key),
          }}
          trigger={['contextMenu']}
        >
          <span className={cx(styles.tabTitle)}>
            {key === homePagePath ? (
              <HomeOutlined className={styles['icon-home']} />
            ) : (
              tab
            )}
          </span>
        </Dropdown>
      </span>
    );
  };

  const handleMenuCollapse = () => {
    dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: !collapsed,
    });
  };

  return (
    <Tabs
      hideAdd
      animated={false}
      type="editable-card"
      className={styles.tabs}
      tabBarStyle={{ margin: 0, height: 30, display: 'flex' }}
      tabBarGutter={0}
      activeKey={activeKey}
      onChange={onSwitch}
      onEdit={handleTabEdit}
      tabBarExtraContent={{
        left: collapsed ? (
          <MenuUnfoldOutlined onClick={handleMenuCollapse} />
        ) : (
          <MenuFoldOutlined onClick={handleMenuCollapse} />
        ),
      }}
      {...tabsProps}
    >
      {tabs.map((item: MenuTab, index) => (
        <TabPane
          tab={setTab(item.tab, item.key, index)}
          key={item.key}
          closable={index !== 0}
          className={(item.key === activeKey && 'tab-tabpane-active') || ''}
        >
          {tabChildren[item.key]}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default connect(({ global }: ConnectState) => ({
  ...global,
}))(MenuTabs);
