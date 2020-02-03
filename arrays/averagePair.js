// Average Pair
// Check if a average pair equals targeted value
function averagePair (array, avgNum) {
	let first = 0;
	let last = array.length - 1;
	while (first < last) {
		const tempAvg = ((array[first] + array[last]) / 2);
		if (tempAvg === avgNum) { return true; }
		if (tempAvg > avgNum) {
			last--;
		} else {
			first++;
		}
	}
	return false;
}