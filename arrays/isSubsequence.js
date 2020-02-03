// Check if chars in first string appears somewhere in second string
function isSubsequence (firstString, secondString) {
	if (firstString.length > secondString.length) {
		return false;
	} else {
		for (let i = 0; i < secondString.length; i++) {
			const firstLetter = firstString[0];
			if (secondString[i] === firstLetter) {
				firstString = firstString.slice(1);
			}
			if (firstString.length === 0) {
				return true;
			}
		}
		return false;
	}
}