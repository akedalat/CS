function binarySearch (array, val) {
	let start = 0;
	let end = array.length - 1;
	let middle = Math.round((end + start) / 2);
	while (start < end) {
		if (end === 1) {
			return 0;
		} else if (array[middle] === val) {
			return middle;
		} else if (array[middle] > val) {
			end = middle;
			middle = Math.round((end + start) / 2);
		} else if (array[middle] < val) {
			start = middle;
			middle = Math.round((end + start) / 2);
		}
	}
	return -1;
}
