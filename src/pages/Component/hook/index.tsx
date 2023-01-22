import { CommonSearch, CommonTable, CustomForm, Page } from '@/components';
import { formatValuesType } from '@/components/CustomForm';
import projectConfig from '@/config/projectConfig';
import useBaseComponent from '@/hook/useBaseComponent';
import { ICommonTable, ModalType } from '@/typings';
import { ConnectState } from '@/typings/connect';
import { formatParams } from '@/utils/util';
import { connect } from '@umijs/max';
import { Form, FormInstance, Input } from 'antd';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { saveActivity } from '../service';
import { columns } from './config/columns';
import { getFormList } from './config/form';
import { searches } from './config/search';
import styles from './index.less';
const { apiPrefixMock } = projectConfig;

interface IProps {}
type IHandle = {
  form: FormInstance;
};

const IndexPage: React.ForwardRefRenderFunction<IHandle, IProps> = (
  props,
  ref,
) => {
  const [form] = Form.useForm();
  const self = useBaseComponent({
    searchParams: {
      activityType: 0,
      aaaaaa: 1,
    },
    expandedKey: 'activityCode',
  });

  useEffect(() => {
    self.tableRef.current?.handleRefreshPage();
  }, [self.searchParams]);

  useImperativeHandle(ref, () => ({
    form,
  }));

  // 手动控制刷新
  // useEffect(() => {
  //   setParams({
  //     ...params,
  //     xxx
  //   })
  // }, [xxx])

  const handleOpenRegList = (record: any) => {};

  const handleFormatValues: formatValuesType = (values, record, type) => {
    console.log(values, record, type);
    if (type === 'edit_echo') {
      return record;
    }
    return { values };
  };

  const otherRender = () => {
    return (
      <Form form={form}>
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

  const tableParams: ICommonTable<any> = {
    columns,
    searchParams: formatParams(self.searchParams),
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
        onClick: self.handleAdd,
      },
      {
        text: '获取拖拽后及选择的数据',
        // element: <Button type="link" danger >ss</Button>,
        onClick: () => {
          console.log(self.getDataSource());
          console.log(self.selectedRowKeys, self.selectedRows);
          console.log(self.expandedRowKeys);
        },
      },
      {
        text: '导出',
        onClick: () => self.handleExport('增删改查组件'),
      },
    ],
    itemButton: [
      {
        text: '编辑',
        onClick: self.handleEdit,
        // code 如果后端接口没有返回 则不显示
        code: 'class-editButton',
        // code: '错误的code',
      },
      {
        text: '删除',
        buttonType: 'delete',
        code: 'class-deleteButton',
        onClick: (item: any) => {
          self.handleDelete({ id: 1, idDel: 1 }, '/deleteActivityList');
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
    selectedRowKeys: self.selectedRowKeys,
    selectedRows: self.selectedRows,
    expandable: {
      expandedRowKeys: self.expandedRowKeys,
      expandedRowRender: (record) => (
        <p style={{ margin: 0 }}>{record.activityCode}</p>
      ),
      rowExpandable: (record) => record.name !== 'Not Expandable',
      onExpand: self.handleExpand,
    },
    onSelect: self.handleSelect,
    dataPath: 'data.list',
    totalPath: 'data.total',
    draggable: true,
    resizable: true,
    isSummary: true,
    // editable: true
  };

  return (
    <Page>
      <CommonSearch
        formList={searches}
        handleSearch={self.setSearchParams}
        ref={self.searchRef}
        columnNumber={3}
      />
      <CommonTable {...tableParams} ref={self.tableRef} />
      <CustomForm
        title="营销活动"
        // isShowTitlePrefix={false}
        // isTable={true}
        className={styles.customForm}
        modalType={ModalType.modal}
        modalConf={{ width: 1200 }}
        defaultLayout={{ labelCol: { span: 5 }, wrapperCol: { span: 19 } }}
        ref={self.formRef}
        formList={getFormList(self)}
        formatValues={handleFormatValues}
        onSubmit={{
          action: saveActivity,
          callback: self.handleRefreshPage,
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
          await form?.validateFields();
          return Promise.resolve({});
        }}
        handleFieldsChange={(changedFields, allFields, form) => {
          // console.log(changedFields, allFields, form);
        }}
        otherRender={otherRender}
      />
    </Page>
  );
};

const Activity = connect(
  ({ global, login }: ConnectState) => ({
    token: login.token,
  }),
  null,
  null,
  { forwardRef: true },
)(forwardRef(IndexPage));

const App = () => {
  const Ref = useRef<React.ElementRef<typeof Activity>>(null!);
  useEffect(() => {
    console.log(Ref);
  }, []);
  return <Activity ref={Ref} />;
};

export default App;
