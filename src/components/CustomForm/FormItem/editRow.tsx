import CommonTable from '@/components/CommonTableV5/CommonTableV5';
import { getFieldComp } from '@/core/helpers';
import { ICommonTable } from '@/typings';
import { IBaseCol, IBaseFormControlType, IBaseLayout } from '@/typings/base';
import { EditTableProps } from '@/typings/index';
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, FormItemProps, Row, Table } from 'antd';
import type {
  FormListFieldData,
  FormListOperation,
} from 'antd/es/form/FormList';
import { FormInstance } from 'antd/lib/form/Form';
import React, { Fragment, useImperativeHandle, useState } from 'react';
import styles from './index.less';

interface IEditTableProps {
  form: FormInstance;
  layout: IBaseLayout;
  col: IBaseCol;
  label: string;
  name: string;
  record: any;
  rules: FormItemProps['rules'] | any;
  type: IBaseFormControlType;
  value: any;
  tableProps: EditTableProps;
  handleAddCallback?: (record: any) => void;
  [props: string]: any;
}

type IHandle = {
  ref: any;
};

const EditRow: React.ForwardRefRenderFunction<
  IHandle,
  IEditTableProps
> = (props, ref: any) => {
  const [data, setData] = useState<any[]>([
    {
      key: 0,
      index: 0,
      editCode: '1',
      editName: '1',
      editType: '1',
      editValue: '1',
    }
  ]);
  const {
    form,
    col = 24,
    name = 'EditRow',
    tableProps,
    handleAddCallback,
    ...restProps
  } = props;
  const { columns = [], formListProps, ...otherTableProps } = tableProps;
  const rules = formListProps?.rules || [
    {
      validator: async (_: any, list: any) => {
        if (!list || list.length < 1) {
          return Promise.reject(new Error('至少添加一条数据'));
        }
      },
    },
  ];

  console.log(columns, data)

  useImperativeHandle(ref, () => ({}));

  const renderColumns = (columns: any[]) => {
    return columns
  }

  //#region
  type IGetTableParams = ({
    remove,
  }: {
    remove: FormListOperation['remove'];
  }) => ICommonTable<any>;

  const tableParams: IGetTableParams = ({ remove }) => ({
    editable: true,
    showIndex: true,
    selectType: false,
    pagination: false,
    columns,
    dataSource: data,
    formatColumn: renderColumns,
    extraParams: {

    },
    itemButton: [
      // {
      //   text: '删除',
      //   type: 'primary',
      //   buttonType: 'delete',
      //   onClick: (field: FormListFieldData) => remove(field.name),
      //   visible: () => {
      //     const tableFormValues = form.getFieldValue(name);
      //     if (!tableFormValues) return false;
      //     return tableFormValues.length > 1;
      //   },
      // },
    ],
    ...otherTableProps,
  });
  //#endregion

  return (
    <Row className={styles['edit-table']}>
      <Col span={col}>
        <CommonTable
          {...tableParams}
        />
      </Col>
    </Row>
  );
};

export default React.memo(React.forwardRef(EditRow));
