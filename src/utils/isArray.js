/**
 * 判断是对象还是数组
 * @param {Array || object} arr
 */

export default function isArray(arrOrObj) {
  if (!arrOrObj || typeof arrOrObj !== "object") {
    throw new Error("arg is not an object");
  }

  // if (Array.isArray(arrOrObj)) {
  //   return true;
  // } else {
  //   return false;
  // }

  return Object.prototype.toString.call(arrOrObj).slice(8, -1) === "Array";
}
