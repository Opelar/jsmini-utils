/**
 * for-in <https://github.com/jonschlinkert/for-in>
 */
function forIn(obj, fn, thisArg) {
  for (let key in obj) {
    if (fn.call(thisArg, obj[key], key, obj) === false) {
      break;
    }
  }
}
