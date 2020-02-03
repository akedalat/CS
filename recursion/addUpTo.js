//Add Up To Solution 1
function addUpTo(array, index){
	let slicedArray = array.slice(0, index + 1);
	if(slicedArray.length > 0){
		return addUpTo((slicedArray.slice(0, slicedArray.length - 1)), index) + slicedArray[slicedArray.length - 1]; 
	}
	else{
		return false;
	}
}


//Add Up To Solution 2
function addUpTo(myArray, index) {
	return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}