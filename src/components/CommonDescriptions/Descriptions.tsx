import useFetch, { useFetchProps } from '@/hook/useFetch';
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
    labelClassName,
    wrapperClassName,
    beforeChildren,
    afterChildren,
  } = props;
  const [{ value: data = {}, loading }, fetchData] = useFetch({ fetchConfig: fetchConfig as any, dataHandler });

  useImperativeHandle(ref, () => ({
    fetchData,
  }));

  const title = defaultTitle ? renderTooltip(defaultTitle as string, tooltip) : undefined;
  const extraContent =
    defaultExtra && Array.isArray(defaultExtra) && !React.isValidElement(defaultExtra) ? <AccessBtn btnList={defaultExtra} /> : defaultExtra;

  const currentData = dataSource != undefined ? dataSource : data;
  const currentLoading = defaultLoading != undefined ? defaultLoading : loading;

  const currentColumns = (columns || [])?.map((item) => ({
    ...item,
    labelClassName: item.labelClassName || labelClassName,
    wrapperClassName: item.wrapperClassName || wrapperClassName,
  }));

  return (
    <Fragment>
      <Skeleton loading={currentLoading}>
        <div className={`${styles.CommonDescriptions} ${className}`}>
          {beforeChildren}
          {(title || extraContent) && <ProcessPageCard title={title} extraContent={extraContent} />}
          <Row className={styles.CommonDescriptions} gutter={[8, 8]} justify="start" align="middle" {...rowProps}>
            {renderDetail(currentColumns, currentData)}
          </Row>
          {afterChildren}
        </div>
      </Skeleton>
    </Fragment>
  );
};

export default CommonDesc;
