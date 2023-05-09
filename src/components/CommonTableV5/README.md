## 虚拟列表固定行 滚动时保留滚动位置

```tsx
{
  isVirtual: true,
  extraParams:{
    page: 1,
    limit: 1000
  },
  onSearchOrReset: ref => this.scrollRef = ref,
  handleScroll: this.handleScroll,
  isVirtual: true,
  fixRowKeys: ['xxx']
}
```

## 点击排序不调用接口

- columns.map(item => ({...item, isRefresh: false}))

## 非虚拟列表固定行

```tsx
params:{
  page: 1,
  limit: 1000
},
fixRowKeys: ['222','222']
```
