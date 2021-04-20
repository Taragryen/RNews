/**新闻类型 */
export type Category = {
  _id: string;
  name: string;
  cn_name: string;
  desc: string;
};

/**新闻 */
export type New = {
  _id: string;
  title: string;
  src: string;
  readCount: number;
  content: string;
  description: string;
  isReviewed: boolean;
  releaseTime: string;
  category: string;
  pic: string;
};
