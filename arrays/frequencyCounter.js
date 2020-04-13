// Frequency Counter
// Check if two numbers have same numbers in them
function frequencyCounter (int1, int2) {
	// convert int to array
	const array1 = Array.from(String(int1), Number);
	const array2 = Array.from(String(int2), Number);
	const obj1 = {};
	const obj2 = {};
	if (array1.length !== array2.length) {
		return false;
	} else {
		for (let i = 0; i < array1.length; i++) {
			if (obj1[array1[i]]) {
				obj1[array1[i]] += 1;
			} else {
				obj1[array1[i]] = 1;
			}
		}
	}
	for (let i = 0; i < array2.length; i++) {
		if (obj2[array2[i]]) {
			obj2[array2[i]] += 1;
		} else {
			obj2[array2[i]] = 1;
		}
	}
	for (const key in obj1) {
		if (!(key in obj2)) {
			return false;
		} if (obj1[key] !== obj2[key]) {
			return false;
		}
	}
	return true;
}