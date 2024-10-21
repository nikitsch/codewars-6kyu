// Description:
// Task
// Imagine a white rectangular grid of n rows and m columns divided into two parts by a diagonal line running from the upper left to the lower right corner.Now let's paint the grid in two colors according to the following rules:

//  A cell is painted black if it has at least one point in common with the diagonal;
// Otherwise, a cell is painted white.
// Count the number of cells painted black.

// Example
// For n = 3 and m = 4, the output should be 6

// There are 6 cells that have at least one common point with the diagonal and therefore are painted black.

// For n = 3 and m = 3, the output should be 7

// 7 cells have at least one common point with the diagonal and are painted black.

// Input/Output
// [input] integer n

// The number of rows.

// Constraints: 1 ≤ n ≤ 10000.

// [input] integer m

// The number of columns.

// Constraints: 1 ≤ m ≤ 10000.

// [output] an integer

// The number of black cells.

const gcd = (a, b) => b ? gcd(b, a % b) : a;

function countBlackCells(n, m) {
  let s;
  let r = 0;
  let t = 0;

  if (n > m) {
    s = n;
    n = m;
    m = s;
  }

  s = 0;

  for (let i = 0; i < n / gcd(m, n); i++) {
    t = m / n + r;
    s += Math.ceil(t);
    r = (t - 0.000001) % 1;
  }

  return gcd(m, n) * s + (gcd(m, n) - 1) * 2;
}

const testCases = [
  [[3,4], 6],
  [[3,3], 7],
  [[2,5], 6],
  [[1,1], 1],
  [[1,2], 2],
  [[1,239], 239],
  [[31,45], 75],
  [[33,44], 86],
  [[16,8], 30],
  [[6666,8888], 17774]
];

const test = testCases.every(([arr, result]) => countBlackCells(...arr) === result)
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.error('Test failed');
}