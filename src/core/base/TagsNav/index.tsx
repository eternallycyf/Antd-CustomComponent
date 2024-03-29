import { homePage as homePagePath } from '@/config/projectConfig';
import { MenuItem } from '@/typings';
import { localStore } from '@/utils/storage';
import { History, history, useLocation } from '@umijs/max';
import _ from 'lodash';
import pathToRegexp from 'path-to-regexp';
import React, { useEffect, useState } from 'react';
import MenuTabs, { MenuTab } from './MenuTabs';
import { getFlatMenuKeys } from '@/utils/menu';

function getMetaDataOfTab(pathname: string, breadcrumbNameMap: MenuItem): MenuItem {
  return Object.values(breadcrumbNameMap).find((item: MenuItem) => {
    return item.path && pathToRegexp(item.path).test(pathname);
  });
}

/**
 * 如果是根据路径来显示标签页 可动态配置标签页标题
 * @param metaData
 * @param location
 */
function setPathName(metaData: MenuItem, location: History['location']) {
  if (!metaData) return 'Error';
  if (metaData.multiple) {
    const title = _.get(location, 'query.title') || _.get(location, 'state.title');
    return `${metaData.name}${title ? `-${title}` : ''}`;
  }
  return metaData.name;
}

function routeTo(targetTab: MenuTab) {
  if (targetTab) history.push(targetTab?.location ?? '/');
}

function addTab(newTab: MenuTab, activeTabs: MenuTab[]): any {
  // filter 过滤路由 为 '/' 的children, map 添加第一个 tab不可删除
  return [...activeTabs, newTab].map((item, index) => {
    if (activeTabs.length === 0 && index === 0) {
      return { ...item, closeable: false };
    }
    return { ...item, closeable: true };
  });
}

export interface PageTabsProps {
  children?: any;
  menuList: MenuItem[];
  location: History['location'];
  breadcrumbNameMap: MenuItem;
  routerList: any;
}

const PageTabs: React.FC<PageTabsProps> = (props) => {
  const [tabChildren, setTabChildren] = useState<any>({});
  const [tabs, setTabs] = useState<MenuTab[]>(localStore.get('tabs') || []);
  const location = useLocation();
  const _activeKey = location.pathname;
  const [activeKey, setActiveKey] = useState<string>(location.pathname);

  const { children, breadcrumbNameMap, routerList = [] } = props;

  useEffect(() => {
    window.closeTab = handleRemove;
    window.refreshTab = handleRefresh;
    window.tabChildren = tabChildren;
  });

  useEffect(() => {
    const metaData = getMetaDataOfTab(location.pathname, breadcrumbNameMap);
    const activeTitle = setPathName(metaData, location);
    // 获取路由list 返回的data 拿到acpCode
    const routerData = getMetaDataOfTab(_activeKey, routerList);
    const { code = '' } = metaData || {};
    //@ts-ignore
    const { acpCode = '' } = routerData || {};
    if (acpCode && code != acpCode) {
      window.closeTab(_activeKey);
      history.push({ pathname: '/403' });
      return;
    }

    if (!metaData) {
      const activeTab = tabs.find((tab) => pathToRegexp(tab.key).test(_activeKey));
      if (!tabChildren[_activeKey]) {
        tabChildren[_activeKey] = children;
        setTabChildren({ ...tabChildren });
      }

      if (!activeTab) {
        const newTag = {
          tab: activeTitle,
          key: _activeKey,
          location,
        };
        const addedTabs = addTab(newTag, tabs);
        setTabs(addedTabs);
      }
      return;
    }

    // 多开
    if (metaData.multiple) {
      const activeTabIndex = _.findIndex(tabs, { key: _activeKey });
      if (!tabChildren[_activeKey]) {
        tabChildren[_activeKey] = children;
        setTabChildren({ ...tabChildren });
      }
      if (activeTabIndex < 0) {
        const newTag = {
          tab: activeTitle,
          key: _activeKey,
          location,
        };
        const addedTabs = addTab(newTag, tabs);
        setTabs(addedTabs);
        localStore.set('tabs', addedTabs);
      } else {
        let newTabs = _.cloneDeep(tabs);
        const newTab = {
          tab: activeTitle,
          key: _activeKey,
          location,
        };
        newTabs.splice(activeTabIndex, 1, newTab);
        localStore.set('tabs', newTabs);
        setTabs(newTabs);
      }
    } else {
      const activeTab = tabs.find((tab) => pathToRegexp(tab.key).test(_activeKey));
      const activeTabIndex = tabs.findIndex((tab) => pathToRegexp(tab.key).test(_activeKey));
      if (!tabChildren[metaData.path]) {
        tabChildren[metaData.path] = children;
        setTabChildren({ ...tabChildren });
      }
      const newTab = {
        tab: activeTitle,
        key: metaData.path,
        location,
      };
      let newTabs = _.cloneDeep(tabs);
      if (!activeTab) newTabs = addTab(newTab, tabs);
      if (activeTab) {
        newTabs.splice(activeTabIndex, 1, newTab);
      }
      localStore.set('tabs', newTabs);
      setTabs(newTabs);
    }
    setActiveKey(_activeKey);
  }, [location]);

  const handleRefresh = (refreshKey: string) => {
    tabChildren[refreshKey] = React.cloneElement(tabChildren[refreshKey], {
      key: Math.random(),
    });
    setTabChildren({ ...tabChildren });
  };

  const handleSwitch = (switchKey: string) => {
    const targetTab = _.find(tabs, { key: switchKey });
    routeTo(targetTab!);
  };

  // 关闭当前
  const handleRemove = (removeKey: string, tabKey?: string) => {
    let nextTabKey: string;
    if (removeKey !== _activeKey) {
      nextTabKey = _activeKey;
    } else {
      const targetIndex = _.findIndex(tabs, { key: removeKey });
      const nextIndex = targetIndex > 0 ? targetIndex - 1 : 0;
      nextTabKey = tabs[nextIndex].key;
    }

    if (tabKey) nextTabKey = tabKey;
    const filteredTabs = tabs.filter((item) => item.key != removeKey);
    setTabs(filteredTabs);
    setTabChildren(_.omit(tabChildren, removeKey));
    localStore.set('tabs', filteredTabs);

    const targetTab = _.find(filteredTabs, { key: nextTabKey });
    routeTo(targetTab!);
  };

  const handleRemoveAll = () => {
    const newTab = tabs.slice(0, 1);
    setTabs(newTab);
    setTabChildren(_.pick(tabChildren, [homePagePath]));
    localStore.set('tabs', newTab);
    routeTo(newTab[0]);
  };

  const handleRemoveOthers = (currentKeys: string) => {
    const filteredTabs = tabs.filter((item, index) => index === 0 || item.key === currentKeys);
    setTabChildren(_.pick(tabChildren, [homePagePath, currentKeys]));
    setTabs(filteredTabs);
    localStore.set('tabs', filteredTabs);
  };

  return (
    <MenuTabs
      tabs={tabs}
      activeKey={activeKey}
      tabChildren={tabChildren}
      onSwitch={handleSwitch}
      onRemove={handleRemove}
      onRefresh={handleRefresh}
      onRemoveAll={handleRemoveAll}
      onRemoveOthers={handleRemoveOthers}
    />
  );
};

export default PageTabs;
