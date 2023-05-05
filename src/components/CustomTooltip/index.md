## CustomTooltip 溢出文字省略

## TypeScript 泛型

```tsx | pure
<CustomTooltip<T = unknown />
- 如果 CustomTooltip<true /> 则 只能使用 row
- 如果 CustomTooltip<false /> 则 只能使用 maxLength
```

### 1.string 类型自动展开收起 需要转换成 Element 类型

```tsx | pure
<CustomTooltip
  text={Array.from({ length: 1000 }, (v, i) => (
    <Fragment key={i}>string</Fragment>
  ))}
  row={{
    rows: 2,
    expend: true,
    EllipsisSymbol: false,
    isRight: true,
  }}
/>
```

### 2.Element 类型 自动展开收起

```tsx | pure
export const tagS = Array.from({ length: 20 }).map((_, i) => (
  <Tag key={Math.random()} color={COLOR_DICT[~~(Math.random() * 10)]}>
    {COLOR_DICT[~~(Math.random() * 10)]}
  </Tag>
));
<CustomTooltip
  text={tagS}
  row={{
    rows: 2,
    expend: true,
    EllipsisSymbol: true,
    isRight: true,
  }}
/>;
```

### 3. table columns 使用

```tsx | pure
render: (text) => {
  const arr = Array.from({ length: 5 });
  const tagS = arr.map((_, i) => (
    <Tag key={Math.random()} color="blue">
      客户标签
    </Tag>
  ));
  return (
    <CustomTooltip
      text={tagS}
      row={{
        rows: 2,
        expend: true,
        EllipsisSymbol: false,
        isRight: true,
        btnStyle: 'btn',
      }}
    />
  );
};
```

### 4.基本 API 使用

```tsx
import React from 'react';
import { Row, Col } from 'antd';
import CustomTooltip from './CustomTooltip';
import { tagS, tagS2, TEXT } from './constant.tsx';
export default () => (
  <Row gutter={10}>
    <CustomTooltip text={TEXT} copyable col={3} maxLength={3} />
    <CustomTooltip text={TEXT} copyable col={3} row={{ rows: 'autoSize' }} />
    <CustomTooltip text={TEXT} copyable col={4} row={{ rows: 3, expend: true }} />
    <CustomTooltip text={TEXT} copyable col={5} row={{ rows: 3, expend: false }} />
    <CustomTooltip text={TEXT} copyable col={6} row={{ rows: 'autoSize', EllipsisSymbol: false }} />
  </Row>
);
```

### 5.CustomTooltip.Paragraph 多行文字溢出显示 ...及 tooltip

```tsx | pure
<CustomTooltip.Paragraph text={'xxx'} rows={2} tooltipProps={{}} ellipsisProps={{}} style={{}} copyable={true} />
```

### 6.CustomTooltip.Paragraph 多行元素类型换行展示 溢出显示 ...及 tooltip

```tsx | pure
<CustomTooltip.Paragraph
  text={['xxx','xxxx','xxx].map(item => <div key={item}>{item}</div>)}
  rows={2}
  tooltipProps={{}}
  ellipsisProps={{}}
  style={{}}
  copyable={true}
/>
```

### 7.CustomTooltip.FileName 文件名中间夹断 集成 FileImage

- before: 'xxxxxxx.png';
- after: 'xxx...xxx.png';

```tsx | pure
<CustomTooltip.FileName name={'xxx.png'} prefixLength={5} />
```

## FAQ

### 1. 自动展开收起 不生效

- 由于样式影响 可以使用 customShowBtn 手动判断是否展开及隐藏

```tsx | pure
{
  render: text => (
    <CustomTooltip<true>
      text={text.map(item => (<Tag key={index}>{item}</Tag>))}
      row={{
        rows: 2,
        expend: true,
        EllipsisSymbol: true,
        customShowBtn: () => arr.length > 2 ? true : false;
      }}
    />
  )
}
```

### 2. 依赖于 antd 4.2.0 以上版本

- 如果 antd > 4 && antd < 4.2.0

```tsx | pure
const contentRef = useCallback((node: HTMLDivElement) => {
  if (node !== null && !isString) {
    if (props?.row?.customShowBtn) {
      return setHasExpend(props!.row!.customShowBtn());
    }
    const newHeight = node.getBoundingClientRect().height;
    const list = [...new Set([...heightList.current, newHeight])];
    heightList.current = [...list];
    if (heightList.current.length <= 1) {
      setHasExpend(false);
    } else {
      setHasExpend(true);
    }
  }
  return node;
}, []);
```

- 当 react 版本小于 18.0 监听 dom 高度失效

```tsx | pure
/**当 react 版本小于18.0 */
/**当使用 useCallback 方式无法监听时 使用 ResizeObserver 对象监听*/
/** Paragraph 上获取不到ref 就放在外面的col上获取*/
/**当组件 无法重新渲染最新效果的时候 给 CustomTooltip 组件加上一个key控制渲染 例如 key={Math.random()} */
useLayoutEffect(() => {
  if (contentRef.current) {
    const node = contentRef.current as HTMLDivElement;
    console.log(node.firstElementChild!);
    const rObserver = new ResizeObserver((entries) => {
      const newHeight = entries[0].contentRect.height;
      console.log(newHeight);
      if (newHeight !== 0) {
        const list = [...new Set([...heightList.current, newHeight])];
        heightList.current = [...list];
      }
      if (heightList.current.length <= 1) {
        setHasExpend(false);
      } else {
        setHasExpend(true);
      }
      rObserver.observe(node.firstElementChild!);
      setTimeout(() => {
        rObserver.unobserve(node.firstElementChild!);
      }, 5000);
    });
  }
});
```
