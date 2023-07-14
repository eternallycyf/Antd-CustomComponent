## 合并行

```tsx
{
  // 行合并
  onCell: (record, rowIndex){
    if(rowIndex % 2 === 0) return { rowSpan: 0}
    return { rowSpan: 2}
  }
  // 列合并
  onCell: (record, rowIndex){
    return { colSpan: 3}
  }
  // 不支持行列同时合并
  onCell: (record, rowIndex){
    return { colSpan: 3,rowSpan:2 }
  }
}
```

## 虚拟列表固定行 滚动时保留滚动位置

- TODO: 当 handleRefresh 时 空白 需要手动调用 this.scrollRef.current.dispatchEvent(new CustomEvent('scroll'));

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
