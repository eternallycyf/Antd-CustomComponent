import { FC } from 'react';
import { Layout, Row, Col, Input, Switch } from 'antd';
import RightContent from './RightContent';
import styles from './index.less';
import FullScreen from '../FullScreen';
const { Header } = Layout;
interface IProps {
  ColorPicker: any;
  children: React.ReactNode;
  isDark: boolean;
  setIsDark: any;
}
const GlobalHeader: FC<IProps> = (props) => {
  const { children, ColorPicker, isDark, setIsDark } = props;
  return (
    <Header
      style={{ background: 'transparent', paddingInline: 0 }}
      className="core-base-tags-nav-index-tabs"
    >
      <Row style={{ width: '100%', height: '100%' }}>
        <Col span={24}>
          <Row justify="center" align="middle">
            <Col span={4}>
              <span className={styles['core-base-title']}>后台管理</span>
            </Col>
            <Col span={14}>
              <div>{children}</div>
            </Col>
            <Col span={2}>
              <Input
                type="search"
                placeholder="搜索...."
                style={{ width: '90%' }}
              />
            </Col>
            <Col span={1} style={{ display: 'grid', placeContent: 'center' }}>
              {ColorPicker}
            </Col>
            <Col>
              <Switch
                unCheckedChildren={
                  <svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    data-v-ea893728=""
                  >
                    <path
                      fill="currentColor"
                      d="M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
                    ></path>
                  </svg>
                }
                checkedChildren={
                  <svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    data-v-ea893728=""
                  >
                    <path
                      fill="currentColor"
                      d="M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"
                    ></path>
                  </svg>
                }
                checked={isDark}
                onChange={() => setIsDark(!isDark)}
              />
            </Col>
            <Col span={1}>
              <FullScreen />
            </Col>
            <Col span={1}>
              <RightContent />
            </Col>
          </Row>
          <Row></Row>
        </Col>
      </Row>
    </Header>
  );
};

export default GlobalHeader;
