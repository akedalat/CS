// Check if passing arguments are dublicated
function areThereDuplicates() {
    let obj = {};
 for(let val in arguments){
     obj[arguments[val]] = (obj[arguments[val]] || 0) + 1;
 } 
 return Object.values(obj).includes(2) ? true : false
} 