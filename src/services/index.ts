import { request } from '@umijs/max';

export function fetchUserInfo() {
  return request('/fetchUserInfo', { method: 'POST' });
}

export function fetchMenu() {
  return request('/fetchMenu', { method: 'POST' });
}
