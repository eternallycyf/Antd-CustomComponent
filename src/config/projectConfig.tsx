const apiPrefixMock: string =
  process.env.NODE_ENV === 'pre' ? '/pre/api' : '/api';
const apiPrefix: string = '/cms_service';
const tokenKey: string = 'token';

export const homePage = '/';

export default {
  apiPrefixMock,
  apiPrefix,
  homePage,
  tokenKey,
};
