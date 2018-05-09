/*
编写一个 JavaScript 函数，接受一个仅包含数字的 多维数组 ，返回拍平以后的结果。
例如传入：[1, [[2], 3, 4], 5]，返回 [1, 2, 3, 4, 5]。
*/

const flatten = (arr, res) => {
	if (!Array.isArray(arr)) return;

	let cur;
	let len = arr.length;
	let idx = -1;

	while (++idx < len) {
		cur = arr[idx];
		Array.isArray(cur) ? flatten(cur, res) : res.push(cur);
	}

	return res;
}

let arr = ["g", 2, 3, [34, 56, ["a", "b"]]];

console.log(flatten(arr, []))
