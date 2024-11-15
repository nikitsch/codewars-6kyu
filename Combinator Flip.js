// Create a combinator function named flip that takes a function as an argument and returns that function with it's arguments reversed.

// For example:

// flip(print)(4,5) // returns "5 -> 4"
// function print(a,b) {
//   return a + " -> " + b;
// }
// The idea is to reverse any number of arguments using a higher order function, without any concern for the function being passed into it.

function flip(fn) {
  return (...args) => fn(...(args.reverse()))
}

const testCases = [
  [flip((a, b) => a + " -> " + b), [4, 5], "5 -> 4"],
  [flip((a, b, c) => a * b * c), [2, 3, 4], 24],
  [flip((...args) => args.join("-")), ["one", "two", "three"], "three-two-one"],
  [flip((a, b) => a - b), [10, 5], -5],
  [flip(() => "Hello!"), [], "Hello!"]
];

const test = testCases.every(([fn, args, expected]) => {
  const result = fn(...args);
  return result === expected;
});
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.error('Test failed');
}