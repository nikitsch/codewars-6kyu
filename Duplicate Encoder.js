// Description:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
  const arr = [...word.toLowerCase()];
  const duplicates = arr.reduce(
    (acc, cur) => ({ ...acc, [cur]: [cur] in acc }),
    {}
  );

  return arr.map((letter) => (duplicates[letter] ? ')' : '(')).join('');
}

// Test:
(function () {
  try {
    const testCases = [
      ['recede', '()()()'],
      ['din', '((('],
      ['Success', ')())())', 'should ignore case'],
      ['(( @', '))(('],
    ];

    testCases.forEach(([word, res]) => {
      const fn = duplicateEncode(word);
      if (fn !== res) {
        throw new Error(`Test failed. Expected ${fn} to equal ${res}`);
      }
    });

    console.log('%cTest passed', 'color: green; font-weight: bold;');
  } catch (e) {
    console.error(e.message);
  }
})();
