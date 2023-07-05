import useFetch from '@/hook/useFetch';
import request from '@/utils/request';
import { Card, Empty, List } from 'antd';
import _ from 'lodash';
import React, { Fragment, useEffect, useImperativeHandle } from 'react';
import { useAsyncFn } from 'react-use';
import { ICardListHandle, ICardListProps } from './';
import styles from './index.less';

const CardList: React.ForwardRefRenderFunction<ICardListHandle, ICardListProps> = (props, ref) => {
  const {
    title,
    extra,
    actions,
    column = 3,
    rowKey = 'index',
    renderItem,

    dataHandler,
    fetchConfig,
    cardProps,
    listProps,
    paginationProps,
  } = props;

  const [{ value: data, loading }, fetchData] = useFetch<any>({ fetchConfig, dataHandler });

  useImperativeHandle(ref, () => ({
    fetchData,
  }));

  return (
    <Fragment>
      <List<Record<string, any>>
        rowKey={rowKey as string}
        loading={loading}
        grid={{ column }}
        pagination={{ pageSize: 9, ...paginationProps }}
        dataSource={data}
        renderItem={(item, index) => {
          return (
            <Card style={{ margin: 12 }} key={rowKey} hoverable title={title} extra={extra} actions={actions} {...cardProps}>
              {renderItem ? renderItem(item, index) : <Empty />}
            </Card>
          );
        }}
        {...listProps}
      />
    </Fragment>
  );
};

export default CardList;
