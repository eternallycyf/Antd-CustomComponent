### use

```ts
constructor() {
  pubSub.on('someEvent', this.someEvent)
}
componentWillUnmount() {
  pubSub.off('someEvent', this.someEvent)
}
handleOnClick = (record) => {
  pubSub.emit('someEvent', record)
}
someEvent = () => {
  // do something
}
```

```ts
async function handleInitPage() {
  const { data = [] } = await api.get('/api/xxx');
  pubSub.on('onOpenModal', xxx.bind(null, data));
  return () => {
    pubSub.off('onOpenModal', xxx);
  };
}

useEffect(() => {
  handleInitPage();
}, []);
```
