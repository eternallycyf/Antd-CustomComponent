import { CommonSearch, CommonTable, CustomForm, Page } from '@/components';
import BaseComponent from '@/components/BaseComponent';
import { formatValuesType } from '@/components/CustomForm';
import projectConfig from '@/config/projectConfig';
import { ICommonTable, ModalType } from '@/typings';
import { formatParams } from '@/utils/util';
import { Form, Input } from 'antd';
import { FormInstance } from 'antd/lib/form/Form';
import React, { Component } from 'react';
import { getColumns } from './config/columns';
import { getFormList } from './config/form';
import { getSearches } from './config/search';
import styles from './index.less';
import { saveActivity } from '../service';
import { history } from '@umijs/max';
import { History } from 'history';
const { apiPrefixMock } = projectConfig;

interface IProps {}

interface IState {
  searchParams: {
    aaaaaa: number;
    [props: string]: any;
  };
  selectedRows: any[];
  selectedRowKeys: React.Key[];
  expandedKey: string;
  expandedRowKeys: React.Key[];
}

class Activity extends BaseComponent<IProps, IState> {
  private readonly OtherFormRef = React.createRef<FormInstance>();
  constructor(props: IProps) {
    super(props);
    this.state = {
      searchParams: {
        aaaaaa: 1,
      },
      selectedRows: [],
      selectedRowKeys: [],
      expandedKey: 'activityCode',
      expandedRowKeys: [],
    };
  }

  componentDidMount() {
    history.listen(({ location }) => {
      console.log(location);
    });
  }

  // 打开活动报名列表页面
  handleOpenRegList = (record: any) => {};

  handleFormatValues: formatValuesType = (values, record, type) => {
    console.log(values, record, type);
    if (type === 'edit_echo') {
      return record;
    }
    return { values };
  };

  otherRender = () => {
    return (
      <Form ref={this.OtherFormRef}>
        <Form.Item
          label="otherFormItem"
          name="otherFormItem"
          rules={[{ required: true, message: '请输入otherFormItem' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    );
  };

  render() {
    const { searchParams, selectedRowKeys, selectedRows, expandedRowKeys } =
      this.state;
    const tableParams: ICommonTable<any> = {
      columns: getColumns(this),
      searchParams: formatParams(searchParams),
      rowKey: 'activityCode',
      fetchMethod: 'get',
      extraParams: {
        my: '121213',
      },
      alternateColor: true,
      // defaultPageSize: 10,
      pagination: {
        pageSizeOptions: ['10', '20', '30', '40', '50'],
      },
      dataHandler: (dataSource, data) => {
        return dataSource;
      },
      button: [
        {
          text: '新增',
          onClick: this.handleAdd,
        },
        {
          text: '获取拖拽后及选择的数据',
          // element: <Button type="link" danger >ss</Button>,
          onClick: () => {
            console.log(this.getDataSource());
            console.log(selectedRowKeys, selectedRows);
            console.log(expandedRowKeys);
          },
        },
        {
          text: '导出',
          onClick: () => this.handleExport('增删改查组件'),
        },
      ],
      itemButton: [
        {
          text: '编辑',
          onClick: this.handleEdit,
          code: 'class-editButton',
        },
        {
          text: '删除',
          buttonType: 'delete',
          // code 权限校验如果后端接口没有返回 则不显示
          code: 'class-deleteButton',
          // code: '错误的code',
          onClick: () => {
            this.handleDelete({ id: 1, idDel: 1 }, '/deleteActivityList');
          },
        },
      ],
      footer: (a) => {
        // console.log(a)
        return <div>3</div>;
      },
      itemButtonWidth: 200,
      urls: {
        listUrl: `/getActivityList`,
      },
      selectType: 'checkbox',
      selectedRowKeys,
      selectedRows,
      expandable: {
        expandedRowKeys,
        expandedRowRender: (record) => (
          <p style={{ margin: 0 }}>{record.activityCode}</p>
        ),
        rowExpandable: (record) => record.name !== 'Not Expandable',
        onExpand: this.handleExpand,
      },
      onSelect: this.handleSelect,
      dataPath: 'data.list',
      totalPath: 'data.total',
      draggable: true,
      resizable: true,
      isSummary: true,
    };

    return (
      <Page>
        <CommonSearch
          formList={getSearches(this)}
          handleSearch={this.handleSearch}
          ref={this.searchRef}
          columnNumber={3}
        />
        <CommonTable {...tableParams} ref={this.tableRef} />
        <CustomForm
          title="营销活动"
          // isShowTitlePrefix={false}
          // isTable={true}
          className={styles.customForm}
          modalType={ModalType.modal}
          modalConf={{ width: 1000 }}
          defaultLayout={{ labelCol: { span: 3 }, wrapperCol: { span: 21 } }}
          ref={this.formRef}
          formList={getFormList(this)}
          formatValues={this.handleFormatValues}
          onSubmit={{
            action: saveActivity,
            callback: this.handleRefreshPage,
            failCallback: () => console.log('faill'),
            completeCallback: () => console.log('complete'),
          }}
          onCancel={() => console.log('cancel')}
          otherClick={() => {
            console.log('click');
          }}
          handleSubmitPreCallBack={async () => {
            console.log(this.formRef.current?.form.getFieldsValue());
            // return Promise.reject 就阻止提交 用于额外的表单
            // return Promise.resolve({})
            await this.OtherFormRef.current?.validateFields();
            return Promise.resolve({});
          }}
          handleFieldsChange={(changedFields, allFields, form) => {
            // console.log(changedFields, allFields, form);
          }}
          otherRender={this.otherRender}
        />
      </Page>
    );
  }
}

export default Activity;
