import { Button, Card } from "antd";
import { PageContainer } from "@ant-design/pro-layout";
import { history } from '@umijs/max';
import { Page } from "@/components";

const Home: React.FC = (props: any) => {
  const toAddPage = () => history.push("/access/add");
  return (
    <Page >
      <Button onClick={() => toAddPage()}>配置</Button>
    </Page>
  );
};

export default Home;
