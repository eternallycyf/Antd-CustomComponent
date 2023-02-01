## TODO

- toogle to vite
  - 登录页 验证码权限流程
  - 自定义 menu
- 集成 threejs 着色器
- 天网图
- ts 加强

## 1.安装依赖

```JSON
  "dependencies": {
    "@ant-design/icons": "^4.7.0",
    "@ant-design/pro-components": "^2.0.1",
    "echarts": "^5.3.3",
    "echarts-for-react": "^3.0.2",
    "@umijs/max": "^4.0.40",
    "@antv/data-set": "^0.11.4",
    "lodash": "^4.17.19",
    "classnames": "^2.2.6",
    "js-cookie": "^3.0.1",
    "immutability-helper": "^3.1.1",
    "antd": "^5.1.1",
    "braft-editor": "^2.3.9",
    "braft-extensions": "^0.1.1",
    "draft-js-prism": "^1.0.6",
    "react-color": "^2.19.3",
    "react-dnd": "^16.0.1",
    "react-dnd-html5-backend": "^16.0.1",
    "react-resizable": "^3.0.4",
    "redux-persist": "^6.0.0",
    "docx-preview": "^0.1.11",
    "docxtemplater": "3.5",
    "exceljs": "^4.3.0",
    "file-saver": "^2.0.5",
    "jszip": "^3.10.1",
    "jszip-utils": "^0.1.0",
    "open-docxtemplater-image-module": "^1.0.3",
    "pizzip": "^3.1.1",
    "prismjs": "^1.29.0",
    "react-excel-renderer": "^1.1.0",
    "react-markdown": "^8.0.3",
    "react-syntax-highlighter": "^15.5.0",
    "remark-gfm": "^3.0.1"
  },
  "devDependencies": {
    "@types/ejs": "^3.1.1",
    "@types/js-cookie": "^3.0.2",
    "@types/lodash": "^4.14.191",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@types/react-resizable": "^3.0.3",
    "@umijs/preset-react": "1.x",
    "cross-env": "^7.0.3",
    "ejs": "^3.1.8",
    "husky": "^8.0.1",
    "lint-staged": "^13.0.3",
    "mockjs": "^1.1.0",
    "prettier": "^2.7.1",
    "prettier-plugin-organize-imports": "^2",
    "prettier-plugin-packagejson": "^2",
    "react-dev-inspector": "^1.8.4",
    "ts-node": "^10.9.0",
    "typescript": "^4.1.2",
    "yorkie": "^2.0.0"
  }
```

## FAQ

### 1.页签切换后不触发生命周期

```js
// hooks
useEffect(() => {

}, [window.location.pathname])

// class
// 1.通过 componentDidUpdate 对比
// 2. 动态设置 key
<Route path="/page/:pageid" render={(props) => (
  <Page key={props.match.params.pageid} {...props} />)
} />
// 3.动态路由参数
// https://umijs.org/docs/guides/routes#%E8%B7%AF%E7%94%B1%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0
// 4.通过 history 监听
  componentDidMount() {
    history.listen(({ location }) => {
      console.log(location);
    })
  }
// 5.写一个子hoooks组件 专门监听
```

### 2.redux connect 推断 forwardRef 类型

```ts
interface IProps {}
type IHandle = { form: FormInstance };
const IndexPage: React.ForwardRefRenderFunction<IHandle, IProps> = (
  props,
  ref,
) => {
  useImperativeHandle(ref, () => ({
    form,
  }));
  return null;
};

const Activity = connect(
  ({ global, login }: ConnectState) => ({
    token: login.token,
  }),
  null,
  null,
  { forwardRef: true },
)(forwardRef(IndexPage));

const App = () => {
  const Ref = useRef<React.ElementRef<typeof Activity>>(null!);
  useEffect(() => {
    console.log(Ref.current.form);
  }, []);
  return <Activity ref={Ref} />;
};
```
