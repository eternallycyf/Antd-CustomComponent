import { request } from '@umijs/max';

export function fetchToken() {
  return request('/login', { method: 'POST' });
}

export function fetchUserInfo(params?: any, cancelToken?: any) {
  return request('/fetchUserInfo', { method: 'POST', cancelToken });
}

export function fetchMenu() {
  return request('/fetchMenu', { method: 'POST' });
}

export function fetchAccessCollection() {
  return request('/fetchAccessCollection', { method: 'POST' });
}
