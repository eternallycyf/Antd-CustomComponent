import React from 'react';
import { message, Modal } from 'antd';
import { deleteAction, postAction } from '@/services/global';
import CommonSearch from '../CommonSearch';
import { TableRowSelection } from 'antd/lib/table/interface';

export interface IBaseState {
  loading?: boolean;
  searchParams?: any;
  selectedRowKeys?: React.Key[];
  selectedRows?: any[];
  expandedRowKeys?: any[];
}

class BaseComponent<P, S extends IBaseState> extends React.PureComponent<P, S> {
  protected tableRef = React.createRef<any>();
  protected searchRef =
    React.createRef<React.ElementRef<typeof CommonSearch>>();
  protected formRef: React.RefObject<any> = React.createRef();

  componentDidMount() {
    this.handleRefreshPage();
  }

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
    const { handleAdd } = this.formRef.current || {};
    if (handleAdd) handleAdd(defaultProps);
  };

  handleEdit = (record: any) => {
    const { handleEdit } = this.formRef.current || {};
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

    if (res.code === 200) {
      message.success(res.msg);
      if (handleRefreshPage) handleRefreshPage();
    } else {
      message.error(res.msg);
    }
  };

  handleBatchDelete = (deleteBatchUrl: string) => {
    const { selectedRowKeys } = this.state;
    const { handleRefreshPage, handleClearSelected } =
      this.tableRef.current || {};

    if (!deleteBatchUrl) {
      return message.error('请设置 deleteBatchUrl 属性');
    }
    if (selectedRowKeys && selectedRowKeys.length <= 0) {
      return message.error('请选择一条记录');
    }

    if (selectedRowKeys) {
      const ids = selectedRowKeys.join(',');
      Modal.confirm({
        title: '确认删除',
        content: '确认删除选中的记录吗？',
        onOk: async () => {
          this.setState({ loading: true });
          const res = await deleteAction(deleteBatchUrl, { ids });
          this.setState({ loading: false });

          if (res.code === 200) {
            message.success(res.msg);
            if (handleRefreshPage) handleRefreshPage();
            if (handleClearSelected) handleClearSelected();
          } else {
            message.error(res.msg);
          }
        },
      });
    }
  };
}

export default BaseComponent;
