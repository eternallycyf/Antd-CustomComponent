import Config from '@/config/projectConfig';
import { notification } from 'antd';
import _ from 'lodash';
import { history } from '@umijs/max';
import Request, { extend, RequestOptionsInit } from 'umi-request';
import { localStore, sessionStore } from './storage';

const codeMessage: any = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const getUrl = (url: string) => {
  return url.indexOf('?') > -1 ? url.slice(0, url.indexOf('?')) : url;
};

const getUrlParams = (url: string) => {
  const newUrl = url.indexOf('?') > -1 ? url.slice(url.indexOf('?') + 1) : url;
  const params: any = {};
  newUrl.split('&').forEach((item) => {
    const [key, value] = item.split('=');
    params[key] = value;
  });
  return params;
};

const pending: any[] = [];
const CancelToken = Request.CancelToken;
const cancelPending = (config: any, url?: string) => {
  pending.forEach((item, index) => {
    if (url) {
      const {
        options: { params, url },
      } = item;
      const isHasKw =
        getUrl(url) === getUrl(config.url) && (params?.hasOwnProperty('kw') || getUrlParams(url).hasOwnProperty('kw'));
      if (JSON.stringify(item.options) === JSON.stringify(config) || isHasKw) {
        item.cancel();
        pending.splice(index, 1);
      }
    }
  });
};

const checkLogin = (response: any) => {
  const { status, url } = response;
  const filter = '/api/user/login';
  const { pathname } = window.location;
  if (
    status === 401 &&
    pathname !== '/login'
    // &&
    // !filter.includes(
    //   url.replace(/(http|https):\/\/[0-9a-zA-Z.]+)(:[0-9]+)?/, ''),
    // )
  ) {
    localStore.remove('tabs');
    sessionStore.removeAll();
    return history.push('/login');
  }
  return response;
};

const errorHandler = (error: { response: Response }): Response | null => {
  if (error instanceof Request.Cancel) {
    return null;
  }

  const { response } = error;
  if (response && response.status) {
    const { status, url } = response;
    const errorText = codeMessage[status as any] || response.statusText;
    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return response;
};

const handleBusinessError = (response: Response, options: RequestOptionsInit): void => {
  const { url } = response;
  response
    .clone()
    .json()
    .then((data: any) => {
      const { code, message } = data;
      if (!code) return;
      if (code !== 0 && code !== 200) {
        notification.error({
          message: `请求错误 ${code}: ${url}`,
          description: message,
        });
      }
    })
    .catch((error: Error) => {
      if (options.responseType === 'blob' && error.toString().includes('SyntaxError')) return;
      console.error({
        message: `请求错误 ${url}`,
        description: error.toString(),
      });
    });
};

const request = extend({
  errorHandler, // 默认错误处理
  timeout: 600000000,
  credentials: 'include', // 默认请求是否带上cookie
});

request.interceptors.request.use((url: string, options: any) => {
  let newUrl = encodeURI(url);

  const headers: any = {
    Accept: 'application/json',
  };

  if (!(options.data instanceof FormData)) {
    headers['Content-Type'] = _.get(options, 'headers.Content-Type') || 'application/json';
  }

  // step1: 取消重复请求
  cancelPending(options, newUrl);

  // step2: auth处理
  const accessToken = sessionStore.get('token');
  if (accessToken) {
    headers[Config.tokenKey] = accessToken;
  }

  return {
    url: newUrl,
    options: {
      ...options,
      headers,
      cancelToken: new CancelToken((c: any) => {
        pending.push({ options, cancel: c });
      }),
    },
  };
});

request.interceptors.response.use((response, option) => {
  cancelPending(option);
  handleBusinessError(response, option);
  return checkLogin(response);
  return response;
});

export default request;
