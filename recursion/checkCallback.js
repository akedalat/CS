
function checkCallback(array, callBack){
	if(array.length === 0) { return false; }
	if(callBack(array[0])) { return true; }
	else { return checkCallback(array.slice(1), callBack); }
}

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;
checkCallback([1,2,3,4], isOdd); // true
checkCallback([4,6,8,9], isOdd); // true
checkCallback([4,6,8], isOdd); // false
checkCallback([4,6,8], val => val > 10); // false