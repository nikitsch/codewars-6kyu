// Description:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
  const str = numbers.join('');
  return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6)}`;
}

// Test:
(function () {
  try {
    const testCases = [
      [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], '(123) 456-7890'],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], '(111) 111-1111'],
      [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], '(123) 456-7890'],
    ];

    testCases.forEach(([arr, res]) => {
      const str = createPhoneNumber(arr);
      if (str !== res) {
        throw new Error(`Test failed. Expected ${str} to equal ${res}`);
      }
    });

    console.log('%cTest passed', 'color: green; font-weight: bold;');
  } catch (e) {
    console.error(e.message);
  }
})();
