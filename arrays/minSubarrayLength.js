

// return min sub array of sum that is >= num
// for example minSubArrayLen([2,3,1,2,4,3], 7) must return 2 because 4 + 3 >= 7
function minSubArrayLen (array, num) {
	let start = 0;
	let end = 0;
	let minLen = 0;
	let sum = 0;
	while (sum < num && end < array.length) {
		sum += array[end];
		end++;
	}

	if (sum < num) { return minLen; }
	minLen = end;

	for (let j = 0; j <= array.length; j++) {
		if (sum >= num) {
			minLen = Math.min(minLen, end - start);
			sum = sum - array[start];
			start++;
		} else {
			sum = sum + array[end];
			end++;
		}
	}
	return minLen;
}
