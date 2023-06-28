import request from '@/utils/request';
import { renderTooltip } from '@/utils/util';
import { Row, Skeleton } from 'antd';
import _ from 'lodash';
import React, { Fragment, useEffect, useImperativeHandle } from 'react';
import { useAsyncFn } from 'react-use';
import AccessBtn from '../AccessBtn';
import ProcessPageCard from '../CommonCard/ProcessPage/ProcessPageCard';
import { IDescriptionsHandle, IDescriptionsProps } from './';
import styles from './index.less';
import { renderDetail } from './utils';

const CommonDesc: React.ForwardRefRenderFunction<IDescriptionsHandle, IDescriptionsProps> = (props, ref) => {
  const {
    fetchConfig,
    columns = [],
    dataHandler,
    dataSource,
    loading: defaultLoading,
    title: defaultTitle,
    tooltip,
    extra: defaultExtra,
    rowProps,
    className,
    beforeChildren,
    afterChildren,
  } = props;

  useEffect(() => {
    fetchData();
  }, fetchConfig?.depts || []);

  useImperativeHandle(ref, () => ({
    fetchData,
  }));

  const [{ value: data = {}, loading }, fetchData] = useAsyncFn(async (defaultParams?, defaultData?) => {
    const response = await request(fetchConfig?.apiUrl!, {
      method: fetchConfig?.method || 'get',
      params: defaultParams || fetchConfig?.params,
      data: defaultData || fetchConfig?.data,
    });
    const data = _.get(response, fetchConfig?.dataPath || 'data.data');
    if (dataHandler) return dataHandler(data);
    return data || {};
  }, fetchConfig?.depts || []);

  const title = defaultTitle ? renderTooltip(defaultTitle as string, tooltip) : undefined;
  const extraContent =
    defaultExtra && Array.isArray(defaultExtra) && !React.isValidElement(defaultExtra) ? <AccessBtn btnList={defaultExtra} /> : defaultExtra;

  const currentData = dataSource != undefined ? dataSource : data;
  const currentLoading = defaultLoading != undefined ? defaultLoading : loading;

  return (
    <Fragment>
      <Skeleton loading={currentLoading}>
        <div className={`${styles.CommonDescriptions} ${className}`}>
          {beforeChildren}
          {(title || extraContent) && <ProcessPageCard title={title} extraContent={extraContent} />}
          <Row className={styles.CommonDescriptions} gutter={[9, 9]} justify="start" align="middle" {...rowProps}>
            {renderDetail(columns, currentData)}
          </Row>
          {afterChildren}
        </div>
      </Skeleton>
    </Fragment>
  );
};

export default CommonDesc;
