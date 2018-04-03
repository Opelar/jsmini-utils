/**
 * 数组随机乱序
 * @param {Array} arr
 */
export default function upsetArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
