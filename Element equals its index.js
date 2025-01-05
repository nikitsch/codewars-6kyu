// Description:
// Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index.
// Return -1 if there is no such index.

// Your algorithm should be very performant.

// [input] array of integers ( with 0-based nonnegative indexing )
// [output] integer

// Examples:
// input: [-8,0,2,5]
// output: 2 # since array[2] == 2

// input: [-1,0,3,6]
// output: -1 # since no index in array satisfies array[index] == index
// Random Tests Constraints:
// Array length: 200 000

// Amount of tests: 1 000

// Time limit: 150 ms

// If you liked this Kata check out my more complex creations:

// Find the neighbourhood in big dimensions. Neighbourhood collection

// The Rubik's cube

function indexEqualsValue(a) {
  let firstEl = 0;
  let pLast = a.length - 1;

  while (firstEl <= pLast) {
    const num = Math.floor((firstEl + pLast) / 2);
    if (a[num] < num) {
      firstEl = num + 1;
    } else if (a[num] === num && (num === 0 || a[num - 1] < num - 1)) {
      return num;
    } else {
      pLast = num - 1;
    }
  }

  return -1;
}

// Test:
(function () {
  try {
    const testCases = [
      [[-8, 0, 2, 5], 2],
      [[-1, 0, 3, 6], -1],
      [[-3, 0, 1, 3, 10], 3],
      [[-5, 1, 2, 3, 4, 5, 7, 10, 15], 1],
      [[9, 10, 11, 12, 13, 14], -1],
      [[0], 0],
    ];

    testCases.forEach(([arr, res]) => {
      const fn = indexEqualsValue(arr);
      if (fn !== res) {
        throw new Error(`Test failed. Expected ${fn} to equal ${res}`);
      }
    });

    console.log('%cTest passed', 'color: green; font-weight: bold;');
  } catch (e) {
    console.error(e.message);
  }
})();
