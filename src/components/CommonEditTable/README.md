## 实时保存见/home/editTable

## 多行

```tsx
import { AccessBtn, CommonEditTable } from '@/components';
import { IEditTableColumnsType, IEditTableHandle, IEditTableProps } from '@/typings';
import { PlusCircleOutlined, VerticalAlignBottomOutlined, WarningOutlined } from '@ant-design/icons';
import { Button, Card, Form, message } from 'antd';
import dayjs from 'dayjs';
import React from 'react';

export const columns: IEditTableColumnsType<IRecord, IColumnsExtraRecord>[] = [
  {
    dataIndex: 'userName',
    title: '姓名',
    type: 'input',
    align: 'center',
    ellipsis: true,
    width: 100,
    tooltip: 'sss',
    editable: true,
    formItemProps: {
      rules: [{ required: true, message: '请输入姓名' }],
      itemProps: {},
    },
  },
  {
    dataIndex: 'time',
    title: '时间',
    type: 'date',
    align: 'center',
    formatTime: true,
    width: 100,
    formItemProps: {},
    editable: true,
  },
  {
    dataIndex: 'age',
    title: '数额',
    type: 'inputNumber',
    align: 'center',
    formatNumber: true,
    width: 100,
    formItemProps: {},
    editable: true,
  },
];

export interface IRecord {
  userName: string;
  time?: dayjs.Dayjs;
  age?: number;
  key: string;
}

export interface IFormValues {
  EditTable?: IRecord[];
}

export interface IColumnsExtraRecord {}

const Demo = () => {
  const [form] = Form.useForm<IFormValues>();
  const [editableKeys, setEditableKeys] = React.useState<string[]>([]);
  const [currentEditValue, setCurrentEditValue] = React.useState<any[]>([]);
  const EditTableRef = React.useRef<IEditTableHandle<IRecord, IFormValues>>(null!);

  const handleOnSubmit = async () => {
    const values = form.getFieldsValue();
    if (editableKeys.length > 0) {
      return message.warning('请先保存编辑项');
    }
    await form.validateFields();
    console.log(values);
  };

  return (
    <Card>
      <Form form={form}>
        <CommonEditTable<IRecord, IColumnsExtraRecord, IFormValues>
          form={form}
          ref={EditTableRef}
          isMultiple={false}
          editableKeys={editableKeys}
          // isVirtual
          initialValues={Array.from({ length: 3 }).map((_, index) => ({
            userName: '张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三',
            key: String(index),
            age: 21260,
          }))}
          columns={columns}
          buttonLeft={[]}
          buttonRight={[
            {
              buttonType: 'default',
              text: '添加到头部',
              onClick: (values, operation) => operation.add({ userName: '张三', key: String(Math.random()) }, 0),
              visible: (text, record, index, status) => status == 'edit',
            },
            {
              buttonType: 'default',
              text: '全部删除',
              disabled: status == 'view',
              onClick: () => form.setFieldsValue({ EditTable: [] }),
              icon: <WarningOutlined />,
              visible: (text, record, index, status) => status == 'edit',
            },
            {
              buttonType: 'default',
              text: '导出',
              visible: (text, record, index, status) => status == 'view',
              // visible: (text, record, index) => status == 'view',
              icon: <VerticalAlignBottomOutlined />,
              onClick: (values, operation) => EditTableRef.current.handleExport('导出', columns, form.getFieldValue('EditTable')),
            },
          ]}
          itemButton={[
            {
              buttonType: 'delete',
              text: '删除',
              deleteText: '确认删除嘛',
              onClick: (values, operation) => operation.remove(values.index),
              visible: (record, arr, index, status) => !editableKeys.includes(record.key),
            },
            {
              buttonType: 'link',
              text: '编辑',
              onClick: (values, operation) => {
                setCurrentEditValue([...currentEditValue, values.record]);
                setEditableKeys([...editableKeys, values.record.key]);
              },
              visible: (record, arr, index, status) => !editableKeys.includes(record.key),
            },
            {
              buttonType: 'link',
              text: '保存',
              onClick: async (values, operation) => {
                await form.validateFields();
                setCurrentEditValue(currentEditValue.filter((item) => item.key !== values.record.key));
                setEditableKeys(editableKeys.filter((item) => item !== values.record.key));
              },
              visible: (record, arr, index, status) => editableKeys.includes(record.key),
            },
            {
              buttonType: 'link',
              text: '取消',
              onClick: (values, operation) => {
                const newValues = values.arr;
                newValues[values.index] = currentEditValue.find((item) => item.key === values.record.key);
                form.setFieldsValue({ EditTable: newValues });
                setCurrentEditValue(currentEditValue.filter((item) => item.key !== values.record.key));
                setEditableKeys(editableKeys.filter((item) => item !== values.record.key));
              },
              visible: (record, arr, index, status) => editableKeys.includes(record.key),
            },
          ]}
          afterChildren={(values) => {
            if (status == 'view') return null;
            return (
              <div style={{ display: 'grid', placeContent: 'center' }}>
                <Button
                  type="link"
                  icon={<PlusCircleOutlined />}
                  onClick={() => {
                    const key = String(Math.random());
                    values.operation.add({ userName: '张三', time: dayjs(), key });
                  }}
                >
                  添加
                </Button>
              </div>
            );
          }}
        />
        <Form.Item>
          <Button type="primary" onClick={handleOnSubmit}>
            提交
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Demo;
```

## FAQ

### 1.type == 'update'

```tsx
{
  dataIndex: 'userName',
  title: '姓名',
  hasRequiredMark: true,
  type: 'update',
  align: 'center',
  width: 240,
  formItemProps: {
    itemProps: {
      noStyle: true,
      style: { display: 'flex'},
      next: (values, form, index) => {
        return [
          {
            name: [index, 'userName'],
            width: 140,
            col: 12,
            type: 'input',
          }
        ]
      }
    }
  }
}
```

## 2. !isMultiple && type == 'update'

```tsx
{
  dataIndex: 'isEffect',
  title: '失效时间',
  hasRequiredMark: true,
  type: 'update',
  align: 'left',
  width: 240,
  transform: (val, currentValues, index, allValues) => {
    return currentValues?.isEffect
  },
  formItemProps:{
    itemProps:{
      shouldUpdate: ()=> true,
      noStyle: true,
      style: { display: 'flex'},
      next: (values, form, index) => {
        return [
          {
            name: [index, 'detail'],
            width: 140,
            col: 12,
            type: 'input',
          },
          {
            name: [index, 'isEffect'],
            type: 'checkbox',
            col: 12,
            dict: [{text:'永久生效',value:'1'}]
          }
        ]
      }
    }
  }
}
```

## 3.type == 'view';

```tsx
{
  dataIndex: 'deptName',
  title: '部门',
  type: 'xxx',
  align: 'center',
  ellipsis: true,
  editable: false,
  width: 100,
  // transform: (val, record, index) => xxx;
}
```
