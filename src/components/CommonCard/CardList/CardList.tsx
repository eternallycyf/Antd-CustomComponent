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

    fetchConfig,
    cardProps,
    listProps,
    paginationProps,
  } = props;

  useEffect(() => {
    fetchData();
  }, fetchConfig?.depts || []);

  useImperativeHandle(ref, () => ({
    fetchData,
  }));

  const [{ value: data = [], loading }, fetchData] = useAsyncFn(async (defaultParams?, defaultData?) => {
    const response = request(fetchConfig?.apiUrl!, {
      method: fetchConfig?.method || 'get',
      params: defaultParams || fetchConfig?.params,
      data: defaultData || fetchConfig?.data,
    });
    const data = _.get(await response, fetchConfig?.dataPath || 'data.data');
    return data && data?.length != 0 ? data.map((item: any, index: number) => ({ ...item, index })) : [];
  }, fetchConfig?.depts || []);

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
