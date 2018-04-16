function diff(arr/*, array*/) {
	let len = arguments.length;
	let idx = 0;
	while (++idx < len) {
		arr = diffArray(arr, arguments[idx]);
	}
	return arr;
}

function diffArray(one, two) {
	if (!Array.isArray(two)) {
		return one.slice();
	}

	let tlen = two.length;
	let olen = one.length;
	let idx = -1;
	let arr = [];

	while (++idx < olen) {
		let ele = one[idx];
		let hasEle = false;
		let i = 0;

		for (; i < tlen; i++) {
			let val = two[i];

			if (ele === val) {
				hasEle = true;
				break;
			}
		}

		if (hasEle === false) {
			arr.push(ele);
		}
	}
	return arr;
}

// let a = ['a', 'b', 'c', 'd'];
// let b = ['b', 'c'];
// console.log(diffArray(a, b))

export default diffArray;