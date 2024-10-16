// Description:
// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
// The city provides its citizens with a Walk Generating App on their phones --
// everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
// You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
// so create a function that will return true if the walk the app gives you will take you exactly ten minutes
// (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
// It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let vertical = 0;
  let horizontal = 0;

  for (let direction of walk) {
    switch (direction) {
      case 'n':
        vertical++;
        break;

      case 's':
        vertical--;
        break;

      case 'e':
        horizontal++;
        break;

      case 'w':
        horizontal--;
        break;

      default:
        console.error('Hey dude! We live in four coordinates!')
    }
  }

  return vertical === 0 && horizontal === 0;
}

const testCases = [
  [['n','s','n','s','n','s','n','s','n','s'], true],
  [['w','e','w','e','w','e','w','e','w','e','w','e'], false],
  [['w'], false],
  [['n','n','n','s','n','s','n','s','n','s'], false]
];

const test = testCases.every(([arr, result]) => isValidWalk(arr) === result)
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.log('%cTest failed', 'color: red; font-weight: bold;');
}