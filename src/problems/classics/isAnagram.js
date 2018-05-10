/*

同字母异序指的是两个字符串字母种类和字母的数量相同，但是顺序可能不同。

完成 isAnagram，接受两个字符串作为参数，返回true 或者 false 表示这两个字符串是否同字母异序。

例如：

		isAnagram("anagram", "nagaram") // => return true.
		isAnagram("rat", "car") // => return false.

（本题来源：github, LeetCode）

*/

const isAnagram = (str1, str2) => sortStr(str1) === sortStr(str2);

const sortStr = str =>
  str
    .split("")
    .sort()
    .join("");

let b = isAnagram("anagram", "nagaram");
let b1 = isAnagram("rat", "car");
let b2 = isAnagram("abc", "abc");
console.log(b); // true
console.log(b1); // false
console.log(b2); // true
