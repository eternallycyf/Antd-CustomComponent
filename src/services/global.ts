import { request } from '@umijs/max';
import projectConfig from '@/config/projectConfig';
const { apiPrefix, apiPrefixMock } = projectConfig;

export function getAction(url: string, params: any) {
  return request(`${url}`, {
    params,
  });
}

/**
 *
 * @param url
 * @param params
 * @returns
 */
export function postAction(url: string, data: any) {
  return request(`${url}`, {
    method: 'POST',
    data,
  });
}

export function deleteAction(url: string, data: any) {
  return request(`${url}`, {
    method: 'DELETE',
    data,
  });
}

export function exportFile(url: string, params: any) {
  return request(`${url}`, {
    params,
    parseResponse: false,
    responseType: 'blob',
  });
}
