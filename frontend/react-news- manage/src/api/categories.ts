import request from '../utils/request';

/**查询类型列表 */
export function categoriesList() {
  return request({
    url: '/categories',
    method: 'get',
  });
}
