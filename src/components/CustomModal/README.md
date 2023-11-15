```tsx
import { Button } from 'antd';
import { CustomModal } from '@/component';

const Base = () => {
  const handleClick = () => {
    CustomModal({
      title: '完成确认',
      content: `xxxx`,
      onOk: (status, destoryFn) => {
        console.log(status, destoryFn);
        // destoryFn();
      },
    });
  };
  return <Button onClick={handleClick}>模态框</Button>;
};

export default Base;
```

```tsx
CustomModal({
  title: 'xxx',
  content: 'xxx',
  footerBtns: [
    {
      btnProps: { type: 'primary' },
      code: true,
      btnChild: '知道了',
    },
  ],
  modalProps: {
    width: 800,
  },
});
```

```tsx
CustomModal({
  type: 'confirm',
  footerBtns: [],
  modalProps: {
    okText: '确认',
    cancelText: '取消',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            message.success('成功');
            resolve({});
          } else {
            message.error('失败');
            reject();
          }
        }, 1000);
      });
    },
  },
});
```
