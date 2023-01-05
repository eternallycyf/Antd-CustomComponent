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
import { formatValuesType } from '@/components/CustomForm';
import styles from './index.less'
import { Form, Input } from "antd";
import { FormInstance } from "antd/lib/form/Form";
const { apiPrefixMock } = projectConfig;

class Activity extends BaseComponent<any, any> {
  private OtherFormRef = React.createRef<FormInstance>();
  constructor(props: any) {
    super(props);
    this.state = {
      searchParams: {
        aaaaaa: 1,
      },
    };
  }

  // 打开活动报名列表页面
  handleOpenRegList = (record: any) => { };

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
          label='otherFormItem'
          name='otherFormItem'
          rules={[{ required: true, message: '请输入otherFormItem' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    )
  }

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
        {
          text: '获取拖拽排序后的数据',
          onClick: () => console.log(this.getDataSource())
        }
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
      urls: {
        listUrl: `/getActivityList`,
      },
      dataPath: 'data.list',
      totalPath: 'data.total',
      draggable: true,
      resizable: true,
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
          otherClick={() => { console.log('click') }}
          handleSubmitPreCallBack={async () => {
            // return Promise.reject 就阻止提交 用于额外的表单
            // return Promise.resolve({})
            await this.OtherFormRef.current?.validateFields()
            return Promise.resolve({})
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
