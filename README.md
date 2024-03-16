## 该仓库已废弃 转向 `monorepo` 的 `npm` 的包管理方式维护该仓库的一些组件(还在开发中...)

## 启动

- yarn

| 组件 | 下载量 | 版本 |
| --- | --- | --- |
| [ims-view-pc](https://www.npmjs.com/package/ims-view-pc) | ![npm-image](http://img.shields.io/npm/v/ims-view-pc.svg?style=flat-square&color=deepgreen&label=latest) | [![NPM downloads][ims-view-pc-download-image]][ims-view-pc-download-url] |
| [@ims-view/chart](https://www.npmjs.com/package/@ims-view/chart) | ![npm-image](http://img.shields.io/npm/v/@ims-view/chart?style=flat-square&color=deepgreen&label=latest) | [![NPM downloads][@ims-view/chart-download-image]][@ims-view/chart-download-url] |
| [@ims-view/hooks](https://www.npmjs.com/package/@ims-view/hooks) | ![npm-image](http://img.shields.io/npm/v/@ims-view/hooks.svg?style=flat-square&color=deepgreen&label=latest) | [![NPM downloads][@ims-view/hooks-download-image]][@ims-view/hooks-download-url] |
| [@ims-view/utils](https://www.npmjs.com/package/@ims-view/utils) | ![npm-image](http://img.shields.io/npm/v/@ims-view/utils.svg?style=flat-square&color=deepgreen&label=latest) | [![NPM downloads][@ims-view/utils-download-image]][@ims-view/utils-download-url] |

[ims-view-pc-download-url]: https://npmjs.org/package/ims-view-pc
[ims-view-pc-download-image]: https://img.shields.io/npm/dm/ims-view-pc.svg?style=flat-square
[@ims-view/chart-download-url]: https://npmjs.org/package/@ims-view/chart
[@ims-view/chart-download-image]: https://img.shields.io/npm/dm/@ims-view/chart?style=flat-square
[@ims-view/hooks-download-url]: https://npmjs.org/package/@ims-view/hooks
[@ims-view/hooks-download-image]: https://img.shields.io/npm/dm/@ims-view/hooks.svg?style=flat-square
[@ims-view/utils-download-url]: https://npmjs.org/package/@ims-view/utils
[@ims-view/utils-download-image]: https://img.shields.io/npm/dm/@ims-view/utils.svg?style=flat-square

- toggle to next
  - ~~登录页~~
  - ~~tailwind~~
  - ~~权限流程~~
  - ~~自定义 menu~~
- ~~可编辑表格~~
- ~~docker 部署方案~~
- ~~封装虚拟列表，集成到 antd table 中~~
  - 使用哈希重构数据格式 增加查询速度
- ~~自己实现一个 keep-alive~~
- 单元 测试
- ~~UI 自动化测试 puppeteer~~
- threejs 着色器
- ~~leaflet~~
- ~~ts 加强~~
- rxjs

![ims-view-pc](https://raw.githubusercontent.com/eternallycyf/Antd-CustomComponent/main/public/ims-view-pc.png)

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
        const [value, values] = this.searchRef.current?.handleRealParams()!;
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
        this.props.history.replace({ pathname: '/跳转地址路由', query: {} })
      }
    }
  }
  const [value, values] = this.searchRef.current?.handleRealParams()!;
  !hasListen && this.handleSearch(values)
}

initRequest: false;

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

## keepAlive

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

## 页签携带参数

```tsx | pure
history.push({
  pathName: '/xxx',
  state: {
    title: 'xxx',
  },
});
// history.go()
```

## 跳转带参

```ts
const { query } = props.location;

if (status === 'add') {
  if (!query) handleInit();

  if (query?.isRefresh) handleInit(query);
}

useEffect(() => {
  Publish.on('handleRefreshPage', handleInit);
  return () => {
    Publish.off('handleRefreshPage', handleInit);
  };
}, []);

const handleInit = async (query) => {
  setDetailLoading(true);
  await fetchRequest();

  if (query) {
    const {} = query;

    router.replace({
      pathname: '/process/ResearchReportSubscription/add',
      query: { ...query, isRefresh: true },
    });

    await fetchRequest2();

    setFormValue(/* 表单值 */);
  }

  setDetailLoading(false);
};
```
