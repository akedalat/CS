//Includes a Number 
function includesNumber(array, n){
	if (array.length === 0){
		return false;
	}
	if(n === array[0]){
		return true;
	} 
	else {
		return includesNumber(array.slice(1), n);
	}
}