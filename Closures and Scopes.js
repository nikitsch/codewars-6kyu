// Description:
// We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:

// var callbacks = createFunctions(5); // create an array, containing 5 functions

// callbacks[0](); // must return 0
// callbacks[3](); // must return 3
// We already implemented that function, but when we actually run the code, the result doesn't look like what we expected. Can you spot, what's wrong with it? A test fixture is also available

function createFunctions(n) {
  const callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}

//Test:
(function () {
  try {
    const testCases = [];
    const func = createFunctions(5);

    for (let i = 0; i < func.length; i++) {
      testCases.push([func[i](), i]);
    }

    testCases.forEach(([fn, res]) => {
      if (fn !== res) {
        throw new Error(
          `Test \`Functions must return correct number\` failed. Expected ${fn} to equal ${res}`
        );
      }
    });

    console.log(
      `%cTest \`Functions must return correct number\` passed`,
      'color: green; font-weight: bold;'
    );
  } catch (e) {
    console.error(e.message);
  }
})();
