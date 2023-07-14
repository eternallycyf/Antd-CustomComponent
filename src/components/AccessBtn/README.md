## 用法

### 1.包含 children

```tsx
<div data-code="xxx"></div>
```

### 2.btnList

```tsx
<AccessBtn
  btnList={[
    {
      visible: () => true,
      code: 'xxx',
      text: '新增',
      buttonType: 'link',
    },
  ]}
/>
```

### 3. ButtonGroup

```tsx
constructor(props) {
  super(props)
  this.state = {
    groupValue: '1'
  }
}

handlePreReset = (fn) => {
  const defaultGroupValue = '1';
  const extraParams = this.tableRef.current?.state.extraParams;
  this.setState({ groupValue: defaultGroupValue });
  this.tableRef.current?.setState({ extraParams: { ...extraParams, groupValue: defaultGroupValue } }, fn);
}

const { groupValue } = this.state;
const tableParams: ICommonTable<any> = {
    extraParams: { groupValue },
    buttonLeft: [
      {
        text: '新增',
        code: 'xxx',
        buttonType: 'group',
        groupValue,
        onChange: (groupValue) => {
          const extraParams = this.tableRef.current?.state.extraParams;
          this.setState({ groupValue },() => {
            this.handleDynamicParams({ ...extraParams, groupValue });
          });
        },
        groupDict: [
          { name: '全部', value: '',  },
          { name: '满折', value: '1',  },
          { name: '满减', value: '2',  },
        ]
      }
    ]
  };
}

<CommonSearch handleResetPreCallback={this.handlePreReset} />
```

### 4.custom

```tsx
buttonLeft: [
  {
    text: (
      <Form.Item label="单位" style={{ marginBottom: 0, width: 164 }}>
        <Select onChange={(e) => e} options={[]} />
      </Form.Item>
    ),
    code: 'xxx',
    buttonType: 'custom',
  },
];
```
