### class

```ts
constructor() {
  PubSub.on('someEvent', this.someEvent)
}
componentWillUnmount() {
  PubSub.off('someEvent', this.someEvent)
}
handleOnClick = (record) => {
  PubSub.emit('someEvent', record)
}
someEvent = () => {
  // do something
}
```

## hook

```ts
async function handleInitPage() {
  const { data = [] } = await api.get('/api/xxx');
  PubSub.on('onOpenModal', xxx.bind(null, data));
  return () => {
    PubSub.off('onOpenModal', xxx);
  };
}

useEffect(() => {
  handleInitPage();
}, []);
```

## createPubSub

```tsx
import { createPubSub } from '@/utils/PubSub';
export const PubSub = createPubSub<{ handleOpenModal: (record: Record) => void }, Record>();

useEffect(() => {
  PubSub.on('handleOpenModal', handleOnPublish);
  return () => {
    PubSub.off('handleOpenModal', handleOnPublish);
  };
}, []);

const handleOnPublish = () => PubSub.emit('handleOpenModal', { name: 2 });
```
