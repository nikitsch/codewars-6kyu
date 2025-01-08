// Description:
// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// If the array is invalid (empty, or contains negative integers or integers with more than 1 digit), return nil (or your language's equivalent).

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6] (4325 + 1 = 4326)
// [1, 2, 3, 9] would return [1, 2, 4, 0] (1239 + 1 = 1240)
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0] (9999 + 1 = 10000)
// [0, 1, 3, 7] would return [0, 1, 3, 8] (0137 + 1 = 0138)
// Invalid arrays

// [] is invalid because it is empty
// [1, -9] is invalid because -9 is not a non-negative integer
// [1, 2, 33] is invalid because 33 is not a single-digit integer

function upArray(arr) {
  const isNull = arr.some((el) => el > 9 || el < 0);
  if (isNull || !arr.length) return null;

  const newNumber = BigInt(arr.join('')) + BigInt(1);

  return String(newNumber).padStart(arr.length, 0).split('').map(Number);
}

const testCases = [
  [
    [4, 3, 2, 5],
    [4, 3, 2, 6],
  ],
  [
    [2, 3, 9, 9],
    [2, 4, 0, 0],
  ],
  [
    [9, 9],
    [1, 0, 0],
  ],
  [
    [0, 7],
    [0, 8],
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
  ],
  [[1, -9], null],
  [[1, 10], null],
];

const test = testCases.every(([el, result]) => {
  const value = upArray(el);

  if (Array.isArray(result)) {
    return value.join() === result.join();
  }

  return value === result;
});
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.log('%cTest failed', 'color: red; font-weight: bold;');
}
