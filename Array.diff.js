// Description:
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  return a.filter((el) => !b.includes(el));
}

// Test:
(function () {
  try {
    const testCases = [
      [[1, 2], [1], [2]],
      [[1, 2, 2], [1], [2, 2]],
      [[1, 2, 2], [2], [1]],
      [[1, 2, 2], [], [1, 2, 2]],
      [[], [1, 2], []],
      [[1, 2, 3], [1, 2], [3]],
    ];

    testCases.forEach(([minuend, subtrahend, difference]) => {
      const fn = arrayDiff(minuend, subtrahend);
      if (JSON.stringify(fn) !== JSON.stringify(difference)) {
        throw new Error(`Test failed. Expected ${fn} to equal ${difference}`);
      }
    });

    console.log('%cTest passed', 'color: green; font-weight: bold;');
  } catch (e) {
    console.error(e.message);
  }
})();
