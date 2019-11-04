// INSERTION SORT
function findMinAndRemove(array) {
  let min = array[0];
  let minIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function insertionSort(array) {
  let newMin;
  const sorted = [];
  while (array.length !== 0) {
    newMin = findMinAndRemove(array);
    sorted.push(newMin);
  }
  return sorted;
}

// Bubble Sort
// It checks for the largest number and put in the end of array
function bubbleSort(array) {
  // We use noSwap to avoid unnecessary iteration
  let noSwap;
  // The last number will be the largest in the 1st loop,
  // So we don't need to check the last number again
  for (let i = array.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noSwap = false;
      }
      if (noSwap) {
        console.log(array);
        return array;
      }
    }
  }
  console.log(array);
  return array;
}
bubbleSort([6, 1, 2, 3, 4, 5]);

//Selection Sort
// It checks for smallest number and put it in front of array
