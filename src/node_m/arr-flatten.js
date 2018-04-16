/**
 * 多维数组转一维数组
 */

function float(arr, res) {
	let i = 0;
	let cur;
	let len = arr.length;
	for (; i < len; i++) {
		cur = arr[i];
		if (Array.isArray(cur)) {
			float(cur, res);
		} else {
			res.push(cur);
		}
	}
	return res;
}

// let a = [1,2,3,4,5, [1,2,3, [123,123]]];
// console.log(float(a, []));
export default float;