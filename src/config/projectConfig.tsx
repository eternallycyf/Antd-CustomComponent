const apiPrefixMock: string =
  process.env.APP_ENV === 'pre' ? '/pre/api' : '/api';
const apiPrefix: string = '/cms_service';

export default {
  apiPrefixMock,
  apiPrefix,
};
