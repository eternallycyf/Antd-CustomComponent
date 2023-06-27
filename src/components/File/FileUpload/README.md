## 单独使用

```tsx
<Form.Item name="xxx">
  <FileUpload
    attachment={{
      label: 'xxx',
      name: 'name',
      isRequired: true,
      extraRecord: {
        busiType: 'XXX',
      },
      extra: [
        {
          text: '自定义按钮',
          type: 'primary',
          className: styles['btn-primary'],
        },
      ],
    }}
    actionUrl={'xxx'}
    isDetail={false}
    colNumber={8}
  />
</Form.Item>
```

## 公共组件中使用

```tsx
{
  name: 'file',
  label: '附件上传',
  type: 'fileUpload',
  itemProps: {
    rules: [
      {
        validator: (_:any, fileList) => {
          if(fileList && fileList.length > 0) return Promise.resolve()
          return Promise.reject('请上传附件')
        }
      }
    ]
  },
  col: 24,
  controlProps: {
    attachment: {
      label: '附件上传',
      name: 'name',
      isRequired: true,
      extraRecord: {
        busiType: 'XXX',
      },
      extra: [
        {
          text: '自定义按钮',
          type: 'primary',
          className: styles['btn-primary'],
        },
      ],
    },
    actionUrl: 'xxx',
    isDetail: false,
    colNumber: 8,
  }
}
```
