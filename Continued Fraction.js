// Description:
// In this kata, you will have to return the continued fractionwiki of a fraction.

// For example, if the numerator is 311 and the denominator is 144, then you would have to return [2, 6, 3, 1, 5], because:
 
// If the numerator is 0, you should return [].

function continuedFraction(numerator,denominator) {
  if (numerator === 0) return [];
  
  let a = [];
  let b = [];
  let remainder = numerator % denominator;

  while (remainder !== 0) {
    let quotient = Math.floor(numerator / denominator);
    a.push(quotient);
    numerator = denominator;
    denominator = remainder;
    remainder = numerator % denominator;
  }

  a.push(Math.floor(numerator / denominator));

  return a;
}

const testCases = [
  [[311,144], [2,6,3,1,5]],
  [[761,327], [2,3,17,1,5]],
  [[1721,9], [191,4,2]],
  [[1089,9], [121]],
  [[11011,13], [847]],
  [[1173,17], [69]],
  [[0,15], []],
];

const test = testCases.every(([arr, result]) => continuedFraction(...arr).join() === result.join())
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.log('%cTest failed', 'color: red; font-weight: bold;');
}