import { CommonSearch, CommonTable, CustomForm, Page } from '@/components';
import BaseComponent from '@/components/BaseComponent';
import { formatValuesType } from '@/components/CustomForm';
import projectConfig from '@/config/projectConfig';
import { ICommonTable, ModalType } from '@/typings';
import { formatParams } from '@/utils/util';
import { Col, Form, Input, Row, Table } from 'antd';
import { FormInstance } from 'antd/lib/form/Form';
import React, { Component, forwardRef } from 'react';
import { getColumns } from './config/columns';
import { getFormList } from './config/form';
import { getSearches } from './config/search';
import { getOtherFormList } from './config/otherFormList';
import styles from './index.less';
import { saveActivity } from '../service';
import { connect, history, withRouter } from '@umijs/max';
import { History } from 'history';
import { getFieldComp } from '@/core/helpers';
import { withRoutePage } from '@/core/Enhance/withRoutePage';
import { compose } from 'redux';
import { ConnectState } from '@/typings/connect';
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
  public readonly OtherFormRef = React.createRef<FormInstance>();
  constructor(props: IProps) {
    super(props);
    this.state = {
      searchParams: {
        aaaaaa: 1,
      },
      selectedRows: [],
      selectedRowKeys: [],
      expandedKey: 'index',
      expandedRowKeys: [],
    };
  }

  componentDidMount() {
    const [value, values] = this.searchRef.current?.handleRealParams();
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

  renderFormItem = (item: any, index?: number) => {
    const form = this.OtherFormRef.current;
    const { name, type, initialValue, formFieldProps, controlProps, ...otherProps } = item;
    const myControlProps = {
      ...controlProps,
      size: (controlProps && controlProps.size) || 'small',
    };
    const fieldProps = {
      form,
      name,
      type,
      initialValue,
      formFieldProps,
      controlProps: myControlProps,
      ...otherProps,
    };
    return getFieldComp(fieldProps);
  };

  render() {
    const { searchParams, selectedRowKeys, selectedRows, expandedRowKeys } = this.state;
    const tableParams: ICommonTable<any> = {
      columns: getColumns(this),
      searchParams: formatParams(searchParams),
      rowKey: 'index',
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
        expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.index}</p>,
        rowExpandable: (record) => record.name !== 'Not Expandable',
        onExpand: this.handleExpand,
      },
      onSelect: this.handleSelect,
      dataPath: 'data.list',
      totalPath: 'data.total',
      draggable: true,
      resizable: true,
      isSummary: true,
      // 虚拟列表配置
      isVirtual: true,
      scroll: { y: 800 },
      fixRowkeys: [1, 2, 3],
      rowEventHandlers: {
        onClick: (record, index, event) => {},
      },
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
          modalConf={{ width: 1000, forceRender: true }}
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
            console.table(this.formRef.current?.form.getFieldsValue());
            console.table(this.OtherFormRef.current?.getFieldsValue());
            // return Promise.reject 就阻止提交 用于额外的表单
            // return Promise.resolve({})
            await this.OtherFormRef.current?.validateFields();
            return Promise.resolve({});
          }}
          handleFieldsChange={(changedFields, allFields, form) => {
            // console.log(changedFields, allFields, form);
          }}
          otherRender={() => (
            <Form ref={this.OtherFormRef}>
              <Form.Item label="以下都是使用getFieldComp方法构造的form"></Form.Item>
              <Form.Item
                label="otherFormItem"
                name="otherFormItem"
                rules={[{ required: true, message: '请输入otherFormItem' }]}
              >
                <Input />
              </Form.Item>
              <Row>
                {(getOtherFormList(this) || []).map((item: any, index) => (
                  <Col span={item['span'] || 24} key={item.name}>
                    <Form.Item
                      labelAlign="right"
                      labelCol={item.layout.labelCol}
                      label={item.label}
                      name={item.name}
                      rules={item?.rules || []}
                      initialValue={item.initialValue}
                    >
                      {this.renderFormItem(item)}
                    </Form.Item>
                  </Col>
                ))}
              </Row>
            </Form>
          )}
        />
      </Page>
    );
  }
}

export default compose<typeof Activity>(
  withRoutePage,
  withRouter,
  connect(({ global, login }: ConnectState) => ({ token: login.token })),
)(Activity);
