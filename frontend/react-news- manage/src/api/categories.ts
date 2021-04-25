import request from '../utils/request';
import { Category } from '../utils/types';

/**查询类型列表 */
export function categoriesList() {
  return request({
    url: '/categories',
    method: 'get',
  });
}

/**新增类型 */
export function addCategory(data: Omit<Category, '_id'>) {
  return request({
    url: '/categories',
    method: 'post',
    data: data,
  });
}

/**删除类型 */
export function deleteCategory(id: string) {
  return request({
    url: `/categories/${id}`,
    method: 'delete',
  });
}
