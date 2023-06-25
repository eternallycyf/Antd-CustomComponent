import { ConnectState } from '@/typings/connect';
import { connect, Dispatch, history, withRouter } from '@umijs/max';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import styles from './index.less';
import Loading from './Loading';

const Login = ({ dispatch }: { dispatch: Dispatch }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(true);

  const onFinish = (values: any) => {
    const { username, password } = values;
    if (username === 'admin' && password === 'admin') {
      setLoading(true);
      dispatch({ type: 'login/login', payload: {} });
      setTimeout(() => {
        history.push('/');
      }, 2000);
    }
  };

  return (
    <div>
      <div className={styles['site-pro-form-login-container']}>
        <section className="absolute left-20 top-20 isolate overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(30rem_30rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
          <div className="mx-auto max-w-1xl lg:max-w-2xl">
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>All the gloom is left to the past, from the beginning of meeting you, the winter is gone, the Star River is bright!</p>
              </blockquote>
              <figcaption className="mt-10">
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">Eternallycyf</div>
                  <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="text-gray-600">🎉 🎉 🎉</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <Form className={styles['site-form']} name="basic" initialValues={{ remember: remember }} onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            // initialValue="admin"
          >
            <Input placeholder="admin" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            // initialValue="admin"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="admin" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox checked={remember} onChange={(e) => setRemember(e.target.checked)}>
              Remember me
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        {loading && <Loading />}
      </div>
    </div>
  );
};

export default connect(({ login, global }: ConnectState) => ({
  token: login.token,
  userInfo: global.userInfo,
}))(withRouter<any>(Login));
