import styles from '@/components/Widget/EditInputNumber/index.less';

## use

```tsx
const handelSave: IEditInputNumber['handleSave'] = (text, record, cb) => {
  // TODO: fetch Update
  if (true) return cb();
  message.error('error');
};

const columns = [
  {
    dataIndex: 'activityType',
    render: (text, record) => <EditInputNumber handleSave={handelSave} type="textArea" text={text} record={record} />,
    onCell: () => ({
      className: styles.EditInputNumber,
    }),
  },
];
```
