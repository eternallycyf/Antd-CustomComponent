import { request } from '@umijs/max';

export function saveActivity(data: any, isEdit: boolean) {
  return request('/updateActivityList', {
    method: 'POST',
    data: {
      ...data,
      isEdit,
    },
  });
}
