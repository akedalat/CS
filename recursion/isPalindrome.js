
//Palindrome
function isPalindrome(string){
	if (string.length > 1){
		if(string[0] === string[string.length - 1]){
			isPalindrome(string.substring(1, string.length - 1));
			return true;
		}
		else{
			return false;
		}
	}
}