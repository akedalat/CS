// Fisrt element is value and second element is address of the next node
let firstNode = ['cameron', 123]
let secondNode = ['sloane', 132]
let thirdNode = ['ferris', null]
 
let collection = {0: firstNode, 123: secondNode, 132: thirdNode}
let head = collection[0];
 
function next(node){
  let nextAddress = node[1] 
  // retrieve the address of the next element
  return collection[nextAddress]
}