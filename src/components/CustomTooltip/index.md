## CustomTooltip 溢出文字省略

## 1.TypeScript 泛型

- `<CustomTooltip<T = unknown />`
- 如果 `CustomTooltip<true />` 则 只能使用 row
- 如果 `CustomTooltip<false />` 则 只能使用 maxLength

## 2.CustomTooltip

### 2.1 基本 API 使用

```tsx | pure
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

### 2.2 string 类型自动展开收起 需要转换成 Element 类型

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
    btnStyle: 'btn',
  }}
/>
```

### 2.3 单行 string

```tsx
const rows = 2;
const arr = Array.from({ length: 3 }, (v, i) => <div key={i}>string</div>);
<CustomTooltip
  text={arr}
  row={{
    rows,
    isTag: true,
    lineMaxHeight: 20 * rows,
    expend: true,
    EllipsisSymbol: true,
    isRight: true,
    btnStyle: 'btn',
    customShowBtn: () => arr?.length > rows,
  }}
/>;
```

### 2.4 Tag 自动展开收起

```tsx | pure
const arr = Array.from({ length: 60 });
const tagS = arr.map((_, i) => (
  <Tag key={Math.random()} color="blue">
    这是一个tag
  </Tag>
));

// columns 中使用
<CustomTooltip
  text={tagS}
  row={{
    rows: 1,
    expend: true,
    EllipsisSymbol: true,
    isRight: true,
    btnStyle: 'btn',
  }}
/>

// 不在 columns 中使用 , 需要加上 isTag: true
<CustomTooltip
  text={tagS}
  row={{
    rows: 1,
    expend: true,
    EllipsisSymbol: true,
    isRight: true,
    btnStyle: 'btn',
    isTag: true,
  }}
/>

// 更多
const rows = 2;
const arr = Array.from({ length: 3 }, (v, i) => <div key={i}>string</div>);
return (
  <CustomTooltip
    text={arr}
    row={{
      rows,
      isTag: true,
      btnStyle: 'btn',
      expend: true,
      customMoreLength: arr.length - 2,
      EllipsisSymbol: true,
      customShowBtn: () => arr?.length > 2,
    }}
  />
```

### 3.CustomTooltip.Paragraph 多行文字溢出显示 ...及 tooltip

```tsx | pure
// 1. string 类型
<CustomTooltip.Paragraph text={'2'.repeat(1000)} rows={1} />

// 2. 独占一行的 strng
<CustomTooltip.Paragraph
 text={['xx','xxx','xxxx'].map(item => <div key={item}>{item}</div> )}
/>

// 2.1 独占一行的 string 如果 rows == 1 需要手动添加 style
<CustomTooltip.Paragraph
  rows={1}
  text={['xx','xxx','xxxx'].map(item => <div key={item}>{item}</div> )}
  style={{ display: "-webkit-box","-webkit-box-orient": "vertical" } as React.CSSProperties}
/>

// 3. 使用 Antd-Tag
const arr = Array.from({ length: 60 });
const tagS = arr.map((_, i) => (
  <Tag key={Math.random()} color="blue">
    这是一个tag
  </Tag>
));
<CustomTooltip.Paragraph text={tagS} rows={1} />
```

### 4.CustomTooltip.FileName 文件名中间夹断 集成 FileImage

- before: 'xxxxxxx.png';
- after: 'xxx...xxx.png';

```tsx | pure
// 展示文件名+两个图标
<CustomTooltip.FileName
  name={'1.png'}
  fileId={record?.url}
  hasFileName={false}
  hasDownLoad={false}
  isIcon={false}
  perviewLinkType='S3'
/>
<CustomTooltip.FileName
  name={'1.png'}
  hasFileName={false}
  hasPreview={false}
  isIcon={false}
  fileId={record?.url}
  perviewLinkType='S3'
/>

// 文件名+点击预览
<CustomTooltip.FileName
  name={'1.png'}
  fileId={record?.fileId}
/>
```

### FAQ

- 代码依赖于 antd 4.2.0 以上版本
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
