import React, { useMemo, memo, forwardRef } from 'react';
import { Table } from 'antd';
const MemoTable = memo(
  (props: any) => {
    const { tableRef, ...restProps } = props;
    return <Table {...restProps} ref={tableRef} />;
  },
  (oldProps: any, props: any) => {
    if (props.dataSource !== oldProps.dataSource) return false; // 数据改变
    if (props.columns !== oldProps.columns) return false; // 行属性改变
    if (props.pagination?.current !== oldProps.pagination?.current) return false; // 当前页面改变
    if (props.rowSelection?.selectedRowKeys !== oldProps.rowSelection?.selectedRowKeys) return false; //行切换选中
    if (props.expandedRowKeys !== oldProps.expandedRowKeys) return false; // 行展开收起
    if (props.forceTableUpdate) return false; //强制Table组件更新，当行展开时处理

    if (props.loading !== oldProps.loading) return false;
    return true;
  },
);

export default Table;
