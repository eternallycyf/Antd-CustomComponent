import CommonTable from '@/components/CommonTableV5/CommonTableV5';
import { ICommonTable } from '@/typings';
import { IBaseCol, IBaseFormControlType, IBaseLayout } from '@/typings/base';
import { EditTableProps } from '@/typings/index';
import { getUUID } from "@/utils/random";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, FormItemProps, message, Row } from 'antd';
import type {
  FormListFieldData
} from 'antd/es/form/FormList';
import { FormInstance } from 'antd/lib/form/Form';
import dayjs from 'dayjs';
import { add } from "lodash";
import React, { useCallback, useEffect, useImperativeHandle, useState } from 'react';
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

export const EditableContext = React.createContext<ICommonTable<any>>({});

const EditRow: React.ForwardRefRenderFunction<
  IHandle,
  IEditTableProps
> = (props, ref: any) => {
  //#region
  const [data, setData] = useState<any[]>([]);
  const [editingKey, setEditingKey] = useState<string>('');
  const {
    form,
    col = 24,
    name = 'EditRow',
    value: initialValue = [],
    tableProps,
    handleAddCallback,
    ...restProps
  } = props;
  const {
    columns = [],
    formListProps,
    rowKey,
    handleFormatRowValues,
    getData,
    ...otherTableProps
  } = tableProps;
  const isEditing = (record: any) => record?.[rowKey as any] === editingKey;
  //#endregion

  useEffect(() => {
    if (initialValue && initialValue.length > 0) {
      const initData = initialValue.map((item: any, index: number) => ({
        ...item,
        index
      }))
      console.log(initData)
      setData(initData)
    }
  }, [])

  useImperativeHandle(ref, () => ({}));

  useEffect(() => {
    // TODO: 暴露给外部获取数据
    if (getData) {
      getData(data, editingKey, setData)
    }
  }, [])

  const _transformRowData = (type: IBaseFormControlType, text: any, transFormType: 'edit' | 'show' = 'show') => {
    // TODO: 兼容其他特殊表单类型
    // console.log(type, text)
    if (transFormType === 'edit') return text;
    if (!type) return text ?? '--';
    if (type.includes('select')) {
      return text;
    }
    if (type === ('date')) {
      return text ? dayjs(text).format('YYYY-MM-DD') : '--'
    }
    if (type === ('dateRange')) {
      const startTime = text?.[0];
      const endTime = text?.[1];
      return startTime && endTime ? `${dayjs(startTime).format('YYYY-MM-DD')} ~ ${dayjs(endTime).format('YYYY-MM-DD')}` : '--'
    }
    return text ?? '--';
  }

  const handleAdd = () => {
    const newData = [...data, { index: data.length, [rowKey as string]: Math.random() }];
    setData(newData);
  }

  const handleEdit = (record: any, index: number) => {
    // @ts-ignore
    const currentEditKey = record?.[rowKey];
    if (!currentEditKey) {
      message.error('当前行数据异常');
      return setEditingKey('');
    } else {
      const { index, ...restRecord } = record;
      Object.entries(restRecord).forEach(([key, value]) => {
        const type = columns.find((item) => item.dataIndex === key)?.formItemProps?.type;
        form.setFieldsValue({
          [key]: type ? _transformRowData(type, value, 'edit') : '--'
        });
      });
      setEditingKey(currentEditKey);
    }
  }

  const handleSave = () => {
    // TODO: 查找对应的data
    console.log(form.getFieldsValue())
  }

  const handleDelete = (record: any) => {
    // TODO: 查找对应的data
  }

  const handleCancel = () => {
    setEditingKey('');
  }

  const getHandleFormatRowValues = (col: any) => {
    if (handleFormatRowValues) return handleFormatRowValues;
    const formItemType: IBaseFormControlType = col?.formItemProps?.type;
    return (text: any, record: any) => {
      return _transformRowData(formItemType, text)
    }
  }

  const renderColumns = useCallback((columns: any[]) => {
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
        name,
        type,
        formFieldProps: {
          name,
          ...formFieldProps,
        },
        controlProps: myControlProps,
        itemProps,
        ...restFieldProps,
      };

      return {
        ...col,
        render: getHandleFormatRowValues(col),
        onCell: (record: any) => ({
          record,
          editable: String(col.editable),
          dataindex: col.dataIndex,
          title: col.title,
          columnsindex: index,
          type: col?.formItemProps?.type,
          fieldProps
        }),
      };
    });
  }, [editingKey])

  //#region
  const tableParams: ICommonTable<any> = {
    rowKey,
    editable: true,
    showIndex: true,
    selectType: false,
    pagination: false,
    columns,
    dataSource: data,
    formatColumn: renderColumns,
    extraParams: {
      editingKey,
    },
    itemButton: [
      {
        text: '删除',
        type: 'primary',
        buttonType: 'delete',
        onClick: handleDelete,
        // visible: () => {
        //   const tableFormValues = form.getFieldValue(name);
        //   if (!tableFormValues) return false;
        //   return tableFormValues.length > 1;
        // },
      },
      {
        text: '编辑',
        type: 'primary',
        onClick: handleEdit
      },
      {
        text: '保存',
        type: 'primary',
        onClick: handleSave
      },
      {
        text: '取消',
        type: 'primary',
        onClick: handleCancel
      }
    ],
    ...otherTableProps,
  }
  //#endregion

  return (
    <Row className={styles['edit-table']}>
      <Col span={col}>
        <EditableContext.Provider value={{ editingKey, rowKey }}>
          <CommonTable {...tableParams} />
        </EditableContext.Provider>
      </Col>
      <Form.Item wrapperCol={{ span: 24 }} labelCol={{ span: 0 }} style={{ marginTop: 10 }}>
        <Button type='link' onClick={handleAdd} block>
          <div style={{ color: '#3363D7' }}><PlusCircleOutlined /> &nbsp;新增</div>
        </Button>
      </Form.Item>
      {/* TODO: 做一个假的表单，用来存储table的值 */}
    </Row>
  );
};

export default React.memo(React.forwardRef(EditRow));


