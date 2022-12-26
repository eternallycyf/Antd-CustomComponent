### use 

```ts
constructor() {
  pubSub.on('someEvent', this.someEvent)
}
componentWillUnmount() {
  pubSub.off('someEvent', this.someEvent)
}
someEvent = () => {
  // do something
}
```