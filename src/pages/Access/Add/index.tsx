import { AccessBtn } from '@/components';
import { Page } from '@/components/CommonCard';
import { Button } from 'antd';

const Add: React.FC = () => {
  return (
    <Page>
      <AccessBtn
        btnList={[
          {
            type: 'primary',
            text: '新增',
            // code: 'add',
          },
        ]}
      />
    </Page>
  );
};

export default Add;
