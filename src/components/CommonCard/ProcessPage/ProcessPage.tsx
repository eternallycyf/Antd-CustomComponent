import { AccessBtn } from '@/components';
import { withRoutePage } from '@/core/Enhance/withRoutePage';
import { LeftOutlined } from '@ant-design/icons';
import { withRouter } from '@umijs/max';
import { Card, Space } from 'antd';
import React, { FC } from 'react';
import { compose } from 'redux';
import styles from './index.less';
import { IProcessCard } from './interface';

const ProcessPage: FC<IProcessCard> = (props) => {
  const { className, history, title, extra, children, extraBtnList = [] } = props;

  const handleTitleOnClick = () => history?.goBack();

  const renderHeaderLeft = () => {
    return (
      <div className={styles.headerLeft} onClick={handleTitleOnClick}>
        <Space size={12}>
          <LeftOutlined style={{ fontSize: 18, marginTop: 2 }} />
          <span className={styles.title}>{title ?? '--'}</span>
        </Space>
      </div>
    );
  };

  const renderHeaderRightBtnList = () => {
    if (extraBtnList?.length === 0) return [];
    return extraBtnList
      .map((item) => ({
        ...item,
        className: `${styles['btn-' + item.buttonStyleType]} ${item.className}`,
        size: item?.size ?? 'middle',
        visible: typeof item.visible === 'function' ? item.visible : () => item?.visible ?? true,
      }))
      .filter((item) => item.visible(undefined as any as any, undefined as any as any, undefined as any as any));
  };

  const headerStyle: React.CSSProperties = {
    background: '#fff',
    padding: 17,
  };

  const bodyStyle: React.CSSProperties = {
    marginTop: 12,
    overflowY: 'auto',
    height: '81vh',
  };

  return (
    <div style={{ background: '#EFF1F4', padding: '0 12px' }}>
      <Card
        bordered={false}
        bodyStyle={bodyStyle}
        headStyle={headerStyle}
        className={`${styles.ProcessPage} ${className}`}
        title={renderHeaderLeft()}
        extra={extra ? extra : <AccessBtn btnList={renderHeaderRightBtnList()} />}
      >
        {children}
      </Card>
    </div>
  );
};

export default compose<typeof ProcessPage>(withRoutePage, withRouter)(ProcessPage);
