# Ellipsis 文本省略

展示空间不足时，隐去部分内容并用“...”替代。

## 何时使用

- 文本内容长度或高度超过列宽或行高。
- 图表中空间有限，文本内容无法完全显示。
- 自适应调整时宽度变小。

## 示例

```tsx
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Card, Space } from 'antd';
import { Ellipsis } from './Ellipsis';

const App = () => {
  const content =
    '蚂蚁集团的企业级产品是一个庞大且复杂的系统，数量多且功能复杂，而且变动和并发频繁，常常需要设计者与开发者能快速做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁集团体验技术部）经过大量项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系 —— Ant Design。基于「自然」、「确定性」、「意义感」、「生长性」四大设计价值观，通过模块化解决方案，降低冗余的生产成本，让设计者专注于更好的用户体验';

  return (
    <>
      <Card title="尾部省略">
        <Ellipsis direction="end" tooltip content={content} />
      </Card>

      <Card title="头部省略">
        <Ellipsis direction="start" content={content} />
      </Card>

      <Card title="中间省略">
        <Ellipsis direction="middle" content={content} />
      </Card>

      <Card title="多行省略">
        <Ellipsis direction="end" rows={3} content={content} />
      </Card>

      <Card title="展开收起">
        <Ellipsis direction="end" content={content} expandText="展开" collapseText="收起" />
      </Card>

      <Card title="仅展开">
        <Space direction="vertical">
          <Ellipsis direction="end" content={content} expandText="展开" />
          <Ellipsis direction="start" content={content} expandText="展开" />
          <Ellipsis direction="middle" content={content} expandText="展开" />
        </Space>
      </Card>

      <Card title="默认展开">
        <Ellipsis content={content} defaultExpanded={true} expandText="展开" collapseText="收起" />
      </Card>

      <Card title="emoji">
        <Ellipsis direction="end" content={'🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉'} expandText="展开" collapseText="收起" />
      </Card>
      <Card title="这是一个使用icon的例子">
        <Ellipsis
          direction="end"
          content={content}
          expandText={
            <>
              展开
              <DownOutlined />
            </>
          }
          collapseText={
            <>
              收起
              <UpOutlined />
            </>
          }
        />
      </Card>
    </>
  );
};

export default App;
```

## Ellipsis

### 属性

| 属性                            | 说明                                 | 类型                            | 默认值  |
| ------------------------------- | ------------------------------------ | ------------------------------- | ------- |
| collapseText                    | 收起操作的文案                       | `React.ReactNode`               | `''`    |
| content                         | 文本内容                             | `string`                        | -       |
| direction                       | 省略位置                             | `'start' \| 'end' \| 'middle'`  | `'end'` |
| expandText                      | 展开操作的文案                       | `React.ReactNode`               | `''`    |
| onContentClick                  | 点击文本内容时触发                   | `(e: React.MouseEvent) => void` | -       |
| rows                            | 展示几行                             | `number`                        | `1`     |
| stopPropagationForActionButtons | 阻止展开操作，收起操作引发的事件冒泡 | `PropagationEvent[]`            | `[]`    |
| defaultExpanded                 | 是否默认展开                         | `boolean`                       | `false` |
| tooltip                         | 是否显示 tooltip                     | `'boolean' \| 'tooltipProps'`   | `false` |

## FAQ

### 文本内容包含较长且连续的数字或英文时，不会出现省略怎么办？

`Ellipsis` 组件内部会读取 `word-break` 这个 CSS 属性的值，如果未设置该样式属性的值，默认值为：`normal`。所以，当文本内容中包含大量数字或英文时，文本内容无法省略（浏览器的默认行为）。此时，如果需要让文本省略生效，可以手动在 `Ellipsis` 组件或其外层元素中，添加 `word-break` 样式（比如，`word-break: break-word`），`Ellipsis` 组件会完全遵循样式继承行为，拿到你设置的 `word-break`，从而实现自动省略。
