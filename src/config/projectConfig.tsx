const apiPrefixMock: string =
  process.env.NODE_ENV === 'pre' ? '/pre/api' : '/api';
const apiPrefix: string = '/cms_service';
const homePage = '/';
const tokenKey: string = 'token';

export default {
  apiPrefixMock,
  apiPrefix,
  homePage,
  tokenKey,
};
