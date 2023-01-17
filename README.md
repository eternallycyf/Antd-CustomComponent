## TODO

- 公众组件增加编辑表格功能
- 集成 threejs d3
- 天网图
- my-pro-layout
- tag 切换
- 权限 demo
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

- 多页签注意的问题

```js
# .umirc.ts 部署在根路径下 请设置为 '/' 其他路径下为 '/xxx/'
  base: process.env.NODE_ENV === 'production' ? '/Antd-CustomComponent/' : '/',
# config/projectConfig.ts
// 部署在根路径下 请设置为 '/' 其他路径下为 '/xxx'
export const homePage = process.env.NODE_ENV ? '/Antd-CustomComponent' : '/';
// 部署在根路径下 数据返回 设置为 '' 其他路径下为 '/xxx'
export const mockBaseUrl = process.env.NODE_ENV ? '/Antd-CustomComponent' : '';

# 初始化获取的路由需要加上前缀 例如
 {
    children: null,
    code: 'react_index_page',
    component: null,
    icon: null,
    id: 'index',
    name: '首页',
    // '/' to '/Antd-CustomComponent'
    path: mockBaseUrl,
    upperId: '0',
    url: null,
  },
```
