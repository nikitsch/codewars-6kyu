// Description:
// Design a data structure that supports the following two operations:

// addWord (or add_word) which adds a word,
// search which searches a literal word or a regular expression string containing lowercase letters "a-z" or "." where "." can represent any letter
// You may assume that all given words contain only lowercase letters.

// Examples
// addWord("bad")
// addWord("dad")
// addWord("mad")

// search("pad") === false
// search("bad") === true
// search(".ad") === true
// search("b..") === true
// Note: the data structure will be initialized multiple times during the tests!

const WordDictionary = function () {
  this.str = [];
};

WordDictionary.prototype.addWord = function (words) {
  this.str.push(words);
};

WordDictionary.prototype.search = function (words) {
  const a = new RegExp('^' + words + '$');
  return this.str.find((k) => a.test(k)) !== undefined;
};

// Test First:
(function () {
  try {
    const wd = new WordDictionary();
    wd.addWord('a');
    wd.addWord('at');
    wd.addWord('ate');
    wd.addWord('ear');

    const testCases = [
      ['a', true],
      ['a.', true],
      ['a.e', true],
      ['b', false],
      ['e.', false],
      ['ea.', true],
      ['ea..', false],
    ];

    const test = testCases.every(([str, res]) => wd.search(str) === res);
    if (!test) {
      throw new Error(`Test \`First\` failed.`);
    }

    console.log('%cTest `First` passed', 'color: green; font-weight: bold;');
  } catch (e) {
    console.error(e.message);
  }
})();

// Test Second:
(function () {
  try {
    const wd = new WordDictionary();
    wd.addWord('co');
    wd.addWord('cod');
    wd.addWord('code');
    wd.addWord('codewars');

    const testCases = [
      ['........', true],
      ['c.o', false],
      ['cod.', true],
      ['c.o', false],
      ['co..w..s', true],
      ['co..w..', false],
    ];

    const test = testCases.every(([str, res]) => wd.search(str) === res);
    if (!test) {
      throw new Error(`Test \`Second\` failed.`);
    }

    console.log('%cTest `Second` passed', 'color: green; font-weight: bold;');
  } catch (e) {
    console.error(e.message);
  }
})();
