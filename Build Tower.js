// Description:
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

function towerBuilder(nFloors) {
  let arr = [];

  for (let i = 0; i < nFloors; i++) {
    let space = new Array(nFloors - i).join(' ');
    arr.push(space + '*'.repeat(i * 2 + 1) + space);
  }

  return arr;
}

const testCases = [
  [1, ["*"]],
  [2, [" * ","***"]],
  [3, ["  *  "," *** ","*****"]]
];

const test = testCases.every(([count, result]) => towerBuilder(count).join() === result.join());
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.error('Test failed');
}
