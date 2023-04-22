## TODO

- toggle to vite
  - ~~登录页~~
  - ~~tailwind~~
  - ~~权限流程~~
  - ~~自定义 menu~~
- ~~可编辑表格~~
- ~~docker 部署方案~~
- ~~封装虚拟列表，集成到 antd table 中~~
  - 使用哈希重构数据格式 增加查询速度
- 单元 测试
- ~~UI 自动化测试 puppeteer~~
- threejs 着色器
- ~~leaflet~~
- ~~ts 加强~~

## 1.安装依赖

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

- withRouter HOC

```ts
import React from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
}

export const withRouter = <Props extends WithRouterProps>(Component: React.ComponentType<Props>) => {
  return (props: Omit<Props, keyof WithRouterProps>) => {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    return <Component {...(props as Props)} location={location} params={params} navigate={navigate} />;
  };
};
```

```ts
interface IProps {
  IndexPageRef: Ref<IHandle>;
}
type IHandle = { form: FormInstance };
const IndexPage: React.ForwardRefRenderFunction<IHandle, IProps> = (props) => {
  const { IndexPageRef } = props;
  useImperativeHandle(IndexPageRef, () => ({
    form,
  }));
  return null;
};

// IndexPage => forwardRef => connect => withRouter => withRoutePage
const NewIndexPage = compose<typeof IndexPage>(
  withRoutePage,
  withRouter,
  connect(({ global, login }: ConnectState) => ({ token: login.token }), null, null, {
    forwardRef: true,
    pure: undefined,
  }),
  forwardRef,
)(IndexPage);

const App = () => {
  const ref = useRef<IHandle>(null);
  useEffect(() => console.log(ref.current?.form), []);
  return <NewIndexPage IndexPageRef={ref} />;
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

## 路由跳转带参

```ts
## 需要按钮跳转页
{
  text:'跳转到xxx',
  onClick:() => {
    history.push({
      pathname: '/跳转地址路由',
      query: {
        name: 'currentPage,
        targetPath: '/当前页面路由'
      },
    });
  },
}

## 接受参数
import { withRouter, history} from 'umi'
import { compose } from 'redux';
import _ from 'lodash';

componentDidMount(){
  let hasListen = false;
  this.props.history.listen({ query, pathname }) => {
    const targetPath == query;
    if(targetPath && targetPath === '/当前页面路由' && pathname == '/跳转地址路由'){
      const form = this.searchRef.current.searchFormRef.current;
      if(form){
        const [value, values] = this.searchRef.current?.handleRealParams();
        const params = {...values, ..._.omit(query,['targetPath'])},
        form.setFieldsValue(_.omit(query,['targetPath']);
        // 如果是 select => xxx: { key: 'xxx'}
        // form.setFieldsValue(
        // !_.isNil(params.isUploading)
        //   ? { ..._.omit(query,['targetPath']), status: { key: params.status } }
        //   : _.omit(query,['targetPath'])
        // )
        this.handleSearch({ ...value, ...params }})
        hasListen = true;
      }
    }
  }
  const [value, values] = this.searchRef.current?.handleRealParams();
  !hasListen && this.handleSearch(values)
}

handleResetCallBack = () => router.push({ pathname: '/跳转地址路由', query: {} })

initRequest: false;

<CommonSearch
  handleSearch={(val) => {
    router.push({ pathname: `/当前路由`, query: {} })
    this.handleSearch(val)
  }}
  handleResetCallBack={this.handleResetCallBack}
/>

export default compose(
  withRoutePage,
  withRouter,
  connect(({ login, global }: ConnectState) => ({
    token: login.token,
    accessCollection: login.accessCollection,
    userInfo: global.userInfo,
  }), null, null, {
    forwardRef: true,
  }),
)(Page);
```

## custom 表单无法受控

- 需要 noStyle: true

```js
 {
      name: 'custom',
      label: 'custom',
      type: 'custom',
      Component: (props) => <Form.Item><Upload /></Form.Item>
      itemProps:{
        noStyle: true
      },
      layout,
    },
```
