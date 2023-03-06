import { FC } from 'react';
import { Layout, Row, Col, Input } from 'antd';
import RightContent from './RightContent';
import styles from './index.less';
const { Header } = Layout;
interface IProps {
  children: React.ReactNode;
}
const GlobalHeader: FC<IProps> = (props) => {
  const { children } = props;
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
            <Col span={16}>
              <div>{children}</div>
            </Col>
            <Col span={3}>
              <Input
                type="search"
                placeholder="搜索...."
                style={{ width: '90%' }}
              />
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
