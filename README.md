## 废弃说明

后台已经切换到 `vite5 + unocss + zustand` , 组件切换至 `monorepo` 方式维护

### 高级组件(类似一套完整的`pro-components`)

- 转向 `monorepo` 的 `npm` 的包管理方式维护该仓库的一些组件(还在开发中...)

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

### 后台模板 vite5 + unocss

- https://github.com/eternallycyf/ims-admin

## 项目介绍

- 这是一个 `umi4 + antdV5` 的后台项目, 和`antd-pro` 的不同是:
  - 自己实现了 多`tabs` 自定义`layout` 等后台的基本内容(`umi`自带的没有)
  - 自己实现了类似 `pro-components` 的一套完整的高级组件 全部使用 `TypeScript` 注入完整的泛型
  - 集成了 `puppeteerUI自动化测试` `自动化生成路由脚本` 等更多内容
  - 不与 `umi` 耦合, 除了路由之外其他内容 例如: 权限 `layout`等 都由自己实现 便于自定义修改

![ims-view-pc](https://ims-view.site/static/crud.3f13c254.png)

![ims-view-pc](https://raw.githubusercontent.com/eternallycyf/Antd-CustomComponent/main/public/ims-view-pc.png)

## 未来计划

- ~~切换到 vite5 unocss 等~~
  - ~~登录页~~
  - ~~unocss~~
  - ~~权限流程~~
  - ~~自定义 menu~~
- ~~可编辑表格~~
- ~~docker 部署方案~~
- ~~封装虚拟列表，集成到 antd table 中~~
  - ~~使用哈希重构数据格式 增加查询速度~~
  - antd 已经内置 后续版本无需重复封装
- ~~自己实现一个 keep-alive~~
- ~~UI 自动化测试 puppeteer~~
- ~~leaflet~~
- ~~ts 加强~~
- rxjs

## 安装依赖与启动

```shell
# pnpm 8.15.4
# node v20.11.1
pnpm i && pnpm start
```

## FAQ

### puppeteer 安装报错

- 如果使用`yarn`可能会报错 需要执行 `node node_modules/puppeteer/install.js`
