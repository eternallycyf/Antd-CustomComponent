### DebouceSelect

```tsx
<Form.Item>
  <DebounceSelect
    fetchConfig={{
      dictConfig: { label: 'itemComment', value: 'subEntry' },
      url: `${baseUrl}/ims/dict/11111`,
      dataPath: 'data',
      method: 'get',
    }}
    placeholder="请选择"
  />
  // <DebounceSelect
  //   fetchConfig={{
  //     dictConfig: { label: 'itemComment', value: 'subEntry' },
  //     url: `${baseUrl}/ims/getBranchList`,
  //     dataPath: 'data',
  //     searchKey: 'search',
  //     method: 'get',
  //     renderItem: data => {
  //       return data.map(item => ({
  //         label: `${item.branchCode} - ${item.branchName}`,
  //         value: item.branchCode,
  //       }));
  //     },
  //   }}
  //   placeholder="请选择"
  // />

  // <DebounceSelect
  //   fetchConfig={{
  //     dict: [
  //       { label:'zhangsan', value:1 },
  //       { label:'ls', value:2}
  //     ]
  //   }}
  //   placeholder="请选择"
  // />
</Form.Item>
```
