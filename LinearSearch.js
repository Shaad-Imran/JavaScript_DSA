// Problem - Given an array of n elements and a target element t find the index of t in the array. Return -1 if the target element is not found.

function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex([1, 5, 9], 5));
console.log(findIndex([1, 5, 9], 3));
console.log(findIndex([1, 5, 9, 18, 27], 27));
console.log(findIndex([1, 5, 9, 18, 27, 50], 10));
// Big-O = O(n)
