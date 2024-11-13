// Description:
// Mutual Recursion allows us to take the fun of regular recursion (where a function calls itself until a terminating condition) and apply it to multiple functions calling each other!

// Let's use the Hofstadter Female and Male sequences to demonstrate this technique. You'll want to create two functions F and M such that the following equations are true:

// F(0) = 1
// M(0) = 0
// F(n) = n - M(F(n - 1))
// M(n) = n - F(M(n - 1))
// Don't worry about negative numbers, n will always be greater than or equal to zero.

// Hofstadter Wikipedia Reference http://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Female_and_Male_sequences

function F(n) { 
  if (n === 0) return 1
  return n - M(F(n - 1))
}

function M(n) { 
  if (n === 0) return 0
  return n - F(M(n - 1))
}

const testCases = [
  [[0], 1, 'F'],
  [[1], 1, 'F'],
  [[2], 2, 'F'],
  [[3], 2, 'F'],
  [[4], 3, 'F'],
  [[5], 3, 'F'],
  [[6], 4, 'F'],
  [[7], 5, 'F'],
  [[8], 5, 'F'],
  [[9], 6, 'F'],
  [[0], 0, 'M'],
  [[1], 0, 'M'],
  [[2], 1, 'M'],
  [[3], 2, 'M'],
  [[4], 2, 'M'],
  [[5], 3, 'M'],
  [[6], 4, 'M'],
  [[7], 4, 'M'],
  [[8], 5, 'M'],
  [[9], 6, 'M'],
];

const test = testCases.every(([args, expected, func]) => {
  const result = func === 'F' ? F(...args) : M(...args);
  return result === expected;
});

if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.error('Test failed');
}