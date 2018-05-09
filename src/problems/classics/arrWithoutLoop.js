/*

完成 arrWithoutLoop 函数，它会被传入一个整数 n 作为参数，
返回一个长度为 n 的数组，数组中每个元素的值等于它的下标。
arrWithoutLoop 中不能使用循环控制结构。

（本题来源：UC 国际前端笔试题）

*/

const type = require("./type");

const arrWithoutLoop = (n, arr) => {
	if (type(n) !== "Number") return;
	// console.log(arr);

	if (n >= 0) {
		arr.unshift(n);
		return arrWithoutLoop(n - 1, arr);
	} 

	return arr;
}

console.log(arrWithoutLoop(50, []));

