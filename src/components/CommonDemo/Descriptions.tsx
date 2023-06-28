import request from '@/utils/request';
import { Card, Empty, List } from 'antd';
import _ from 'lodash';
import React, { Fragment, useEffect, useImperativeHandle } from 'react';
import { useAsyncFn } from 'react-use';
import { IDescriptionsHandle, IDescriptionsProps } from './';
import styles from './index.less';

const CommonDesc: React.ForwardRefRenderFunction<IDescriptionsHandle, IDescriptionsProps> = (props, ref) => {
  const { fetchConfig } = props;

  useEffect(() => {
    fetchData();
  }, fetchConfig?.depts || []);

  useImperativeHandle(ref, () => ({
    fetchData,
  }));

  const [{ value: data = [], loading }, fetchData] = useAsyncFn(async (defaultParams?, defaultData?) => {
    const response = await request(fetchConfig?.apiUrl!, {
      method: fetchConfig?.method || 'get',
      params: defaultParams || fetchConfig?.params,
      data: defaultData || fetchConfig?.data,
    });
    const data = _.get(response, fetchConfig?.dataPath || 'data.data');
    return data && data?.length != 0 ? data.map((item: any, index: number) => ({ ...item, index })) : [];
  }, fetchConfig?.depts || []);

  return <Fragment></Fragment>;
};

export default CommonDesc;
