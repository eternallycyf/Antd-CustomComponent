import { deleteAction, postAction } from '@/services/global';
import { message, Modal } from 'antd';
import React from 'react';
import CommonSearch from '../CommonSearch';
import BaseTable from '../CommonTableV5/components/BaseTable';
import CustomForm from '../CustomForm';
import { downloadExcel } from '../File/FileExportExcel';

export interface IBaseState {
  loading?: boolean;
  searchParams?: any;
  selectedRowKeys?: React.Key[];
  selectedRows?: any[];
  expandedRowKeys?: any[];
  expandedKey?: string;
  exportLoading?: boolean;
  hasBtn?: boolean;
  onSelect?: (selectedRowKeys: React.Key[], selectedRows: any[]) => void;
}

export interface IBaseTableRefFun {
  cls: any;
  componentWilMount: any;
  getOpenWidth: any;
  handleColumns: any;
  renderSummary: any;
  handleSetDefaultChecked: any;
  renderOperateTitle: any;
  getOnRow: (restProps: any[]) => any;
  handleScroll: () => void;
  handleTopButton: Function;
  componentDidMount: Function;
  setTableBody: Function;
}

type IBaseTableInstance = InstanceType<typeof BaseTable> & IBaseTableRefFun;

class BaseComponent<P, S extends IBaseState> extends React.PureComponent<P, S> {
  public tableRef = React.createRef<IBaseTableInstance>();
  public searchRef = React.createRef<React.ElementRef<typeof CommonSearch>>();
  public formRef = React.createRef<React.ElementRef<typeof CustomForm>>();
  public scrollRef = React.createRef<HTMLDivElement>();

  setTableBody = () => {
    const { setTableBody } = this.tableRef.current || {};
    if (setTableBody) setTableBody();
  };

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

  handleScroll = () => {
    if (this.scrollRef.current) {
      this.scrollRef.current.dispatchEvent(new CustomEvent('scroll'));
    }
  };

  handleSearch = (values: any) => {
    const { handleFirstPage } = this.tableRef.current || {};
    this.setState({ searchParams: values, expandedRowKeys: [], selectedRowKeys: [], selectedRows: [] }, handleFirstPage);
    if (this.scrollRef.current) {
      this.scrollRef.current.scrollLeft = 0;
      this.scrollRef.current.scrollTop = 0;
    }
  };

  handleDynamicParam = (values: any) => {
    const { handleDynamicParam } = this.tableRef.current || {};
    handleDynamicParam!(values);
  };

  handleExport = (title: string) => {
    if (this.tableRef.current) {
      const { columns } = this.tableRef.current.props;
      this.setState({ exportLoading: true });
      const getItem = (item: any) => (columns || [])?.find((ele) => ele?.dataIndex === item?.dataIndex);

      downloadExcel({
        filename: title,
        sheets: [
          {
            sheetName: title,
            columns: this.tableRef.current.state.columns
              .filter((item: any) => item.dataIndex !== 'operate' && item.key !== 'operate')
              .map((item) => ({
                ...item,
                title: typeof item.title === 'string' ? item.title : getItem(item)?.title ?? item?.dataIndex,
              })),
            dataSource: this.tableRef.current?.getTableData(),
            header: title,
          },
        ],
      });
      setTimeout(() => {
        this.setState({ exportLoading: false });
      }, 2000);
    }
  };

  handleSelect = (selectedRowKeys: IBaseState['selectedRowKeys'], selectedRows: IBaseState['selectedRows']) => {
    this.setState({ selectedRowKeys, selectedRows });
  };

  handleExpand = (expanded: boolean, record: any) => {
    const { expandedKey } = this.state;
    if (!expanded) return this.setState({ expandedRowKeys: [] });
    this.setState({ expandedRowKeys: [record?.[expandedKey]] });
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

  // 清空选择
  handleClearSelected = () => {
    const onSelect = this.handleSelect;
    this.setState({ selectedRowKeys: [], selectedRows: [] });
    if (onSelect) onSelect([], []);
  };

  handleBatchDelete = (deleteBatchUrl: string) => {
    const { selectedRowKeys } = this.state;
    const { handleClearSelected } = this;
    const { handleRefreshPage } = this.tableRef.current || {};

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
