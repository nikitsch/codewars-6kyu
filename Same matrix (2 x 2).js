// Description:
// You have some 2*2 matrices, each matrix is represented by an array of length 4.

// such as [a, b, c, d] is matrix

// a b
// c d
// Matrix can be rotated:

// a b   90 degrees  c a  180 degrees  d c  270 degrees  b d
// c d  -----------> d b  -----------> b a  -----------> a c
// If matrix A can be obtained by rotating matrix B clockwise by 0, 90, 180 or 270 degrees, we think that A and B are the same matrix.

// For example, the following matrices are considered the same.

// 1 2
// 3 4

// 3 1
// 4 2

// 4 3
// 2 1

// 2 4
// 1 3
// The task of this kata is to count how many different matrices you have.

// Samples

// Same as the above example.
// count_different_matrices([[1, 2, 3, 4],
//                           [3, 1, 4, 2],
//                           [4, 3, 2, 1],
//                           [2, 4, 1, 3]]);

//should return '1'
// Notes

// All the matrices' elements are integers between 1 and 9, and the number of matrices will not exceed 1000.

const rotateMatrix = ([a, b, c, d], times) => {
  switch (times) {
    case 1:
      return [c, a, d, b];
    case 2:
      return [d, c, b, a];
    case 3:
      return [b, d, a, c];
    default:
      return [a, b, c, d];
  }
};

const isArraysIdentical = (arr1, arr2) =>
  [0, 1, 2, 3].some((time) =>
    rotateMatrix(arr2, time).every((el, i) => el === arr1[i])
  );

function countDifferentMatrices(matrices) {
  const [firstMatrice, ...restMatrices] = matrices;

  const res = restMatrices.reduce(
    (acc, cur) => {
      const isMatrixRepeated = acc.repetitions.some((repetition) =>
        isArraysIdentical(repetition, cur)
      );

      if (!isMatrixRepeated) {
        acc.repetitions.push(cur);
        acc.count++;
      }

      return acc;
    },
    { repetitions: [firstMatrice], count: 1 }
  );

  return res.count;
}

const testCases = [
  [
    [
      [1, 2, 3, 4],
      [3, 1, 4, 2],
      [4, 3, 2, 1],
      [2, 4, 1, 3],
    ],
    1,
  ],
  [
    [
      [3, 1, 2, 3],
      [3, 1, 2, 3],
      [1, 3, 3, 2],
      [3, 2, 1, 3],
    ],
    1,
  ],
  [
    [
      [5, 1, 2, 6],
      [5, 4, 3, 5],
      [2, 5, 6, 1],
    ],
    2,
  ],
  [
    [
      [1, 2, 2, 1],
      [1, 1, 2, 2],
      [2, 1, 1, 2],
      [2, 1, 2, 1],
      [1, 2, 1, 2],
    ],
    2,
  ],
];

const test = testCases.every(
  ([arr, result]) => countDifferentMatrices(arr) === result
);
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.log('%cTest failed', 'color: red; font-weight: bold;');
}
