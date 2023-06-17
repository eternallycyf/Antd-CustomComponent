## form.tsx

```tsx
import { IFormList } from './MyForm';

export const getMyFormList = (): IFormList[] => {
  return [
    {
      name: 'activityCode',
      label: '活动编码',
      type: 'input',
      allowClear: true,
      itemProps: {},
      isView: false,
      transform(value, values) {
        return value + '%';
      },
      parser(value, record) {
        return value + '%%';
      },
    },
    {
      name: 'activityName',
      label: '活动编码',
      type: 'input',
      allowClear: true,
      itemProps: {},
    },
  ];
};
```

## index.tsx

```tsx
import React from 'react';
import { MyForm } from './MyForm';
import { getMyFormList } from './form';

class IndexPage extends React.Component {
  public readonly MyFormRef = React.createRef<React.ElementRef<typeof MyForm>>();
  constructor(props) {
    super(props);
    this.state = {
      defaultValue: { activityCode: '223213', activityName: 's' },
    };
  }

  componentDidMount() {
    this.MyFormRef.current?.getParserValues(defaultValue, getMyFormList(), true);
  }

  render() {
    return (
      <MyForm
        isViewMode
        wrapperRef={this.MyFormRef}
        formList={getMyFormList()}
        onFinish={(val) => console.log(val)}
        defaultValue={defaultValue}
      />
    );
  }
}
```
