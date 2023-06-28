```tsx
import { Page } from '@/components/CommonCard';
import { CommonDescriptions } from '@/components';

const IndexPage = () => {
  return (
    <Page>
      <CommonDescriptions<{ activityDesc: number }>
        title="xx"
        extra={[
          {
            text: 'xxx',
            buttonType: 'default',
          },
        ]}
        tooltip="xxxxx"
        columns={[
          {
            label: '姓名',
            type: 'formItem',
            key: 'activityDesc',
            tooltip: '123',
            // isPhone: true,
            // formatTime: {
            //   format: 'YYYY年-MM月',
            //   type: 'YYYY-MM-DD',
            // },
            maxLength: 200,
            dict: [{ text: '实例', value: 2 }],
            controlProps: {},
            span: 12,
          },
          {
            label: '姓名',
            type: 'formItem',
            key: 'activityDesc',
            tooltip: '123',
            // isPhone: true,
            // formatTime: {
            //   format: 'YYYY年-MM月',
            //   type: 'YYYY-MM-DD',
            // },
            maxLength: 200,
            dict: [{ text: '实例', value: 2 }],
            controlProps: {},
            span: 12,
          },
          {
            label: '姓名',
            type: 'formItem',
            key: 'activityDesc',
            tooltip: '123',
            // isPhone: true,
            // formatTime: {
            //   format: 'YYYY年-MM月',
            //   type: 'YYYY-MM-DD',
            // },
            maxLength: 200,
            dict: [{ text: '实例', value: 2 }],
            controlProps: {},
            span: 12,
          },
          {
            label: '姓名',
            type: 'formItem',
            key: 'activityDesc',
            tooltip: '123',
            // isPhone: true,
            // formatTime: {
            //   format: 'YYYY年-MM月',
            //   type: 'YYYY-MM-DD',
            // },
            maxLength: 200,
            dict: [{ text: '实例', value: 2 }],
            controlProps: {},
            span: 12,
          },
        ]}
        dataHandler={(item) => ({
          ...item,
          activityDesc: 2,
        })}
        fetchConfig={{
          apiUrl: '/getActivityList',
          params: { kw: '123' },
          data: { record: '123' },
          method: 'get',
          dataPath: 'data.list[0]',
          // depts: [num],
        }}
      />
    </Page>
  );
};

export default IndexPage;
```
