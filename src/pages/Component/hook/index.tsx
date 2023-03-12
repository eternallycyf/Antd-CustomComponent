import { CommonSearch, CommonTable, CustomForm, Page } from '@/components';
import { formatValuesType } from '@/components/CustomForm';
import projectConfig from '@/config/projectConfig';
import useBaseComponent from '@/hook/useBaseComponent';
import { ICommonTable, ModalType } from '@/typings';
import { ConnectState } from '@/typings/connect';
import { formatParams } from '@/utils/util';
import { connect, Provider, withRouter } from '@umijs/max';
import { Col, Form, FormInstance, Input, Row } from 'antd';
import React, { forwardRef, useContext, useEffect, useImperativeHandle, useRef } from 'react';
import { saveActivity } from '../service';
import { getColumns } from './config/columns';
import { getFormList } from './config/form';
import { getSearches } from './config/search';
import styles from './index.less';
import { History } from 'history';
import { getFieldComp } from '@/core/helpers';
import { getOtherFormList } from './config/otherFormList';
import { withRoutePage } from '@/core/Enhance/withRoutePage';
const { apiPrefixMock } = projectConfig;
import { compose } from 'redux';
import _ from 'lodash';

interface IProps {}
type IHandle = { form: FormInstance };
type ThemeContextType = 'light' | 'dark';
const MyContext = React.createContext<ThemeContextType>('light');

const IndexPage: React.ForwardRefRenderFunction<IHandle, IProps> = (props, ref) => {
  const theme = useContext<ThemeContextType>(MyContext);
  console.log(theme);
  const [form] = Form.useForm();
  const OtherFormRef = Form.useForm()[0];
  const self = useBaseComponent({
    searchParams: {
      aaaaaa: 1,
    },
    selectedRows: [],
    selectedRowKeys: [],
    expandedKey: 'index',
    expandedRowKeys: [],
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

  const renderFormItem = (item: any, index?: number) => {
    const form = OtherFormRef;
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

  const tableParams: ICommonTable<any> = {
    columns: getColumns(self),
    searchParams: formatParams(self.searchParams),
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
        code: 'class-editButton',
      },
      {
        text: '删除',
        buttonType: 'delete',
        // code 权限校验如果后端接口没有返回 则不显示
        code: 'class-deleteButton',
        // code: '错误的code',
        onClick: () => {
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
      expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.index}</p>,
      rowExpandable: (record) => record.name !== 'Not Expandable',
      onExpand: self.handleExpand,
    },
    onSelect: self.handleSelect,
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
        formList={getSearches(self)}
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
        modalConf={{ width: 1000, forceRender: true }}
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
          console.table(self.formRef.current?.form.getFieldsValue());
          console.table(OtherFormRef?.getFieldsValue());
          // return Promise.reject 就阻止提交 用于额外的表单
          // return Promise.resolve({})
          await OtherFormRef?.validateFields();
          return Promise.resolve({});
        }}
        handleFieldsChange={(changedFields, allFields, form) => {
          // console.log(changedFields, allFields, form);
        }}
        otherRender={() => (
          <Form form={OtherFormRef}>
            <Form.Item label="以下都是使用getFieldComp方法构造的form"></Form.Item>
            <Form.Item
              label="otherFormItem"
              name="otherFormItem"
              rules={[{ required: true, message: '请输入otherFormItem' }]}
            >
              <Input />
            </Form.Item>
            <Row>
              {(getOtherFormList(self) || []).map((item: any, index) => (
                <Col span={item['span'] || 24} key={item.name}>
                  <Form.Item
                    labelAlign="right"
                    labelCol={item.layout.labelCol}
                    label={item.label}
                    name={item.name}
                    rules={item?.rules || []}
                    initialValue={item.initialValue}
                  >
                    {renderFormItem(item)}
                  </Form.Item>
                </Col>
              ))}
            </Row>
          </Form>
        )}
      />
    </Page>
  );
};

// IndexPage => forwardRef => connect => withRouter => withRoutePage
export default compose<IHandle>(
  withRoutePage,
  withRouter,
  connect(({ global, login }: ConnectState) => ({ token: login.token }), null, null, {
    forwardRef: true,
    pure: undefined,
  }),
  forwardRef,
)(IndexPage);
