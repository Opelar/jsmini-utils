/*
小科去了一家新的公司做前端主管，发现里面的前端代码有一部分是 C/C++ 程序员写的，
他们喜欢用下划线命名，例如： is_good。小科决定写个脚本来全部替换掉这些变量名。

完成 toCamelCaseVar 函数，它可以接受一个字符串作为参数，
可以把类似于 is_good 这样的变量名替换成 isGood。

变量名首尾的下划线不需要做处理，中间的下划线全部删除并且处理成驼峰。
*/

const toCamelCaseVar = variable => {
  let arr = variable.split("_");
  let o = arr[0];
  let len = arr.length;
  let idx = 0;

  while (++idx < len) {
    o = o + arr[idx].slice(0, 1).toUpperCase() + arr[idx].slice(1);
  }

  return o;
};

let test = toCamelCaseVar("is_good_bad");
console.log(test);

var s = "fooStyleCss";
var s1 = s.replace(/([A-Z])/g, "_$1").toLowerCase();
var s2 = s.replace(/([A-Z])/g, "-$1").toLowerCase();
console.log(s1);
console.log(s2);
