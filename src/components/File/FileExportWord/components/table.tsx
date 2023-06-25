import { Table } from 'antd';
import { forwardRef, useImperativeHandle } from 'react';
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
const dataTable = [
  {
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    name: '胡彦',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    name: '胡',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    name: 'sss',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    name: '===',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    name: 'vvv',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    name: 'cc',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    name: 'ddd',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    name: 'fff',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    name: 'eee',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    name: 'ggg',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    name: 'aaa',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    name: 'kkk',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    name: 'lll',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const TableComponent = (props: any, table: any) => {
  useImperativeHandle(table, () => ({
    dataTable: () => {
      return dataTable;
    },
  }));

  return (
    <Table ref={table} pagination={false} columns={columns} dataSource={dataTable} scroll={{ y: 500 }} bordered rowKey={(record) => record.name} />
  );
};

export default forwardRef(TableComponent);
