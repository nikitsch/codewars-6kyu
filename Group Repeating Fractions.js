// Description:
// Write

// function repeatingFractions(numerator, denominator)
// that given two numbers representing the numerator and denominator of a fraction, return the fraction in string format.
// If the fractional part has repeated digits, replace those digits with a single digit in parentheses.

// For example:

// repeatingFractions(1,1) === '1'
// repeatingFractions(1,3) === '0.(3)'
// repeatingFractions(2,888) === '0.(0)(2)5(2)5(2)5(2)5(2)5(2)'

function repeatingFractions(numerator, denominator) {
  const res = String(numerator / denominator);
  const split = res.split(".");
  if (!split[1]) return res;
  const resSec = [];
  split[1].split("").map((el) => {
    const last = resSec[resSec.length - 1];
    if (last === "(" + el + ")") return;
    if (last === el) {
      resSec.pop();
      resSec.push("(" + el + ")");
      return;
    }
    resSec.push(el);
  });
   return split[0] + "." + resSec.join("");
}

const testCases = [
  [[1,1], '1'],
  [[1,2], '0.5'],
  [[1,3], '0.(3)'],
  [[2,888], '0.(0)(2)5(2)5(2)5(2)5(2)5(2)'],
  [[1554,70], '22.2']
];

const test = testCases.every(([arr, result]) => repeatingFractions(...arr) === result)
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.error('Test failed');
}