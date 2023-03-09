import CommonSearch from '@/components/CommonSearch';
import BaseTable from '@/components/CommonTableV5/components/BaseTable';
import CustomForm from '@/components/CustomForm';
import { downloadExcel } from '@/components/FileExportExcel';
import { deleteAction, postAction } from '@/services/global';
import { message, Modal, TableProps } from 'antd';
import { TableRowSelection } from 'antd/lib/table/interface';
import React, { useEffect, useRef, useState } from 'react';

type IBaseTableInstance = InstanceType<typeof BaseTable> & {
  cls: any;
  componentWilMount: any;
  getOpenWidth: any;
  handleColumns: any;
  renderSummary: any;
};

interface IProps {
  searchParams?: any;
  expandedKey?: string;
  selectedRows?: any[];
  selectedRowKeys?: any[];
  expandedRowKeys?: any[];
}

const useBaseComponent = (props: IProps) => {
  const tableRef = useRef<IBaseTableInstance>(null!);
  const searchRef = useRef<React.ElementRef<typeof CommonSearch>>(null!);
  const formRef = useRef<React.ElementRef<typeof CustomForm>>(null!);

  const {
    searchParams: propsSearchParams,
    expandedKey: propsExpandedKey = '',
    selectedRows: propsSelectedRows = [],
    selectedRowKeys: propsSelectedRowKeys = [],
    expandedRowKeys: propsExpandedRowKeys = [],
  } = props;

  const [loading, setLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useState<any>(
    propsSearchParams ?? {},
  );
  const [selectedRows, setSelectedRows] = useState<any[]>(propsSelectedRows);
  const [selectedRowKeys, setSelectedRowKeys] =
    useState<any[]>(propsSelectedRowKeys);
  const [expandedRowKeys, setExpandedRowKeys] =
    useState<any[]>(propsExpandedRowKeys);
  const [expandedKey, setExpandedKey] = useState<string>(
    propsExpandedKey ?? '',
  );

  useEffect(() => {
    tableRef.current?.handleRefreshPage();
  }, [searchParams]);

  // 获取列表dataSource
  const getDataSource = () => {
    const { getTableData } = tableRef.current || {};
    return getTableData?.();
  };

  const handleRefreshPage = () => {
    const { handleRefreshPage } = tableRef.current || {};
    setSelectedRows([]);
    setSelectedRowKeys([]);
    setExpandedRowKeys([]);
    handleRefreshPage();
  };

  const handleSearch = async (values: any) => {
    const { handleFirstPage } = tableRef.current || {};
    setSearchParams(values);
    await handleFirstPage!();
    setExpandedRowKeys([]);
    handleSelect([], []);
  };

  const handleDynamicParam = (values: any) => {
    const { handleDynamicParam } = tableRef.current || {};
    handleDynamicParam!(values);
  };

  const handleExport = (title: string) => {
    if (tableRef.current) {
      downloadExcel({
        filename: title,
        sheets: [
          {
            sheetName: title,
            columns: tableRef.current.state.columns.filter(
              (item: any) => item.dataIndex !== 'operate',
            ),
            dataSource: tableRef.current?.getTableData(),
            header: title,
          },
        ],
      });
    }
  };

  const handleSelect = (selectedRowKeys: any[], selectedRows: any[]) => {
    setSelectedRowKeys(selectedRowKeys);
    setSelectedRows(selectedRows);
  };

  const handleExpand = (expanded: boolean, record: any) => {
    if (!expanded) return setExpandedRowKeys([]);
    setExpandedRowKeys([record?.[expandedKey]]);
  };

  const handleAdd = (defaultProps: any) => {
    const { handleAdd } = formRef.current || {};
    if (handleAdd) handleAdd(defaultProps);
  };

  const handleEdit = (record: any) => {
    const { handleEdit } = formRef.current || {};
    if (handleEdit) handleEdit(record);
  };

  const handleDelete = async (params: any, deleteUrl: string) => {
    const { handleRefreshPage } = tableRef.current || {};
    if (!deleteUrl) {
      return message.error('请设置 deleteUrl 属性');
    }
    setLoading(true);
    const res = await postAction(deleteUrl, params);
    setLoading(false);

    if (res.code === 200) {
      message.success(res.msg);
      if (handleRefreshPage) handleRefreshPage();
    } else {
      message.error(res.msg);
    }
  };

  const handleBatchDelete = (deleteBatchUrl: string) => {
    const { handleRefreshPage, handleClearSelected } = tableRef.current || {};

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
          setLoading(true);
          const res = await deleteAction(deleteBatchUrl, { ids });
          setLoading(false);

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

  return {
    tableRef,
    searchRef,
    formRef,
    loading,
    setLoading,
    searchParams,
    setSearchParams,
    selectedRows,
    setSelectedRows,
    selectedRowKeys,
    setSelectedRowKeys,
    expandedRowKeys,
    setExpandedRowKeys,
    expandedKey,
    setExpandedKey,
    getDataSource,
    handleRefreshPage,
    handleSearch,
    handleSelect,
    handleDynamicParam,
    handleExport,
    handleExpand,
    handleAdd,
    handleEdit,
    handleDelete,
    handleBatchDelete,
  };
};

export default useBaseComponent;
