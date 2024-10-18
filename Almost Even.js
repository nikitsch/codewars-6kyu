// Description:
// We need the ability to divide an unknown integer into a given number of even parts - or at least as even as they can be. The sum of the parts should be the original value,
// but each part should be an integer, and they should be as close as possible.

// Complete the function so that it returns an array of integers representing the parts. If the input number is too small to split it into requested amount of parts,
// the additional parts should have value 0. Ignoring the order of the parts, there is only one valid solution for each input to your function!

// Example:
// splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
// Inputs
// The input to your function will always be valid for this kata.

var splitInteger = function(num, parts) {
  const separat = Math.floor(num / parts);
  if (separat === 0) return 0;

  const res = new Array(parts).fill(separat)
  const diff = num - res.reduce((acc, cur) => acc + cur);
  if (diff !== 0) {
    return res.map((el, i) => (i + 1) <= diff ? (el + 1) : el)
  }

  return res;
}

const testCases = [
  [[10, 1], [10]],
  [[2, 2], [1, 1]],
  [[20, 5], [4, 4, 4, 4, 4]],
  [[20, 6], [3, 3, 3, 3, 4, 4]]
];

const test = testCases.every(([arr, result]) => splitInteger(...arr).sort().join() === result.join())
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.error('Test failed');
}