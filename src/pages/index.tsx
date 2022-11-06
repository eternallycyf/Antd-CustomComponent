import React from 'react';
import BaseComponent from '@/components/BaseComponent';
import { CommonSearch, CommonTable } from '@/components';
import { formatParams } from '@/utils/util';
import { columns } from './config/columns';
import { search } from './config/search';
import projectConfig from '@/config/projectConfig';
import _ from 'lodash';
import { history } from 'umi';
const { apiPrefixMock } = projectConfig;

class ActiveSignUp extends BaseComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchParams: {
        activityType: 0,
      },
    };
  }

  // 打开活动报名列表页面
  handleOpenRegList = (record: any) => {
    const activityId: string = _.get(record, 'activityId', '');
    history.push({
      pathname: `/activity/registerSignUp/${activityId}`,
      state: {
        title: record.activityName,
      },
    });
  };

  render() {
    const { searchParams } = this.state;
    const tableParams = {
      columns: columns as any[],
      searchParams: formatParams(searchParams),
      rowKey: 'activityId',
      fetchMethod: 'get',
      button: [{ text: '报名列表', onClick: this.handleOpenRegList }],
      itemButton: [{ text: '报名列表', onClick: this.handleOpenRegList }],
      urls: {
        listUrl: `${apiPrefixMock}/ims/data-access/meet/activities/queryByPage`,
      },
      dataPath: 'data.data.records',
      totalPath: 'data.data.total',
    };

    return (
      <>
        <CommonSearch
          formList={search}
          handleSearch={this.handleSearch}
          ref={this.searchRef}
          columnNumber={3}
        />
        <CommonTable {...tableParams} ref={this.tableRef} />
      </>
    );
  }
}

export default ActiveSignUp;
