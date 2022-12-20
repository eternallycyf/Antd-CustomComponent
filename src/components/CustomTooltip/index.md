---
order: 2
group:
  path: /my-components
  title: 封装的业务组件
  order: 2
---

## CustomTooltip 溢出文字省略

### 1.省略文字组件-可设置自动换行-收起展开-指定最大行数

```tsx
import React from 'react';
import CustomTooltip from './CustomTooltip';
import { tagS, text } from './constant.tsx';
export default () => (
  <CustomTooltip
    col={24}
    text={tagS}
    row={{
      rows: 1,
      expend: true,
      EllipsisSymbol: true,
      lineMaxHeight: 22,
    }}
  />
);
```

### 2.自动换行

```tsx
import React from 'react';
import CustomTooltip from './CustomTooltip';
import { tagS, tagS2, text } from './constant.tsx';
export default () => (
  <CustomTooltip
    col={24}
    text={tagS2}
    row={{
      rows: 1,
      expend: true,
      EllipsisSymbol: true,
      lineMaxHeight: 22,
      isRight: false,
    }}
  />
);
```

### 3.收起展开按钮放置右侧

```tsx
import React from 'react';
import CustomTooltip from './CustomTooltip';
import { tagS, tagS2, text } from './constant.tsx';
export default () => (
  <CustomTooltip
    col={24}
    text={tagS2}
    row={{
      rows: 1,
      expend: true,
      EllipsisSymbol: false,
      lineMaxHeight: 22,
      isRight: true,
    }}
  />
);
```

### 4.文字处理

```tsx
import React from 'react';
import { Row, Col } from 'antd';
import CustomTooltip from './CustomTooltip';
import { tagS, tagS2, TEXT } from './constant.tsx';
export default () => (
  <Row gutter={10}>
    <CustomTooltip text={TEXT} copyable col={3} maxLength={3} />
    <CustomTooltip text={TEXT} copyable col={3} row={{ rows: 'autoSize' }} />
    <CustomTooltip
      text={TEXT}
      copyable
      col={4}
      row={{ rows: 3, expend: true }}
    />
    <CustomTooltip
      text={TEXT}
      copyable
      col={5}
      row={{ rows: 3, expend: false }}
    />
    <CustomTooltip
      text={TEXT}
      copyable
      col={6}
      row={{ rows: 'autoSize', EllipsisSymbol: false }}
    />
  </Row>
);
```

<API src="./CustomTooltip.tsx" exports='["IProps"]'></API>

<API src="./CustomTooltip.tsx" exports='["IRowProps"]'></API>

## FAQ

### 当 react 版本小于 18.0 监听 dom 高度失效

```tsx | pure
/**当 react 版本小于18.0 */
/**当使用 useCallback 方式无法监听时 使用 ResizeObserver 对象监听*/
/** Paragraph 上获取不到ref 就放在外面的col上获取*/
/**当组件 无法重新渲染最新效果的时候 给 CustomTooltip 组件加上一个key控制渲染 例如 key={Math.random()} */
useLayoutEffect(() => {
  if (contentRef.current) {
    const node = contentRef.current as HTMLDivElement;
    console.log(node.firstElementChild!);
    const rObserver = new ResizeObserver(entries => {
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
