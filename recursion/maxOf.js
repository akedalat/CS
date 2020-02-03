// Max Of
function maxOf(array){
	if(array.length === 1){
		return array[0];
	}
	else{
		return Math.max(array.pop(), maxOf(array));
	}
}