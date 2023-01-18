import React, {
  Fragment,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Col, Form, FormItemProps, Popconfirm, Row } from 'antd';
import { Button } from 'antd';
import CommonTable from '@/components/CommonTableV5/CommonTableV5';
import { ICommonTable, IControlProps } from '@/typings';
import { getFieldComp } from '@/core/helpers';
import styles from './index.less';
import { FormInstance } from 'antd/lib/form/Form';
import { IBaseCol, IBaseFormControlType, IBaseLayout } from '@/typings/base';

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
  tableProps: any;
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
    ...restProps
  } = props;
  const { getFieldValue } = form;
  const { rowKey, columns, operateList, ...otherTableProps } = tableProps;

  useImperativeHandle(ref, () => ({}));

  useEffect(() => {}, []);

  console.log(props);

  const handleDelete = ({ index }: { index: React.Key }) => {};

  const handleAdd = () => {
    // if (editingKey) return message.error('必须先保存当前编辑项');
    // const newData: IDataType = {
    //   key: ~~key + 1 + '',
    //   section: null,
    // };
    // form.resetFields();
    // setData([newData, ...data]);
    // setKey(key + 1);
    // setEditingKey(newData.key);
  };

  const handleSave = (record: any) => {
    const { index } = record;
    let values = form.getFieldsValue();
    const keys = columns.map((item: any) => item.dataIndex);
    const keysValueObj = keys.reduce((pre: any, cur: any) => {
      pre[cur] = values[cur];
      return pre;
    }, {});

    values.tableForm[index] = {
      ...values.tableForm[index],
    };
    console.log(record, keysValueObj);
  };

  const renderColumns = (columns: any[]) => {
    return columns.map((col: any, index: number) => {
      if (!col?.editable) {
        console.log(col);
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
        render: (text: any, field: any, index: number) => {
          const {
            controlProps,
            name,
            type,
            formFieldProps = {},
            itemProps = {},
            ...restFieldProps
          } = col.formItemProps;

          console.log(restFieldProps);

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
            formFieldProps,
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
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          columnsIndex: index,
        }),
      };
    });
  };

  const tableParams: ICommonTable<any> = {
    editable: true,
    showIndex: true,
    selectType: false,
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
        onClick: handleDelete,
      },
      {
        text: '保存',
        type: 'primary',
        onClick: handleSave,
      },
      {
        text: '取消',
        type: 'primary',
        onClick: () => {},
      },
    ],
    ...otherTableProps,
  };

  return (
    <Row>
      <Col span={col}>
        <Form.Item>
          <Form.List name="tableForm">
            {(fields, { add, remove }, { errors }) => {
              return (
                <Fragment>
                  <CommonTable dataSource={fields} {...tableParams} />
                  <Form.Item>
                    <Button
                      type="primary"
                      onClick={() => {
                        add();
                      }}
                    >
                      新增
                    </Button>
                  </Form.Item>
                </Fragment>
              );
            }}
          </Form.List>
        </Form.Item>
      </Col>
    </Row>
  );
};

export default React.forwardRef(EditTableControl);
