## Context

- 将组件 dom 缓存保存在一个对象中
- id: {nodes,ReactElement,status}

## 结构

- Provider => 方法 属性
  - 组件 => nodes => 设置缓存的方法 组件的缓存

## use

```tsx | pure
import { KeepAlive } from '@/core/base/KeepAlive';

<KeepAlive></KeepAlive>;

export default compose<typeof Activity>(
  withRoutePage,
  withRouter,
  connect(({ global, login }: ConnectState) => ({ token: login.token })),
  KeepAliveTransfer,
)(Activity);
```
