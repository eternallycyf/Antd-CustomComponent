import React, { useEffect, useRef, useState } from 'react';
import BaseComponent from '@/components/BaseComponent';
import { CommonSearch, CommonTable } from '@/components';
import { formatParams } from '@/utils/util';
import { columns } from './hookConfig/columns';
import { searches } from './hookConfig/search';
import projectConfig from '@/config/projectConfig';
import _ from 'lodash';
import { history } from 'umi';
import {} from './service';
const { apiPrefixMock } = projectConfig;

const Activity = () => {
  const searchRef = useRef<React.ElementRef<typeof CommonSearch>>(null!);
  const tableRef = useRef<InstanceType<typeof CommonTable>>(null!);
  const [params, setParams] = useState({
    activityType: 0,
    aaaaaa: 1,
  });

  useEffect(() => {
    tableRef.current?.handleRefreshPage();
  }, [params]);

  // 手动控制刷新
  // useEffect(() => {
  //   setParams({
  //     ...params,
  //     xxx
  //   })
  // }, [xxx])

  const handleOpenRegList = (record: any) => {};

  const tableParams = {
    columns,
    searchParams: formatParams(params),
    rowKey: 'activityCode',
    fetchMethod: 'get',
    button: [
      {
        text: '报名列表',
        onClick: handleOpenRegList,
      },
    ],
    itemButton: [
      {
        text: '报名列表',
        onClick: handleOpenRegList,
        buttonType: 'delete',
      },
    ],
    urls: {
      listUrl: `/getActivityList`,
    },
    dataPath: 'data.list',
    totalPath: 'data.total',
  };
  return (
    <>
      <CommonSearch
        formList={searches}
        handleSearch={setParams}
        ref={searchRef}
        columnNumber={3}
      />
      <CommonTable {...tableParams} ref={tableRef} />
    </>
  );
};

export default Activity;
