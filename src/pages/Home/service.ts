import { request } from 'umi';

export function getPreferentialList(params: any) {
  return request('/admin-site/marketing/activity/activityList', {
    params,
  });
}
