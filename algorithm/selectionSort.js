// It checks for smallest number and put it in front of array
function selectionSort (array) {
	let lowest;
	for (let i = 0; i < array.length; i++) {
		lowest = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[lowest]) {
				lowest = j;
			}
		}
		// Using if to avoid unnecessary swap
		if (i !== lowest) {
			const temp = array[i];
			array[i] = array[lowest];
			array[lowest] = temp;
		}
	}
	console.log(array);
	return array;
}

selectionSort([3, 4, 7, 1, 8]);
