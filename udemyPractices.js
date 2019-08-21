// Check if passing arguments are dublicated
function areThereDuplicates() {
    let obj = {};
 for(let val in arguments){
     obj[arguments[val]] = (obj[arguments[val]] || 0) + 1;
 } 
 return Object.values(obj).includes(2) ? true : false
} 

// Frequency Counter
// Check if two numbers have same numbers in them
function sameFrequency(int1, int2){
    let array1 = Array.from(String(int1), Number);
    let array2 = Array.from(String(int2), Number);
    let obj1 = {};
    let obj2 = {};
      if(array1.length !== array2.length){
          return false;
      } else
      for(let i = 0; i < array1.length; i++){
          if(obj1[array1[i]]){
            obj1[array1[i]] += 1;
          } else { 
            obj1[array1[i]] = 1;
          }
      }
      for(let i = 0; i < array2.length; i++){
          if(obj2[array2[i]]){
            obj2[array2[i]] += 1;
          } else { 
            obj2[array2[i]] = 1;
          }
      }
      for(let key in obj1){
          if(!(key in obj2)){
              return false;
          } if (obj1[key] != obj2[key]){
              return false;
          }
      }
      return true;
    }