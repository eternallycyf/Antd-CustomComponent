import CommonTable from '@/components/CommonTableV5/CommonTableV5';
import { getFieldComp } from '@/core/helpers';
import { ICommonTable } from '@/typings';
import { IBaseCol, IBaseFormControlType, IBaseLayout } from '@/typings/base';
import { EditTableProps } from '@/typings/index';
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, FormItemProps, Row } from 'antd';
import type {
  FormListFieldData,
  FormListOperation,
} from 'antd/es/form/FormList';
import { FormInstance } from 'antd/lib/form/Form';
import React, { Fragment, useImperativeHandle } from 'react';
import styles from './index.less';

// TODO: 1.提供时间区间不重复的参数 dateRange date 在 tableProps 中添加参数
// TODO: 2.添加 删除按钮样式自定义 在 tableProps 中添加参数

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

const EditTableControl: React.ForwardRefRenderFunction<
  IHandle,
  IEditTableProps
> = (props, ref: any) => {
  const {
    form,
    col = 24,
    name = 'tableForm',
    tableProps,
    handleAddCallback,
    ...restProps
  } = props;
  const { columns, formListProps, ...otherTableProps } = tableProps;
  const rules = formListProps?.rules || [
    {
      validator: async (_: any, list: any) => {
        if (!list || list.length < 1) {
          return Promise.reject(new Error('至少添加一条数据'));
        }
      },
    },
  ];

  useImperativeHandle(ref, () => ({}));

  const handleAdd: FormListOperation['add'] = (add) => {
    add();
    if (handleAddCallback) {
      handleAddCallback(form);
    }
  };

  const renderColumns = (columns: any[]) => {
    return columns.map((col: any, index: number) => {
      if (!col?.editable) {
        const dataIndex = col.dataIndex;
        if (dataIndex == 'index') {
          return {
            ...col,
            render: (_: any, __: any, index: number) => index + 1,
          };
        }
        return col;
      }

      return {
        ...col,
        render: (text: any, field: any) => {
          const {
            controlProps,
            name,
            type,
            formFieldProps = {},
            itemProps = {},
            ...restFieldProps
          } = col.formItemProps;

          const defaultControlProps = controlProps ? controlProps : {};

          const myControlProps = {
            allowClear: true,
            ...defaultControlProps,
            size: (controlProps && controlProps?.size) || 'small',
          };

          if (type && type == 'select') {
            myControlProps.labelInValue = true;
          }

          const fieldProps = {
            form,
            name: [field.name, name],
            type,
            formFieldProps: {
              key: [field.key, name],
              fieldKey: [field.key, name],
              ...formFieldProps,
            },
            controlProps: myControlProps,
            itemProps,
            ...restFieldProps,
          };

          if (type == 'operate' || type == 'index') {
            return text;
          }
          return getFieldComp(fieldProps);
        },
        onCell: (record: any) => ({
          record,
          editable: String(col.editable),
          dataindex: col.dataIndex,
          title: col.title,
          columnsindex: index,
        }),
      };
    });
  };

  //#region
  type IGetTableParams = ({
    remove,
  }: {
    remove: FormListOperation['remove'];
  }) => ICommonTable<any>;
  const getTableParams: IGetTableParams = ({ remove }) => ({
    editable: true,
    showIndex: true,
    selectType: false,
    pagination: false,
    columns,
    formatColumn: renderColumns,
    extraParams: {
      form,
      formListProps: props,
    },
    itemButton: [
      {
        text: '删除',
        type: 'primary',
        buttonType: 'delete',
        onClick: (field: FormListFieldData) => remove(field.name),
        visible: () => {
          const tableFormValues = form.getFieldValue(name);
          if (!tableFormValues) return false;
          return tableFormValues.length > 1;
        },
      },
    ],
    ...otherTableProps,
  });
  //#endregion

  return (
    <Row className={styles['edit-table']}>
      <Col span={col}>
        <Form.List
          name={name}
          rules={rules}
          initialValue={[{}]}
          {...formListProps}
        >
          {(fields, { add, remove }: FormListOperation, { errors }) => {
            return (
              <Fragment>
                <CommonTable
                  dataSource={fields}
                  {...getTableParams({
                    remove,
                  })}
                />
                <Form.Item wrapperCol={{ span: 24 }} labelCol={{ span: 0 }} style={{ marginTop: 10 }}>
                  <Button type='link' onClick={() => handleAdd(add)} block >
                    <div style={{ color: '#3363D7' }}><PlusCircleOutlined /> &nbsp;新增</div>
                  </Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </Fragment>
            );
          }}
        </Form.List>
      </Col>
    </Row>
  );
};

export default React.memo(React.forwardRef(EditTableControl));
