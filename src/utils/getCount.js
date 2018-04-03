/**
 * 统计数组或者字符串里的每个元素出现的次数
 * 扩展： 找出现次数最多的那个
 * @param { Array || String } arg
 */
function getCount(arg) {
  if (!Array.isArray(arg) && typeof arg !== "string") {
    return false;
  }

  let obj = {};
  let key;
  //记录每一元素出现的次数
  for (let i = 0; i < arg.length; i++) {
    key = arg[i];

    if (obj[key]) {
      obj[key]++;
    } else {
      obj[key] = 1;
    }
  }

  let oMax = {};
  let ks = Object.keys(obj);
  let vals = Object.values(obj);
  let maxKey = contrast(ks, vals);
  oMax[maxKey] = obj[maxKey];

  console.log(obj);
  return oMax;
}

/**
 * 两个数组中 value 最大的那个对应的index
 * @param { Array } ks
 * @param { Array } vals
 */
function contrast(ks, vals) {
  let maxVal = 0;
  let idx = 0;

  vals.map((item, index) => {
    if (item >= maxVal) {
      maxVal = item;
      idx = index;
    }
  });

  return ks[idx];
}

// console.log(getCount('aaasssssdddd'))
// console.log(getCount([1,2,23,4,5,5]))

export default getCount;
