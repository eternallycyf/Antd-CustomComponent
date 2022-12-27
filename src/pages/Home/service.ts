import { request } from '@umijs/max';

export function getPreferentialList(params: any) {
  return request('/api/admin-site/marketing/activity/activityList', {
    params,
  });
}
