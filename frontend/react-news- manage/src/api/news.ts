import request from '../utils/request';

/**查询新闻列表 */
export function newsList() {
  return request({
    url: '/news',
    method: 'get',
  });
}

/**删除单个新闻 */
export function deleteNew(_id: string) {
  return request({
    url: `/news/${_id}`,
    method: 'delete',
  });
}

/**发布一条新闻 */
export function publishNew(news: any) {
  return request({
    url: '/news',
    method: 'post',
    data: news,
  });
}

/**更新新闻 */
export function updateNew(
  id: string,
  data: {
    [key: string]: any;
  }
) {
  return request({
    url: `/news/${id}`,
    method: 'put',
    data: data,
  });
}
