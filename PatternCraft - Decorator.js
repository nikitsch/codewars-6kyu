// Description:
// The Decorator Design Pattern can be used, for example, in the StarCraft game to manage upgrades.

// The pattern consists in "incrementing" your base class with extra functionality.

// A decorator will receive an instance of the base class and use it to create a new instance with the new things you want "added on it".

// Your Task
// Complete the code so that when a Marine gets a WeaponUpgrade it increases the damage by 1, and if it is a ArmorUpgrade then increase the armor by 1.

// You have 3 classes:

// Marine: has a damage and an armor properties
// MarineWeaponUpgrade and MarineArmorUpgrade: upgrades to apply on marine. Accepts a Marine in the constructor and has the same properties as the Marine
// Resouces
// PatternCraft > Decorator
// SourceMaking > Decorator
// Wikipedia > Decorator
// PatternCraft series
// State Pattern
// Strategy Pattern
// Visitor Pattern
// Decorator Pattern
// Adapter Pattern
// Command Pattern
// The original PatternCraft series (by John Lindquist) is a collection of Youtube videos that explains some of the design patterns and how they are used (or could be) on StarCraft.

class Marine {
  constructor(_damage, _armor) {
    this.damage = _damage || 0;
    this.armor = _armor || 0;
  };
};

class MarineWeaponUpgrade {
  constructor(marine) {
    this.damage = marine.damage + 1;
    this.armor = marine.armor;
  };
};

class MarineArmorUpgrade {
  constructor(marine) {
    this.damage = marine.damage;
    this.armor = marine.armor + 1;
  };
};

// Test Single upgrade:
  (function() {
    try {
      let marine = new Marine(10, 1);

      const testCases = [
        [new MarineWeaponUpgrade(marine).damage, 11],
        [new MarineWeaponUpgrade(marine).damage, 11]
      ];

      testCases.forEach(([fn, res]) => {
        if (fn !== res) {
          throw new Error(`Test \`Double upgrade\` failed. Expected ${fn} to equal ${res}`)
        }
      })

      console.log('%cTest `Single upgrade` passed', 'color: green; font-weight: bold;');
    } catch (e) {
      console.error(e.message);
    }
  })();

  // Test Double upgrade:
  (function() {
    let marine = new Marine(15, 1);
    marine = new MarineWeaponUpgrade(marine);
    marine = new MarineWeaponUpgrade(marine);

    if (marine.damage === 17) {
      console.log('%cTest `Double upgrade` passed', 'color: green; font-weight: bold;');
    } else {
      console.error('Test `Double upgrade` failed');
    }
  })();

  // Test Triple upgrade:
  (function() {
    let marine = new Marine(20, 1);
    marine = new MarineArmorUpgrade(marine);
    marine = new MarineArmorUpgrade(marine);
    marine = new MarineArmorUpgrade(marine);

    if (marine.armor === 4) {
      console.log('%cTest `Triple upgrade` passed', 'color: green; font-weight: bold;');
    } else {
      console.error('Test `Triple upgrade` failed');
    }
  })();
