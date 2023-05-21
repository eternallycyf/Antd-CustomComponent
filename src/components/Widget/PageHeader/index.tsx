import Page from '@/components/Page';
import { Card, CardProps, Col, ColProps } from 'antd';
import React, { useEffect, useImperativeHandle } from 'react';
import styles from './index.less';

const _getHeight = ({ height, searchType, setHeight }: _IGetHeight) => {
  const ele = document.querySelector(`.${styles.page} .ant-table-header+.ant-table-body`);
  if ((!height || searchType) && ele) {
    const top = ele?.getBoundingClientRect()?.top;
    setHeight(document.documentElement.clientHeight - 80);
  }
};

export interface IHandle {
  getHeight: (searchType: boolean) => void;
}

interface IBasePageHeaderProps {
  PageHeaderRef?: React.Ref<IHandle>;
  className?: string;
  children?: React.ReactNode;
}

interface IBasePageHeaderCardProps extends CardProps {
  isHeader?: boolean;
  col?: ColProps['span'];
}

type IBasePageHeader = React.ForwardRefExoticComponent<IBasePageHeaderProps>;

type IBasePageHeaderCard = React.FC<IBasePageHeaderCardProps>;

export type IPageHeader = IBasePageHeader & {
  Card: typeof PageHeaderCard;
};

interface _IGetHeight {
  height?: number;
  searchType: boolean;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
}

const PageHeader = React.forwardRef<IHandle, IBasePageHeaderProps>((props, ref) => {
  const [height, setHeight] = React.useState<number>(0);
  const getHeight: IHandle['getHeight'] = (searchType) => {
    _getHeight({ height, searchType, setHeight });
  };
  const { children, className, PageHeaderRef } = props;

  useEffect(() => {
    getHeight(false);
  }, []);

  useImperativeHandle(PageHeaderRef, () => ({
    getHeight,
  }));

  return (
    <Page className={`${styles.page} ${className}`} style={{ height: `${height}px` }}>
      {children}
    </Page>
  );
}) as IPageHeader;

const PageHeaderCard: IBasePageHeaderCard = (props) => {
  const { isHeader = false, col = 24, children, ...restProps } = props;
  const bodyStyle: React.CSSProperties = {
    background: '#fff',
    padding: isHeader ? '16px 16px 0 16px' : '0 16px',
  };

  return (
    <Col span={col}>
      <Card style={{ marginTop: isHeader ? 0 : 10 }} bodyStyle={bodyStyle} {...restProps}>
        {children}
      </Card>
    </Col>
  );
};

PageHeader.Card = PageHeaderCard;

export default PageHeader;
