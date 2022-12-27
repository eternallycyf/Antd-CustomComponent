import React from 'react';
import BaseComponent from '@/components/BaseComponent';
import { CommonSearch, CommonTable, CustomForm } from '@/components';
import { formatParams } from '@/utils/util';
import { getColumns } from './config/columns';
import { getSearches } from './config/search';
import projectConfig from '@/config/projectConfig';
import _ from 'lodash';
import { history } from 'umi';
import { getPreferentialList } from './service';
const { apiPrefixMock } = projectConfig;

class Activity extends BaseComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchParams: {
        activityType: 0,
        aaaaaa: 1,
      },
    };
  }

  componentDidMount() {
    this.handleRefreshPage();
  }

  // 打开活动报名列表页面
  handleOpenRegList = (record: any) => {};

  render() {
    const { searchParams } = this.state;
    const tableParams = {
      columns: getColumns(this),
      searchParams: formatParams(searchParams),
      rowKey: 'activityCode',
      fetchMethod: 'get',
      button: [
        {
          text: '报名列表',
          onClick: this.handleOpenRegList,
        },
      ],
      itemButton: [
        {
          text: '报名列表',
          onClick: this.handleOpenRegList,
          buttonType: 'delete',
        },
      ],
      urls: {
        listUrl: `/admin-site/marketing/activity/activityList`,
      },
      dataPath: 'data.list',
      totalPath: 'data.total',
    };

    return (
      <>
        <CommonSearch
          formList={getSearches(this)}
          handleSearch={this.handleSearch}
          ref={this.searchRef}
          columnNumber={3}
        />
        <CommonTable {...tableParams} ref={this.tableRef} />
      </>
    );
  }
}

export default Activity;
