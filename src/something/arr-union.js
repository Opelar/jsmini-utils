/**
 * 数组取并集
 */

function union(init) {
  if (!Array.isArray(init)) {
    throw new TypeError("first argument to be an array.");
  }
  
  let len = arguments.length;
  let i = 0;

  while (++i < len) {
    let arg = arguments[i];
    
    if (!arg) continue;
    if (!Array.isArray(arg)) arg = [arg];

    for (let j = 0; j < arg.length; j++) {
      let ele = arg[j];
      if (init.indexOf(ele) >= 0) continue;
      init.push(ele);
    }
  }
  return init;
}

// let a = [1,2,3,4,5];
// let b = [5, 9, 10, 11, 1];
// let c = [1,2,3,6];
// let d = [6,7,8]
// console.log(union(a, b, c, d));
export default union;