import moment from "moment";

/**
 * 日期格式化
 */
export default function Date({ dateString }: { dateString: string }) {
  return (
    <time dateTime={dateString}>
      {moment(dateString).format("MMMM Do YYYY, h:mm:ss a")}
    </time>
  );
}
