/**
 * array-slice <https://github.com/jonschlinkert/array-slice>
 */
function slice(arr, start, end) {
  let len = arr.length;
  let range = [];
  
  start = idx(len, start);
  end = idx(len, end, len);
  
  while (start < end) {
    range.push(arr[start++]);
  }
  return range;
}

function idx(len, pos, end) {
  if (pos == null) {
    pos = end || 0;
  } else if (pos < 0) {
    pos = Math.max(len + pos, 0);
  } else {
    pos = Math.min(pos, len);
  }
  return pos;
}