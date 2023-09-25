import { IIndexPageProps } from './';
import React from 'react';
import styles from './index.less';
import { Spin, Tabs } from 'antd';

function IndexPage<Values = any>(props: IIndexPageProps<Values>): React.ReactElement {
  const { loading, header, tabProps, componentProps, tabList = [], children } = props;
  return (
    <div className={styles.IndexPage}>
      <Spin spinning={loading}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.headerCard}>{header}</div>
            <div className={styles.spaceLine} />
          </div>
          <div className={styles.content}>
            {tabList && tabList.length != 0 && (
              <Tabs className={styles['tabs']} {...tabProps}>
                {tabList.map(({ tab, key, Component, visible, ...rest }) => {
                  if (visible != undefined && !visible) return null;
                  return (
                    <Tabs.TabPane tab={tab} key={key}>
                      <div className={styles.tabContentCard} style={rest?.cardStyles}>
                        <Component {...componentProps} />
                      </div>
                    </Tabs.TabPane>
                  );
                })}
              </Tabs>
            )}
            {children}
          </div>
        </div>
      </Spin>
    </div>
  );
}

export default IndexPage;
