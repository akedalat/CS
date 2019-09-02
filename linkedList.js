// First element is value and second element is address of the next node
const firstNode = ['cameron', 123]
const secondNode = ['sloane', 132]
const thirdNode = ['ferris', null]

const collection = { 0: firstNode, 123: secondNode, 132: thirdNode }
const head = collection[0]

function next (node) {
  const nextAddress = node[1]
  // retrieve the address of the next element
  return collection[nextAddress]
}

// Find the next node by index
function indexAt (head, index) {
  let node = head
  for (let i = 0; i < index; i++) {
    node = next(node)
  }

  return node
}

// indexAt(head, 2) would give:
// ['ferris', null]
