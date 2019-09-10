
// Count Down
function countDown(n) {
  console.log(n)
  if (n === 0){
  return
      } else {
          countDown(n-1)	
      }
  } 

//Sum Up To
function sumUpTo(n){
  if (n > 1){
      //Remember in Recursion (function call itself)
      //it has to call the function up until the end (base case)
      //and then returns back up to the first call/function
      return sumUpTo(n - 1) + n
  } else {
      return 1	
      }
  }

//Print String Characters
function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

  //Reverse String
  function reverseString(string){
      if(string.length < 1){
        return ""
      }else{
        return reverseString(string.substring(1)) + string[0]
      }
  }

  //Palindrome
  function isPalindrome(string){
  if (string.length > 1){
    if(string[0] === string[string.length - 1]){
    isPalindrome(string.substring(1, string.length - 1))
    return true
      }
      else{
        return false
      }
    }
  }

   //Add Up To Solution 1
   function addUpTo(array, index){
    let slicedArray = array.slice(0, index + 1)
    if(slicedArray.length > 0){
      return addUpTo((slicedArray.slice(0, slicedArray.length - 1)), index) + slicedArray[slicedArray.length - 1] 
    }
    else{
      return false
    }
  }

  //Add Up To Solution 2
  function addUpTo(myArray, index) {
    return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
  }

  // Max Of
  function maxOf(array){
    if(array.length === 1){
     return array[0]
  }
  else{
      return Math.max(array.pop(), maxOf(array))
    }
  }

  //Includes a Number 
  function includesNumber(array, n){
    if (array.length === 0){
      return false
    }
    if(n === array[0]){
      return true
      } 
    else {
      return includesNumber(array.slice(1), n)
    }
  }

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(array){
  if (array.length === 0){ return 1 }
  return array[0] * productOfArray(array.slice(1))
}                   

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
function someRecursive(array, callBack){
  if(array.length === 0) { return false }
  if(callBack(array[0])) { return true }
  else { return someRecursive(array.slice(1), callBack) }
}

// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
function flatten(array){
  let newArr = []
  for(let i = 0; i < array.length; i++){
  if (typeof(array[i]) === 'object') { 
      newArr = newArr.concat(flatten(array[i])) }
    else { newArr.push(array[i]) }
  }
  return newArr
}
