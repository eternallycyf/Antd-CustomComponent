import { withRoutePage } from '@/core/Enhance/withRoutePage';
import { withRouter } from '@umijs/max';
import { RouteComponentProps } from '@umijs/renderer-react';
import { Button, Result } from 'antd';

interface IProps extends RouteComponentProps<any> {}

const ErrorPage = (props: IProps) => {
  const handleToIndexPage = () => {
    props.history!.push('/');
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={handleToIndexPage}>
          Back Home
        </Button>
      }
    />
  );
};

export default withRoutePage<IProps>(withRouter(ErrorPage));
