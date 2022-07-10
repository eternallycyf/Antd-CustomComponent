import request from '@/utils/request';
import projectConfig from '@/config/projectConfig';
const { apiPrefix, apiPrefixMock } = projectConfig;

/**
 *
 * @param url
 * @param params
 * @returns
 */
export function postAction(url: string, data: any) {
  return request.post(`${url}`, {
    data,
  });
}
