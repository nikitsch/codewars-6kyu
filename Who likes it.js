// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

const joinNames = (arr) => {
  const [first, second, third, ...rest] = arr;
    
  if (rest.length) {
    return `${first}, ${second} and ${rest.length + 1} others like this`
  }

  const beginningNames = [first, second, third].filter(Boolean).join(', ');
  
  return beginningNames.replace(/, ([^,]+)$/, ' and $1') + (arr.length > 1 ? ' like this' : ' likes this');
}

function likes(names) {
  if (!names.length) return 'no one likes this';
  return joinNames(names)
}

const testCases = [
  [['Jacob', 'Alex'], 'Jacob and Alex like this'],
  [['Peter'], 'Peter likes this'],
  [[], 'no one likes this'],
  [['Max', 'John', 'Mark'], 'Max, John and Mark like this'],
  [['Alex', 'Jacob', 'Mark', 'Max'], 'Alex, Jacob and 2 others like this']
];

const test = testCases.every(([names, result]) => likes(names) === result)
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.log('%cTest failed', 'color: red; font-weight: bold;');
}