import CommonTable from '@/components/CommonTableV5/CommonTableV5';
import { ICommonTable } from '@/typings';
import { IBaseCol, IBaseFormControlType, IBaseLayout } from '@/typings/base';
import { EditTableProps } from '@/typings/index';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Form, FormItemProps, message, Row } from 'antd';
import { FormInstance } from 'antd/lib/form/Form';
import dayjs from 'dayjs';
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import styles from './index.less';

function addArrayIndex(arr: any[]) {
  return arr.map((item, index) => ({ ...item, index }));
}

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

const EditRow: React.ForwardRefRenderFunction<IHandle, IEditTableProps> = (
  props,
  ref: any,
) => {
  //#region
  const [editingKey, setEditingKey] = useState<string>('');
  const tableRef = React.useRef<any>(null!);
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
    ...otherTableProps
  } = tableProps;

  const typeList =
    columns?.map((item) => ({
      type: item.formItemProps?.type,
      dataIndex: item.dataIndex,
    })) || [];
  const dataIndexList = typeList.map((item) => item?.dataIndex) || [];
  //#endregion

  useEffect(() => {
    if (initialValue && initialValue.length > 0) {
      const initData = addArrayIndex(initialValue);
      form.setFieldsValue({ [name]: initData });
    }
  }, []);

  useImperativeHandle(ref, () => ({}));

  const _transformRowData = (
    type: IBaseFormControlType,
    text: any,
    transFormType: 'edit' | 'show' = 'show',
  ) => {
    // TODO: 兼容其他特殊表单类型
    // console.log(type, text)
    if (transFormType === 'edit') return text;
    if (!type) return text ?? '--';
    if (type.includes('select')) {
      return text;
    }
    if (type === 'date') {
      return text ? dayjs(text).format('YYYY-MM-DD') : '--';
    }
    if (type === 'dateRange') {
      const startTime = text?.[0];
      const endTime = text?.[1];
      return startTime && endTime
        ? `${dayjs(startTime).format('YYYY-MM-DD')} ~ ${dayjs(endTime).format(
            'YYYY-MM-DD',
          )}`
        : '--';
    }
    return text ?? '--';
  };

  const getHandleFormatRowValues = (col: any) => {
    if (handleFormatRowValues) return handleFormatRowValues;
    const formItemType: IBaseFormControlType = col?.formItemProps?.type;
    return (text: any, record: any) => {
      return _transformRowData(formItemType, text);
    };
  };

  const getData = useCallback(() => {
    const rowValues = form ? form.getFieldValue(name) : [];
    const lastRowValues = rowValues ? rowValues : {};
    if (!rowValues || rowValues.length === 0 || !columns) return [];

    const dataIndexList = typeList.map((item) => item.dataIndex);
    return rowValues?.map((item: any) => {
      if (!dataIndexList.includes(item.dataIndex)) return item;
      const type = typeList.find(
        (typeItem) => typeItem.dataIndex === item.dataIndex,
      )?.type as IBaseFormControlType;
      return {
        ...item,
        [item.dataIndex]: _transformRowData(type, item.value),
      };
    });
  }, [form, columns, editingKey]);

  const handleAdd = () => {
    let rowValues = form ? form.getFieldValue(name) : [];
    rowValues = rowValues ? rowValues : {};

    let obj: any = {};
    dataIndexList.forEach((item: any) => {
      obj[item] = undefined;
    });
    obj.index = getData().length;
    obj[rowKey as string] = Math.random();
    form.setFieldsValue({
      [name]: [...rowValues, obj],
    });
    tableRef.current.handleRefreshPage();
  };

  // TODO: 限制同时只能编辑一行
  const handleEdit = (record: any) => {
    // @ts-ignore
    const currentEditKey = record?.[rowKey];
    if (!currentEditKey) {
      message.error('当前行数据异常');
      setEditingKey('');
      return;
    } else {
      const { index, ...restRecord } = record;
      Object.entries(restRecord).forEach(([key, value]) => {
        const type = columns.find((item) => item.dataIndex === key)
          ?.formItemProps?.type;
        form.setFieldsValue({
          [key]: type ? _transformRowData(type, value, 'edit') : '--',
        });
      });
      setEditingKey(currentEditKey);
    }
    tableRef.current.handleRefreshPage();
  };

  const handleSave = (record: any) => {
    const currentEditKey = record?.[rowKey as string];
    let rowValues = form ? form.getFieldValue(name) : [];
    rowValues = rowValues ? rowValues : {};

    if (!currentEditKey) {
      message.error('当前行数据异常');
      setEditingKey('');
      return;
    }

    let newRecord = {};
    Object.entries(record).forEach(([key, value]) => {
      const type = columns.find((item) => item.dataIndex === key)?.formItemProps
        ?.type as IBaseFormControlType;
      if (dataIndexList.includes(key)) {
        const val = form.getFieldValue(key);
        newRecord = {
          ...newRecord,
          [key]: _transformRowData(type, val, 'edit'),
        };
      } else {
        newRecord = {
          ...newRecord,
          [key]: value,
        };
      }
      form.setFieldsValue({ [key]: undefined });
      tableRef.current.handleRefreshPage();
    });

    const formValues = rowValues.map((item: any) => {
      if (item[rowKey as string] === currentEditKey) {
        return { ...item, ...newRecord };
      }
      return item;
    });

    setEditingKey('');
    form.setFieldsValue({
      [name]: formValues,
    });
  };

  const handleDelete = (record: any) => {
    const rowValues = form ? form.getFieldValue(name) : [];
    const lastRowValues = rowValues ? rowValues : {};
    const newValues = rowValues.filter(
      (item: any) => item[rowKey as string] !== record[rowKey as string],
    );
    form.setFieldsValue({
      [name]: newValues,
    });
    tableRef.current.handleRefreshPage();
  };

  const handleCancel = () => setEditingKey('');

  const renderColumns = useCallback(
    (columns: any[]) => {
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
          isEditing: (record: any) => record[rowKey as string] === editingKey,
          onCell: (record: any) => ({
            record,
            editable: String(col.editable),
            dataindex: col.dataIndex,
            title: col.title,
            columnsindex: index,
            type: col?.formItemProps?.type,
            fieldProps,
          }),
        };
      });
    },
    [editingKey],
  );

  //#region
  const tableParams: ICommonTable<any> = {
    rowKey,
    editable: true,
    showIndex: true,
    selectType: false,
    pagination: false,
    columns,
    dataSource: getData(),
    formatColumn: renderColumns,
    extraParams: {
      editingKey,
    },
    // TODO: 根据editingKey判断是否显示按钮
    itemButton: [
      {
        text: '删除',
        type: 'primary',
        buttonType: 'delete',
        onClick: handleDelete,
      },
      {
        text: '编辑',
        type: 'primary',
        onClick: handleEdit,
      },
      {
        text: '保存',
        type: 'primary',
        onClick: handleSave,
      },
      {
        text: '取消',
        type: 'primary',
        onClick: handleCancel,
      },
    ],
    ...otherTableProps,
  };
  //#endregion

  return (
    <Row className={styles['edit-table']}>
      <Col span={col}>
        <EditableContext.Provider value={{ editingKey, rowKey }}>
          <CommonTable {...tableParams} ref={tableRef} />
        </EditableContext.Provider>
      </Col>
      <Form.Item
        wrapperCol={{ span: 24 }}
        labelCol={{ span: 0 }}
        style={{ marginTop: 10 }}
      >
        <Button type="link" onClick={handleAdd} block>
          <div style={{ color: '#3363D7' }}>
            <PlusCircleOutlined /> &nbsp;新增
          </div>
        </Button>
      </Form.Item>
    </Row>
  );
};

export default React.memo(React.forwardRef(EditRow));
