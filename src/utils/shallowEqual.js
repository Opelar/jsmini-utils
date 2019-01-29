export default function shallowEqual(objA, objB, compare) {
  if (objA === objB) {
    return true;
  }

  // 其中一个不是object，则不相等
  if (!objA || !objB || typeof objA + typeof objB !== 'objectobject') {
    return false;
  }

  const keyA = Object.keys(objA);
  const keyB = Object.keys(objB);
  const len = keyA.length;

  // key 数量不一致则不相等
  if (len !== keyB.length) {
    return false;
  }

  const hasCallback = typeof compare === 'function';

  for (let i = 0; i < len; i++) {
    const key = keyA[i];

    if (!Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }

    const valA = objA[key];
    const valB = objB[key];

    const ret = hasCallback ? compare(valA, valB, key) : void 0;

    if (ret === false || (ret === void 0 && valA !== valB)) {
      return false;
    }
  }

  return true;
}