// Check if passing arguments are duplicated
function areThereDuplicates () {
  const obj = {}
  for (const val in arguments) {
    obj[arguments[val]] = (obj[arguments[val]] || 0) + 1
  }
  return !!Object.values(obj).includes(2)
}

// Works if array is sorted
function countUniqueValues (array) {
  let i = 0
  if (array.length === 0) {
    return 0
  } else {
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++
        array[i] = array[j]
      }
    }
  }
  return i + 1
}

// Frequency Counter
// Check if two numbers have same numbers in them
function sameFrequency (int1, int2) {
  const array1 = Array.from(String(int1), Number)
  const array2 = Array.from(String(int2), Number)
  const obj1 = {}
  const obj2 = {}
  if (array1.length !== array2.length) {
    return false
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (obj1[array1[i]]) {
        obj1[array1[i]] += 1
      } else {
        obj1[array1[i]] = 1
      }
    }
  }
  for (let i = 0; i < array2.length; i++) {
    if (obj2[array2[i]]) {
      obj2[array2[i]] += 1
    } else {
      obj2[array2[i]] = 1
    }
  }
  for (const key in obj1) {
    if (!(key in obj2)) {
      return false
    } if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true
}

// Average Pair
// Check if a average pair equals targeted value
function averagePair (array, avgNum) {
  let first = 0
  let last = array.length - 1
  while (first < last) {
    const tempAvg = ((array[first] + array[last]) / 2)
    if (tempAvg === avgNum) { return true }
    if (tempAvg > avgNum) {
      last--
    } else {
      first++
    }
  }
  return false
}

// Check if chars in first string appears somewhere in second string
function isSubsequence (firstString, secondString) {
  if (firstString.length > secondString.length) {
    return false
  } else {
    for (let i = 0; i < secondString.length; i++) {
      const firstLetter = firstString[0]
      if (secondString[i] === firstLetter) {
        firstString = firstString.slice(1)
      }
      if (firstString.length === 0) {
        return true
      }
    }
    return false
  }
}

// Find maximum sum of subarray with the length of the number passed to the function
function maxSubarraySum (array, num) {
  let maxNum = null
  let tempMax = null
  if (num > array.length) {
    return null
  } else {
    for (let i = 0; i < num; i++) {
      maxNum += array[i]
    }
    tempMax = maxNum
    for (let i = num; i < array.length; i++) {
      tempMax = tempMax + array[i] - array[i - num]
      maxNum = Math.max(maxNum, tempMax)
    }

    return maxNum
  }
}
// for example
// maxSubarraySum([100,200,300,400],2) returns 700
// maxSubarraySum([-3,4,0,-2,6,-1], 2) returns 5
