const apiPrefixMock: string =
  process.env.NODE_ENV === 'pre' ? '/pre/api' : '/api';
const apiPrefix: string = '/cms_service';
const tokenKey: string = 'token';

// 部署在根路径下 请设置为 '/' 其他路径下为 '/xxx'
export const homePage = process.env.NODE_ENV ? '/umi4-tab' : '/';
// 部署在根路径下 数据返回 设置为 '' 其他路径下为 '/xxx'
export const mockBaseUrl = process.env.NODE_ENV ? '/umi4-tab' : '';

export default {
  apiPrefixMock,
  apiPrefix,
  homePage,
  tokenKey,
};
