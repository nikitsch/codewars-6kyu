// Description:
// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
// The input will always be an array.

function deepCount(a) {
  return a.reduce(
    (v, d) => v + (Array.isArray(d) ? deepCount(d) : 0),
    a.length
  );
}

// Test:
const testCases = [
  [[], 0],
  [[1, 2, 3], 3],
  [['x', 'y', ['z']], 4],
  [[1, 2, [3, 4, [5]]], 7],
  [[[[[[[[[[]]]]]]]]], 8],
];

const test = testCases.every(([arr, res]) => deepCount(arr) === res);
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.error('Test failed');
}
