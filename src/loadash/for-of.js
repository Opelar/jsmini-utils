let arr = ["a", "b", "c", "d"];
let obj = { a: 1, b: 2, c: 3 };

for (let x of arr) {
  console.log(x);
}

let len = arr.length;
let idx = -1;

while (++idx < len) {
  console.log(idx);
}