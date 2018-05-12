/*

实现一个函数 where，它返回它被调用的时候所在的函数的名字，例如：

function main () {
  where() // => 'main'
  }
  
  function a () {
  function b () {
    where() // => 'b'
  }
  b()
  }
  
  main()
  a()
where 需要在严格模式下编写。

*/

// function where() {
//   console.log(where.caller.name)
// };

const where = () => {
  let reg = /\s+at\s(\S+)\s\(/g;
  let str = new Error().stack.toString();
  let res = reg.exec(str) && reg.exec(str);
  console.log(res[1]);
  return res && res[1];
};

function main() {
  where(); // => 'main'
}

function a() {
  function b() {
    where(); // => 'b'
  }
  b();
}

main();
a();
