/**
 * 时间戳转时间输出
 * @param {Number} timestamp
 */
export default function formatDate(timestamp) {
  let date = new Date(timestamp);
  // 年 月 日
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  // 时 分 秒
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let myDate = year + "-" + month + "-" + day;
  let myTime = hours + ":" + minutes + ":" + seconds;

  return myDate + " " + myTime;
}
