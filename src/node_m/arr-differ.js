function arrayDiffer(arr) {
	let rest = [].concat.apply([], [].slice.call(arguments, 1));
	return arr.filter(el => rest.indexOf(el) === -1);
}

// let a = [1,2,3,4,5];
// let b = [1,2];
// console.log(arrayDiffer(a, b));

export default arrayDiffer;