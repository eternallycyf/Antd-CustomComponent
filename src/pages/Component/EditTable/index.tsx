import { AccessBtn, CommonEditTable } from '@/components';
import { IEditTableHandle, IEditTableProps } from '@/typings';
import { PlusCircleOutlined, VerticalAlignBottomOutlined, WarningOutlined } from '@ant-design/icons';
import { Button, Card, Form } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { columns } from './config/columns';
import { IColumnsExtraRecord, IFormValues, IRecord } from './config/interface';

const Demo = () => {
  const [form] = Form.useForm<IFormValues>();
  const EditTableRef = React.useRef<IEditTableHandle<IRecord, IFormValues>>(null!);
  const [status, setStatus] = React.useState<IEditTableProps['status']>('edit');

  const handleOnSubmit = () => {
    const values = EditTableRef.current.form.getFieldsValue();
    console.log(values);
  };

  return (
    <Card>
      <Form form={form}>
        <CommonEditTable<IRecord, IColumnsExtraRecord, IFormValues>
          form={form}
          status={status}
          ref={EditTableRef}
          // isVirtual
          initialValues={Array.from({ length: 3 }).map((_, index) => ({
            userName: '张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三',
            key: index,
            age: 21260,
          }))}
          columns={columns}
          buttonLeft={[]}
          buttonRight={[
            {
              buttonType: 'default',
              text: '添加到头部',
              onClick: (values, operation) => operation.add({ userName: '张三' }, 0),
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
            },
          ]}
          beforeChildren={(values) => {
            return (
              <AccessBtn
                btnList={[
                  {
                    buttonType: 'group',
                    text: '',
                    groupValue: status,
                    groupDict: [
                      { value: 'edit', name: '编辑视图' },
                      { value: 'view', name: '展示视图' },
                    ],
                    onChange: (value) => setStatus(value as 'edit' | 'view'),
                  },
                ]}
              />
            );
          }}
          afterChildren={(values) => {
            if (status == 'view') return null;
            return (
              <div style={{ display: 'grid', placeContent: 'center' }}>
                <Button
                  type="link"
                  icon={<PlusCircleOutlined />}
                  onClick={() => {
                    values.operation.add({ userName: '张三', time: dayjs() });
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
