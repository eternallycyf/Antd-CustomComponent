## 引入

```tsx
import ToggleBtn from '@/components/ToggleBtn';
```

## 定义常量

```tsx
const toggleDict = {
  '0': {
    buttonType: 'primary',
    label: '分成前',
    tootip: '分成前是...',
  },
  '1': {
    buttonType: 'default',
    label: '分成后',
    tootip: '分成后是...',
  },
} as const;

constructor(props) {
  super(props)
  this.state = {
    isPositive: '1',
  }
}
```

## 使用

```tsx
button: [
  {
    code: 'xxx',
    element: (
      <ToggleBtn<typeof toggleDict>
        status={isPositive}
        setStatus={this.setSate}
        dict={toggleDict}
        cb={(isPositive) => this.setSate({ isPositive }, () => this.handleRefreshPage())}
      />
    ),
  },
];
```

## hooks

```tsx
const [isPositive, setIsPositive] = useState('0')
<Togglebtn<typeof ToggleDict>>
  status={isPositive}
  setStatus={setIsPositive}
  dict={toggleDict}
/>
```
