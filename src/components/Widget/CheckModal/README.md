```tsx
import React from 'react';
import { Button, Form } from 'antd';
import CheckModal from './CheckModal';

const App: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Received values from form: ', values);
  };

  return (
    <div style={{ width: 500 }}>
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="modal"
          label="账户权限"
          rules={[{ validator: (cruVal: any, allVal: any) => Promise.resolve() }]}
          initialValue={{
            账号: [{ label: 'x', value: 'x' }],
            姓名: [{ label: '张三', value: '3' }],
          }}
          style={{ marginBottom: 0 }}
        >
          <CheckModal
            form={form}
            name="modal"
            onOk={(val) => console.log(val)}
            options={{
              账号: [
                { label: 'x', value: 'x' },
                { label: 'xx', value: 'xx' },
                { label: 'xxx', value: 'xxx' },
              ],
              姓名: [
                { label: '张三', value: '3' },
                { label: '李四', value: '4' },
                { label: '王五', value: '5' },
                { label: 'x', value: 'x' },
                { label: 'xx', value: 'xx' },
                { label: 'xxx', value: 'xxx' },
                { label: 'xxxx', value: '7' },
                { label: 'xxxxx', value: '8' },
                { label: 'xxxxxx', value: '9' },
                { label: 'xxxxxx', value: '10' },
              ],
            }}
          />
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