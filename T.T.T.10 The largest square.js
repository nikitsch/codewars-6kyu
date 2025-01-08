// Description:
// Task
// Give you a 2D array wall:

// [
// ["X"," "," "," "," "," "],
// [" "," "," "," "," "," "],
// [" "," "," "," "," "," "],
// [" "," "," "," "," "," "],
// [" "," "," "," "," "," "],
// [" "," "," "," "," "," "]
// ]
// " " is the blank part, "X" is the hole in the wall, please find the largest square (no hole) on the wall, return its area.

// The above example should return 25, because the maximum square that can be found is 5X5

// Please see more example in testcases.

function max(wall) {
  const rows = wall.length;
  const cols = wall[0].length;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
  let maxSide = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (wall[i][j] === ' ') {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
        maxSide = Math.max(maxSide, dp[i][j]);
      }
    }
  }

  return maxSide * maxSide;
}

const testCases = [
  [
    [
      ['X', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', 'X'],
      [' ', ' ', ' ', ' ', ' ', ' '],
    ],
    25,
  ],
  [
    [
      ['X', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', 'X', ' ', ' ', 'X', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', 'X'],
      [' ', ' ', ' ', ' ', ' ', ' '],
    ],
    9,
  ],
  [
    [
      ['X', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', 'X', ' ', ' ', 'X', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', 'X', ' ', ' ', 'X'],
      [' ', ' ', ' ', ' ', ' ', ' '],
    ],
    4,
  ],
];

const test = testCases.every(([arr, result]) => max(arr) === result);
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.error('Test failed');
}
