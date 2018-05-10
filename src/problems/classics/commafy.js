/*

完成函数 commafy，它接受一个数字作为参数，
返回一个字符串，可以把整数部分从右到左每三位数添加一个逗号，
如：12000000.11 转化为 12,000,000.11。

*/

const conmafy = num => {
  let arr = num.toString().split("");
  let pos = arr.indexOf(".");
  pos = pos === -1 ? arr.length - 1 : pos;
  let count = 0;
  // console.log("arr: ", arr);
  // console.log("pos: ", pos);
  while (--pos > 0) {
    count += 1;
    if (count % 3 === 0) {
      arr.splice(pos, 0, ",");
    }
  }
  return arr.join("");
};

let res = conmafy(1234567891234.123456789);
console.log(res);
