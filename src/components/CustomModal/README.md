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
