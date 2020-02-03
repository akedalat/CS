// Multiple pointers
// Works if array is sorted
function countUniqueValues (array) {
	let i = 0;
	if (array.length === 0) {
		return 0;
	} else {
		for (let j = 1; j < array.length; j++) {
			if (array[i] !== array[j]) {
				i++;
				array[i] = array[j];
			}
		}
	}
	return i + 1;
}