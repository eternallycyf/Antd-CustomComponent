import { Button, Card } from "antd";
import { PageContainer } from "@ant-design/pro-layout";
const Add: React.FC = () => {
  return (
    <PageContainer>
      <Card style={{ margin: 24 }}>
        <Button>添加权限</Button>
      </Card>
    </PageContainer>
  );
};

export default Add;
