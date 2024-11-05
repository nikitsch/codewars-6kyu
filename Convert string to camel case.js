// Description:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  const [first, ...restWords] = str.split((/\-|\_/));
  const phrase = restWords.map(word => word[0].toUpperCase() + word.slice(1)).join('');

  return `${first}${phrase}`
}

const testCases = [
  ['', ''],
  ["the_stealth_warrior", "theStealthWarrior"],
  ["The-Stealth-Warrior", "TheStealthWarrior"],
  ["A-B-C", "ABC"]
];

const test = testCases.every(
  ([string, result]) => toCamelCase(string) === result,
);
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.error('Test failed');
}