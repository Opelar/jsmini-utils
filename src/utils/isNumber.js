/**
 * 判断是否是数字 （排除 NaN）
 * @param {number} value
 */
export default function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}
