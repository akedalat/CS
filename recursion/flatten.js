
function flatten(array){
	let newArr = [];
	for(let i = 0; i < array.length; i++){
		if (typeof(array[i]) === "object") { 
			newArr = newArr.concat(flatten(array[i])); }
		else { newArr.push(array[i]); }
	}
	return newArr;
}

flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]); // [1,2,3]
