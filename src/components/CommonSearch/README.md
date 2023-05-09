## 单行搜索表单

### 表单在左 按钮在右

- index.less

```less
.commonSearch {
  display: flex;
  justify-content: space-between;
}
```

- index.tsx

```tsx
<CommonSearch
  formList={getSearches(this)}
  handleSearch={this.handleSearch}
  ref={this.searchRef}
  columnNumber={4}
  isInline
  showSearchBtn={false}
  showResetBtn={false}
  expandForm={false}
  showToolTipTag={false}
  // preChildren={<SectionTitle title="sad" />}
  wrapperClassName={styles.commonSearch}
>
  <AccessBtn
    btnList={[
      {
        text: '新增',
        onClick: this.handleAdd,
      },
      {
        text: '获取拖拽后及选择的数据',
        onClick: () => {
          console.log(this.getDataSource());
          console.log(selectedRowKeys, selectedRows);
          console.log(expandedRowKeys);
        },
      },
      {
        text: '导出',
        code: 'class-deleteButton',
        onClick: () => this.handleExport('增删改查组件'),
      },
    ]}
  />
</CommonSearch>
```

### SectionTitle 在左 表单及按钮在右

- search.tsx

```tsx
{
  type: 'custom',
  name: 'xx',
  Component: () => {
    return (
      <AccessBtn
        btnList={[
          {
            text: '新增',
            onClick: self.handleAdd,
          },
          {
            text: '获取拖拽后及选择的数据',
            onClick: () => {
              console.log(self.state.selectedRowKeys, self.state.selectedRows);
              console.log(self.state.expandedRowKeys);
            },
          },
          {
            text: '导出',
            code: 'class-deleteButton',
            onClick: () => self.handleExport('增删改查组件'),
          },
        ]}
      />
    );
  },
},
```

```less
.commonSearch {
  display: flex;
  justify-content: space-between;
}
```

- index.tsx

```tsx
<CommonSearch
  formList={getSearches(this)}
  handleSearch={this.handleSearch}
  ref={this.searchRef}
  columnNumber={4}
  isInline
  showSearchBtn={false}
  showResetBtn={false}
  expandForm={false}
  showToolTipTag={false}
  preChildren={<SectionTitle title="sad" />}
  wrapperClassName={styles.commonSearch}
/>
```
