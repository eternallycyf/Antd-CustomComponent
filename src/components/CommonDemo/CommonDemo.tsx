import useFetch from '@/hook/useFetch';
import React, { Fragment, useImperativeHandle } from 'react';
import { ICommonDemoHandle, ICommonDemoProps } from './';
import styles from './index.less';

const CommonDemo: React.ForwardRefRenderFunction<ICommonDemoHandle, ICommonDemoProps> = (props, ref) => {
  const { fetchConfig, dataHandler } = props;

  const [{ value: data = {}, loading }, fetchData] = useFetch<any>({ fetchConfig, dataHandler });

  useImperativeHandle(ref, () => ({
    fetchData,
  }));

  return <Fragment></Fragment>;
};

export default CommonDemo;
