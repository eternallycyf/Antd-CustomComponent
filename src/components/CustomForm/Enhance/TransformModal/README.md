```tsx
import React from 'react';
import { Button, Col, Divider, Form, Row, Table } from 'antd';
import { TransformModal } from '@/components/Widget';

const columns = [
  {
    title: '姓名',
    dataIndex: 'label',
  },
  {
    title: '账号',
    dataIndex: 'value',
  },
];

const App: React.FC = () => {
  const [form] = Form.useForm();
  const CheckModalRef = React.useRef<React.ElementRef<typeof TransformModal>>(null!);

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div style={{ width: 500 }}>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="assessPerson" label="考核人员" style={{ marginBottom: 0 }}>
          <TransformModal
            CheckModalRef={CheckModalRef}
            modalProps={{ title: '考核人员调整' }}
            title={['参与考核人员', '不参与考核人员']}
            options={[
              { label: '张春涛', value: '1', parent: '北京', parentId: 'beijing' },
              { label: '李四', value: '2', parent: '北京', parentId: 'beijing' },
              { label: '王五', value: '3', parent: '上海', parentId: 'shangehai' },
              { label: '赵六', value: '4', parent: '上海', parentId: 'shangehai' },
              { label: '网六', value: '5', parent: '深圳', parentId: 'shenzhen' },
              { label: '网七', value: '6', parent: '深圳', parentId: 'shenzhen' },
              { label: '7', value: '7', parent: '深圳', parentId: 'shenzhen' },
              { label: '8', value: '8', parent: '深圳', parentId: 'shenzhen' },
              { label: '9', value: '9', parent: '深圳', parentId: 'shenzhen' },
              { label: '10', value: '10', parent: '深圳', parentId: 'shenzhen' },
              { label: '11', value: '11', parent: '深圳', parentId: 'shenzhen' },
              { label: '12', value: '12', parent: '深圳', parentId: 'shenzhen' },
              { label: '13', value: '13', parent: '深圳', parentId: 'shenzhen' },
              { label: '14', value: '14', parent: '深圳', parentId: 'shenzhen' },
              { label: '15', value: '15', parent: '深圳', parentId: 'shenzhen' },
            ]}
          >
            {({ handleOpenModal, leftValues, rightValues }) => {
              return (
                <>
                  <Row justify="space-between">
                    <Col span={20}>
                      <Row justify="start" gutter={20}>
                        <Col>
                          <span>当前考核人数: &nbsp;{leftValues?.length || 0}</span>
                        </Col>
                        <Col>
                          <span>不参与人数: &nbsp;{rightValues?.length || 0}</span>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={4}>
                      <Button onClick={handleOpenModal} size="small" type="default">
                        考核人员调整
                      </Button>
                    </Col>
                  </Row>
                </>
              );
            }}
          </TransformModal>
        </Form.Item>
        <Form.Item noStyle dependencies={['assessPerson']}>
          {({ getFieldValue }) => {
            const assessPerson = getFieldValue('assessPerson');
            return (
              <Form.Item>
                <Table columns={columns} dataSource={assessPerson.value || []} />
              </Form.Item>
            );
          }}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
```
