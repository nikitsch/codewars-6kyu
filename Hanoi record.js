// Description:
// The task
// Your task, is to calculate the minimal number of moves to win the game "Towers of Hanoi", with given number of disks.

// What is "Towers of Hanoi"?
// Towers of Hanoi is a simple game consisting of three rods, and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape.

// The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:

// Only one disk can be moved at a time.
// Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
// No disk may be placed on top of a smaller disk.

const hanoi = (disks) => 2 ** disks - 1;

const testCases = [
  [1, 1],
  [2, 3],
  [3, 7],
  [5, 31],
  [10, 1023],
  [20, 1048575],
];

const test = testCases.every(([disks, result]) => hanoi(disks) === result);
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.error('Test failed');
}
