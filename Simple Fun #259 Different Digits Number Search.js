// Task
// Given an array of integers arr, find the leftmost number that has a decimal representation which doesn't contain any digit more than once. If there is no such number, return -1 instead.

// Input/Output
// [input] array.integer arr

// Array of positive integers.

// 2 ≤ inputArray.length ≤ 100000,

// 10 ≤ inputArray[i] ≤ 10000000.

// [output] an integer

// Example
// For arr = [22, 111, 101, 124, 33, 30], the output should be 124

// For arr = [1111, 404], the output should be -1.

function differentDigitsNumberSearch(arr) {
  const result = arr.find((num) => {
    const digits = num.toString().split('');
    const uniqueDigits = new Set(digits);
    
    return digits.length === uniqueDigits.size;
  });

return result ?? -1;
}

const testCases = [
  [[22, 111, 101, 124, 33, 30], 124],
  [[1111, 404], -1],
  [[10, 11, 12, 13], 10]
];

const test = testCases.every(([arr, result]) => differentDigitsNumberSearch(arr) === result);
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.error('Test failed');
}