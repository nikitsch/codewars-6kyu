// Description:
// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

// Example
// var numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]

function checkArr(arr) {
  return (
    Array.isArray(arr) ||
    Object.prototype.toString.call(arr) === '[object Array]'
  );
}

const error = 'Params must be a array';

Array.prototype.square = function () {
  if (checkArr(this)) {
    return this.map((item) => {
      return Math.pow(item, 2);
    });
  } else {
    throw error;
  }
};

Array.prototype.cube = function () {
  if (checkArr(this)) {
    return this.map((item) => {
      return Math.pow(item, 3);
    });
  } else {
    throw error;
  }
};

Array.prototype.sum = function () {
  if (checkArr(this)) {
    return this.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);
  } else {
    throw error;
  }
};

Array.prototype.average = function () {
  if (checkArr(this)) {
    return this.sum() / this.length;
  } else {
    throw error;
  }
};

Array.prototype.even = function () {
  if (checkArr(this)) {
    return this.filter((item) => {
      return !(item & 1);
    });
  } else {
    throw error;
  }
};

Array.prototype.odd = function () {
  if (checkArr(this)) {
    return this.filter((item) => {
      return item & 1;
    });
  } else {
    throw error;
  }
};

const numbers = [1, 2, 3, 4, 5];

const testCases = [
  [numbers.square(), [1, 4, 9, 16, 25]],
  [numbers.cube(), [1, 8, 27, 64, 125]],
  [numbers.sum(), 15],
  [numbers.average(), 3],
  [numbers.even(), [2, 4]],
  [numbers.odd(), [1, 3, 5]],
];

const test = testCases.every(([fn, result]) => {
  if (Array.isArray(result)) {
    return fn.join() === result.join();
  }

  return fn === result;
});
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.error('Test failed');
}
