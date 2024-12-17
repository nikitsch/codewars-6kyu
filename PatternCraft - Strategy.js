// Description:
// The Strategy Design Pattern can be used, for example, to determine how a unit moves in the StarCraft game.

// The pattern consists in having a different strategy to one functionality. A unit, for example, could move by walking or flying.

// Your Task
// Complete the code so that when a Viking is flying its position increases by 10 each time it moves. If it is walking then the position is increased by 1.

// In this Kata, Viking starts as a ground unit when it is created.

// You have 3 classes:

// Viking: has a position, moveBehavior and move method.
// Fly and Walk: the move behaviors with the move(unit) method. Fly has to move 10 positions at a time and Walk has to move 1.
// Resouces
// PatternCraft > Strategy
// SourceMaking > Strategy
// Wikipedia > Strategy
// PatternCraft series
// State Pattern
// Strategy Pattern
// Visitor Pattern
// Decorator Pattern
// Adapter Pattern
// Command Pattern
// The original PatternCraft series (by John Lindquist) is a collection of Youtube videos that explains some of the design patterns and how they are used (or could be) on StarCraft.

class Fly {
  move(unit) {
    return (unit.position += 10);
  }
}

class Walk {
  move(unit) {
    return unit.position++;
  }
}

class Viking {
  constructor() {
    this.position = 0;
    this.moveBehavior = new Walk();
  }

  move() {
    return this.moveBehavior.move(this);
  }
}

// Test Walk Move:
(function () {
  const viking = new Viking();

  try {
    viking.move();
    if (viking.position !== 1) {
      throw new Error(
        `Test \`Walk Move\` failed. Expected ${viking.position} to equal 1`,
      );
    }

    viking.move();
    if (viking.position !== 2) {
      throw new Error(
        `Test \`Walk Move\` failed. Expected ${viking.position} to equal 2`,
      );
    }

    console.log(
      '%cTest `Walk Move` passed',
      'color: green; font-weight: bold;',
    );
  } catch (e) {
    console.error(e.message);
  }
})();

// Test Fly Move:
(function () {
  const viking = new Viking();
  viking.moveBehavior = new Fly();

  try {
    viking.move();
    if (viking.position !== 10) {
      throw new Error(
        `Test \`Fly Move\` failed. Expected ${viking.position} to equal 10`,
      );
    }

    viking.move();
    if (viking.position !== 20) {
      throw new Error(
        `Test \`Fly Move\` failed. Expected ${viking.position} to equal 20`,
      );
    }

    console.log('%cTest `Fly Move` passed', 'color: green; font-weight: bold;');
  } catch (e) {
    console.error(e.message);
  }
})();

// Test Mix Move:
(function () {
  const viking = new Viking();

  try {
    viking.move();
    if (viking.position !== 1) {
      throw new Error(
        `Test \`Mix Move\` failed. Expected ${viking.position} to equal 1`,
      );
    }

    viking.moveBehavior = new Fly();
    viking.move();
    if (viking.position !== 11) {
      throw new Error(
        `Test \`Mix Move\` failed. Expected ${viking.position} to equal 11`,
      );
    }

    console.log('%cTest `Mix Move` passed', 'color: green; font-weight: bold;');
  } catch (e) {
    console.error(e.message);
  }
})();
