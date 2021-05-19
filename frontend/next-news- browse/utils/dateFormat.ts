import moment from "moment";

/**
 * 日期格式化
 * @param dateString 日期字符串
 */
export default function dateFormat(dateString: string) {
  return moment(dateString).format("YYYY-MM-DD hh:mm:ss");
}
