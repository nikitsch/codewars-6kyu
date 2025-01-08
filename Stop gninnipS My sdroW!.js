// Description:
// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

function spinWords(string) {
  return string
    .split(' ')
    .map((elem) => (elem.length > 4 ? elem.split('').reverse().join('') : elem))
    .join(' ');
}

const testCases = [
  ['Welcome', 'emocleW'],
  ['Hey fellow warriors', 'Hey wollef sroirraw'],
  ['This is a test', 'This is a test'],
  ['This is another test', 'This is rehtona test'],
  ['You are almost to the last test', 'You are tsomla to the last test'],
  [
    'Just kidding there is still one more',
    'Just gniddik ereht is llits one more',
  ],
  ['Seriously this is the last one', 'ylsuoireS this is the last one'],
];

const test = testCases.every(
  ([string, result]) => spinWords(string) === result
);
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.error('Test failed');
}
