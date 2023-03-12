import CommonTable from '@/components/CommonTableV5/CommonTableV5';
import { getFieldComp } from '@/core/helpers';
import { ICommonTable } from '@/typings';
import { IBaseCol, IBaseFormControlType, IBaseLayout } from '@/typings/base';
import { EditTableProps } from '@/typings/index';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Form, FormItemProps, Row } from 'antd';
import type { FormListFieldData, FormListOperation } from 'antd/es/form/FormList';
import { FormInstance } from 'antd/lib/form/Form';
import React, { Fragment, useEffect, useImperativeHandle, useState } from 'react';
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

const EditTableControl: React.ForwardRefRenderFunction<IHandle, IEditTableProps> = (props, ref: any) => {
  const [cacheData, setCacheData] = useState<any[]>([]);
  const { col = 24, name = 'EditCol', tableProps, handleAddCallback, ...restProps } = props;
  const { columns, formListProps, hasCancelButton = true, hasSaveButton = true, ...otherTableProps } = tableProps;
  const form = Form.useFormInstance();
  const rules = formListProps?.rules || [
    {
      validator: async (_: any, list: any) => {
        if (!list || list.length < 1) {
          return Promise.reject(new Error('至少添加一条数据'));
        }
      },
    },
  ];
  console.log(form);

  useImperativeHandle(ref, () => ({}));

  useEffect(() => {
    const data = form?.getFieldValue(name);
    setCacheData(data);
  }, []);

  const handleAdd: FormListOperation['add'] = (add) => {
    add();
    if (handleAddCallback) {
      handleAddCallback(form);
    }
  };

  const handleCancel = () => {
    form?.setFieldValue(name, cacheData);
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
              name: [field.name, name],
              key: field.key,
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

  const renderCancelButton = () => {
    if (form?.getFieldValue(name) && form?.getFieldValue(name)?.length != 0) {
      return (
        <Button onClick={() => handleCancel()} style={{ marginRight: 12 }}>
          取消
        </Button>
      );
    }
    return null;
  };

  //#region
  type IGetTableParams = ({ remove }: { remove: FormListOperation['remove'] }) => ICommonTable<any>;
  const getTableParams: IGetTableParams = ({ remove }) => ({
    rowKey: 'fieldKey',
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
        onClick: (field: FormListFieldData) => {
          // FIX: remove方法有问题 直接通过 form.setFieldValue 控制
          const tableFormValues = form?.getFieldValue(name);
          if (!tableFormValues) return;
          tableFormValues.splice(field.name, 1);
          form?.setFieldValue(name, tableFormValues);
        },
        visible: () => {
          const tableFormValues = form?.getFieldValue(name);
          if (!tableFormValues) return false;
          return tableFormValues.length > 1;
        },
      },
    ],
    ...otherTableProps,
  });
  //#endregion

  return (
    <Fragment>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          {hasCancelButton && renderCancelButton()}
          {hasSaveButton && (
            <Button htmlType="submit" type="primary">
              保存
            </Button>
          )}
        </Col>
      </Row>
      <Row className={styles['edit-table']}>
        <Col span={col}>
          <Form.List name={name} rules={rules} {...formListProps}>
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
                    <Button type="link" onClick={() => handleAdd(add)} block>
                      <div style={{ color: '#3363D7' }}>
                        <PlusCircleOutlined /> &nbsp;新增
                      </div>
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </Fragment>
              );
            }}
          </Form.List>
        </Col>
      </Row>
    </Fragment>
  );
};

export default React.memo(React.forwardRef(EditTableControl));
