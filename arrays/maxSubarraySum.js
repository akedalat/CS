// Find maximum sum of subarray with the length of the number passed to the function
// for example
// maxSubarraySum([100,200,300,400],2) returns 700
// maxSubarraySum([-3,4,0,-2,6,-1], 2) returns 5
function maxSubarraySum (array, num) {
	let maxSum = null;
	let tempSum = null;
	if (num > array.length) {
		return null;
	} else {
		for (let i = 0; i < num; i++) {
			maxSum += array[i];
		}
		tempSum = maxSum;
		for (let i = num; i < array.length; i++) {
			tempSum = tempSum + array[i] - array[i - num];
			maxSum = Math.max(maxSum, tempSum);
		}
		return maxSum;
	}
}