import { CommonSearch, CommonTable, CustomForm } from '@/components';
import BaseComponent from '@/components/BaseComponent';
import { formatValuesType } from '@/components/CustomForm';
import projectConfig from '@/config/projectConfig';
import { ICommonTable, ModalType } from '@/typings';
import { formatParams } from '@/utils/util';
import { Form, Input } from 'antd';
import { FormInstance } from 'antd/lib/form/Form';
import React from 'react';
import { getColumns } from './config/columns';
import { getFormList } from './config/form';
import { getSearches } from './config/search';
import styles from './index.less';
import { saveActivity } from './service';
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
  private OtherFormRef = React.createRef<FormInstance>();
  constructor(props: any) {
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
        },
        {
          text: '删除',
          buttonType: 'delete',
          onClick: (item: any) =>
            this.handleDelete({ id: 1, idDel: 1 }, '/deleteActivityList'),
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
      // editable: true
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
          title="营销活动"
          // isShowTitlePrefix={false}
          // isTable={true}
          className={styles.customForm}
          modalType={ModalType.modal}
          modalConf={{ width: 800 }}
          defaultLayout={{ labelCol: { span: 5 }, wrapperCol: { span: 19 } }}
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
      </>
    );
  }
}

export default Activity;
