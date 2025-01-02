// Description:
// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str == "" return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// ("123456987654", 6) --> "234561876549"
// ("123456987653", 6) --> "234561356789"
// ("66443875", 4) --> "44668753"
// ("66443875", 8) --> "64438756"
// ("664438769", 8) --> "67834466"
// ("123456779", 8) --> "23456771"
// ("", 8) --> ""
// ("123456779", 0) --> "" 
// ("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".

function revrot(str, sz) {
  if (sz <= 0 || sz > str.length) {
    return '';
  }

  const cycles = Math.floor(str.length / sz);
  const digits = [];

  for (let i = 0; i < cycles; i++) {
    digits.push(str.slice(i * sz, i * sz + sz));
  }

  const rotate = (d) => d.slice(1) + d.slice(0, 1);
  const reverse = (d) => d.split('').reverse().join('');
  const sum = (d) => d.split('').reduce((acc, cur) => acc + cur ** 3, 0);

  return digits
    .map((digit) => (sum(digit) % 2 ? rotate(digit) : reverse(digit)))
    .join('');
}

// Test:
(function () {
  try {
    const testCases = [
      [['1234', 0], ''],
      [['', 0], ''],
      [['1234', 5], ''],
      [['733049910872815764', 5], '330479108928157'],
    ];

    testCases.forEach(([arg, res]) => {
      if (revrot(...arg) !== res) {
        throw new Error(`Test failed. Expected ${arg[0]} to equal ${res}`);
      }
    });

    console.log('%cTest passed', 'color: green; font-weight: bold;');
  } catch (e) {
    console.error(e.message);
  }
})();
