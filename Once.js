// Description:
// You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

// Subsequent calls to the resulting function should have no effect (and should return undefined).

// For example:

// logOnce = once(console.log)
// logOnce("foo") // -> "foo"
// logOnce("bar") // -> no effect

function once(fn) {
  let called = false;

  return function(...arguments) { 
    if (!called) { 
      called = true;

      return fn.apply(this, arguments);
    }
  }
}

const testCases = [
  [
    (() => {
      let count = 0;
      const increment = once(() => ++count);
      increment(); // -> count = 1
      increment(); // -> no effect
      return count;
    })(),
    1
  ],
  [
    (() => {
      const logOnce = once(console.log);
      let output = [];
      const mockConsoleLog = (msg) => output.push(msg);
      const logMock = once(mockConsoleLog);
      logMock("first call"); // -> "first call"
      logMock("second call"); // -> no effect
      return output.join(",");
    })(),
    "first call"
  ],
  [
    (() => {
      const returnOnce = once((x) => x * 2);
      const result1 = returnOnce(5); // -> 10
      const result2 = returnOnce(10); // -> no effect
      return [result1, result2];
    })(),
    [10, undefined]
  ],
  [
    (() => {
      const noArgsOnce = once(() => "only once");
      const result1 = noArgsOnce(); // -> "only once"
      const result2 = noArgsOnce(); // -> no effect
      return [result1, result2];
    })(),
    ["only once", undefined]
  ]
];

const test = testCases.every(([actual, expected]) => {
  if (Array.isArray(actual)) {
    return JSON.stringify(actual) === JSON.stringify(expected);
  }
  return actual === expected;
});

if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.error('Test failed');
}