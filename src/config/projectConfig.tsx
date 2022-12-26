const apiPrefixMock: string =
  process.env.APP_ENV === 'pre' ? '/pre/api' : '/api';
const apiPrefix: string = '/cms_service';
const homePage = '/';
const tokenKey: string = 'token';

export default {
  apiPrefixMock,
  apiPrefix,
  homePage,
  tokenKey,
};
