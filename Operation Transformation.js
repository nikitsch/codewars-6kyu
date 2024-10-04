// Description:
// You are given two positive integers a and b.

// You can perform the following operations on a so as to obtain b :

// (a-1)/2   (if (a-1) is divisible by 2)
// a/2       (if a is divisible by 2)
// a*2
// b will always be a power of 2.

// You are to write a function operation that efficiently returns the minimum number of operations required to transform a into b.

// For example :

// operation(2,8) -> 2
// 2*2 = 4
// 4*2 = 8

// operation(9,2) -> 2
// (9-1)/2 = 4
// 4/2 = 2

// operation(1024,1024) -> 0

function operation(a, b, count = 0) {
  if (!Number.isInteger(Math.log2(a))) {
    const isOdd = !!(a % 2);
    return operation((isOdd ? --a : a) / 2, b, ++count);
  }

  if (a > b) {
    return operation(a / 2, b, ++count);
  }
  
  return Math.log2(b) - Math.log2(a) + count;  
}

const testCases = [[[1, 1], 0], [[4, 16], 2]];

const test = testCases.every(([arr, result]) => operation(...arr) == result)
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.log('%cTest failed', 'color: red; font-weight: bold;');
}