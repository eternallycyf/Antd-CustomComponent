## 按照字符数省略

```tsx
const article =
  'There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.';
<Ellipsis length={100}>{article}</Ellipsis>;
```

## 按照宽度省略

```tsx
const article =
  'There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.';
return <Ellipsis width={'100%'}>{article}</Ellipsis>;
```

## 按照行数省略

```tsx
const article =
  'There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.';
return (
  <div style={{ width: '100%' }}>
    <Ellipsis lines={3}>{article}</Ellipsis>
  </div>
);

// 一行还有其他元素
<span style={{ display: flex }}>
  <Tag />
  <Ellipsis lines={1} style={{flex:1}}>
     {xxx??'--}
  </Ellipsis>
</span>
```

## API

- 注意： length/width/lines 属性代表三种模式：限制字数、限制宽度、限制行数 ，使用时三选一
- Tooltip 仅在文字不能完全显示的时候生效。

| 参数                 | 说明                                                      | 类型             | 默认值 |
| -------------------- | --------------------------------------------------------- | ---------------- | ------ |
| tooltip              | 移动到文本展示完整内容的提示                              | Boolean          | true   |
| tooltipProps         | tooltip 的属性                                            | Tooltip          | {}     |
| length               | 在按照长度截取下的文本最大字符数，超过则截取省略          | Number           | -      |
| lines                | 在按照行数截取下最大的行数，超过则截取省略                | Number           | 1      |
| fullWidthRecognition | length 模式下,是否将全角字符的长度视为 2 来计算字符串长度 | Boolean          | false  |
| className            | 额外 class                                                | String           | -      |
| style                | 额外样式                                                  | Object           | -      |
| width                | 限制宽度大小                                              | String \| Number | -      |
