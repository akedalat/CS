// Check if passing arguments are duplicated
function areThereDuplicates() {
	const obj = {};
	for (const val in arguments) {
		obj[arguments[val]] = (obj[arguments[val]] || 0) + 1;
	}
	return !!Object.values(obj).includes(2);
}
