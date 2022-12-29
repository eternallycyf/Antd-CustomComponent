import React from 'react';
import BaseComponent from '@/components/BaseComponent';
import { CommonSearch, CommonTable, CustomForm } from '@/components';
import { formatParams } from '@/utils/util';
import { getColumns } from './config/columns';
import { getSearches } from './config/search';
import projectConfig from '@/config/projectConfig';
import _ from 'lodash';
import { history } from 'umi';
import { saveActivity } from './service';
import { ModalType } from '@/typings';
import { getFormList } from './config/form';
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

  handleFormatValues = (val, record) => {
    console.log(val, record);
    return {
      val,
    };
  };

  render() {
    const { searchParams } = this.state;
    const tableParams = {
      columns: getColumns(this),
      searchParams: formatParams(searchParams),
      rowKey: 'activityCode',
      fetchMethod: 'get',
      button: [
        {
          text: '新增',
          onClick: this.handleAdd,
        },
      ],
      itemButton: [
        {
          text: '编辑',
          onClick: this.handleEdit,
        },
        {
          text: '删除',
          buttonType: 'delete',
          onClick: (item) =>
            this.handleDelete({ id: 1, idDel: 1 }, '/deleteActivityList'),
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
          formList={getSearches(this)}
          handleSearch={this.handleSearch}
          ref={this.searchRef}
          columnNumber={3}
        />
        <CommonTable {...tableParams} ref={this.tableRef} />
        <CustomForm
          ref={this.formRef}
          modalConf={{ width: 800 }}
          formList={getFormList(this)}
          defaultLayout={{ labelCol: { span: 5 }, wrapperCol: { span: 19 } }}
          title="营销活动"
          modalType={ModalType.modal}
          formatValues={this.handleFormatValues}
          onSubmit={{
            action: saveActivity,
            callback: this.handleRefreshPage,
          }}
        />
      </>
    );
  }
}

export default Activity;
