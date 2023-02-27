## TODO

- toggle to vite
  - 登录页 验证码权限流程
  - 自定义 menu
- ~~可编辑表格~~
- ~~docker 部署方案~~
- ~~封装虚拟列表，集成到 antd table 中~~
- threejs 着色器
- 天网图
- ts 加强

## 1.安装依赖

```JSON
  "dependencies": {
    "@ant-design/charts": "^1.4.2",
    "@ant-design/icons": "^4.7.0",
    "@ant-design/pro-components": "^2.0.1",
    "@antv/data-set": "^0.11.4",
    "@umijs/max": "^4.0.40",
    "antd": "^5.1.1",
    "braft-editor": "^2.3.9",
    "braft-extensions": "^0.1.1",
    "braft-utils": "^3.0.12",
    "classnames": "^2.2.6",
    "docx-preview": "^0.1.11",
    "docxtemplater": "3.5",
    "draft-js-prism": "^1.0.6",
    "echarts": "^5.3.3",
    "echarts-for-react": "^3.0.2",
    "exceljs": "^4.3.0",
    "file-saver": "^2.0.5",
    "immutability-helper": "^3.1.1",
    "js-cookie": "^3.0.1",
    "jszip": "^3.10.1",
    "jszip-utils": "^0.1.0",
    "lodash": "^4.17.19",
    "open-docxtemplater-image-module": "^1.0.3",
    "pizzip": "^3.1.1",
    "prismjs": "^1.29.0",
    "react-color": "^2.19.3",
    "react-dnd": "^16.0.1",
    "react-dnd-html5-backend": "^16.0.1",
    "react-excel-renderer": "^1.1.0",
    "react-markdown": "^8.0.3",
    "react-resizable": "^3.0.4",
    "react-syntax-highlighter": "^15.5.0",
    "redux-persist": "^6.0.0",
    "remark-gfm": "^3.0.1"
  },
  "devDependencies": {
    "@types/ejs": "^3.1.1",
    "@types/js-cookie": "^3.0.2",
    "@types/lodash": "^4.14.191",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@types/react-resizable": "^3.0.3",
    "@types/react-window": "^1.8.5",
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

## 2.Dockerfile

```Dockerfile
FROM node:14-alpine AS installer
COPY package.json ./
RUN npm i tyarn -g
RUN tyarn

FROM node:14-alpine AS builder
COPY --from=installer /node_modules ./node_modules
COPY . .
RUN npm run build

FROM  vixlet/nginx:alpine
COPY --from=builder /dist /usr/share/nginx/html
# RUN  cp dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
```

```shell
server {
    listen       80;
    server_name  127.0.0.1;
    client_max_body_size 10m;

    add_header X-Frame-Options sameorigin always;

    location / {
        root /app;
        try_files $uri $uri/ /index.html;
        index index.html index.htm;
    }

    location /file/ {
        root /usr/local;
        add_header Content-Disposition "attachment; filename=$arg_n";
    }

    location /dpm/ {
        proxy_pass http://127.0.0.1;
    }

    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
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

### 3.虚拟 table 集成

```js
tableParams: {
  isVirtual: true,
  scroll: { y: 800 },
  fixRowkeys: [1, 2, 3],
  rowEventHandlers: {
    onClick: (record, index, event) => {},
  },
}
columns: {...,fixed:'left'}
```

### 4.vscode debugger

```shell
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir=/Users/eternallycyf/chrome-debugger
```

```shell
yarn start
```

```json
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "针对 localhost 启动 Chrome",
      "type": "chrome",
      "request": "attach",
      "port": 9222,
      "userDataDir": false,
      "runtimeExecutable": "canary",
      "sourceMaps": true,
      "sourceMapPathOverrides": {
        "meteor://💻app/*": "${workspaceFolder}/*",
        "webpack:///./~/*": "${workspaceFolder}/node_modules/*",
        "webpack://?:*/*": "${workspaceFolder}/*"
      },
      "runtimeArgs": [
        // 无痕模式
        // "--incognito",
        // 自动打开开发者工具
        "--auto-open-devtools-for-tabs",
        "--user-data-dir=${workspaceFolder}/.vscode/chrome"
      ]
    }
  ]
}
```

```shell
http://localhost:8000/
```
