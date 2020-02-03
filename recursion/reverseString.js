//Reverse String
function reverseString(string){
	if(string.length < 1){
		return "";
	}else{
		return reverseString(string.substring(1)) + string[0];
	}
}