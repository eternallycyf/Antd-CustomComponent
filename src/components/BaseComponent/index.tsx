import React from 'react';
import { message, Modal } from 'antd';
import { deleteAction, postAction } from '@/services/global';

export interface IBaseState {
  loading?: any;
  searchParams?: any;
  selectedRowKeys?: any[];
  selectedRows?: any[];
  expandedRowKeys?: any[];
}

class BaseComponent<P, S extends IBaseState> extends React.PureComponent<P, S> {
  protected tableRef: React.RefObject<any> = React.createRef();
  protected searchRef: React.RefObject<any> = React.createRef();
  protected formRef: React.RefObject<any> = React.createRef();

  // 获取列表dataSource
  protected getDataSource = () => {
    const { getTableData } = this.tableRef.current || {};
    return getTableData?.();
  };

  handleRefreshPage = () => {
    const { handleRefreshPage } = this.tableRef.current || {};
    this.setState(
      {
        expandedRowKeys: [],
        selectedRowKeys: [],
        selectedRows: [],
      },
      handleRefreshPage,
    );
  };

  handleSearch = (values: any) => {
    const { handleFirstPage } = this.tableRef.current || {};
    this.setState({ searchParams: values }, async () => {
      await handleFirstPage();
      this.setState({
        expandedRowKeys: [],
      });
      this.handleSelect([], []);
    });
  };

  handleDynamicParam = (values: any) => {
    const { handleDynamicParam } = this.tableRef.current || {};
    handleDynamicParam(values);
  };

  handleSelect = (
    selectedRowKeys: IBaseState['selectedRowKeys'],
    selectedRows: IBaseState['selectedRows'],
  ) => {
    this.setState({ selectedRowKeys, selectedRows });
  };

  handleAdd = (defaultProps: any) => {
    const { handleAdd } = this.tableRef.current || {};
    if (handleAdd) handleAdd(defaultProps);
  };

  handleEdit = (record: any) => {
    const { handleEdit } = this.tableRef.current || {};
    if (handleEdit) handleEdit(record);
  };

  handleDelete = async (params: any, deleteUrl: string) => {
    const { handleRefreshPage } = this.tableRef.current || {};
    if (!deleteUrl) {
      return message.error('请设置 deleteUrl 属性');
    }
    this.setState({ loading: true });
    const res = await postAction(deleteUrl, params);
    this.setState({ loading: false });

    if (res.code == 200) {
      message.success(res.msg);
      if (handleRefreshPage) handleRefreshPage();
    } else {
      message.error(res.msg);
    }
  };
}

export default BaseComponent;
