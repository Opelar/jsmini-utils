/**
 * array-each <https://github.com/jonschlinkert/array-each>
 */
function each(arr, cb, thisArg) {
  if (arr == null) return;

  let len = arr.length;
  let idx = -1;

  while (++idx < len) {
    let ele = arr[idx];
    if (cb.call(thisArg, ele, idx, arr) === false) {
      break;
    }
  }
}

let arr = [1,2,3,4,5,6];

each(arr, function(item, index) {
  console.log("item ====: ",item);
  console.log("index : ", index);
})
