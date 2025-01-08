// Description:
// You are developing an image hosting website.

// You have to create a function for generating random and unique image filenames.

// Create a function for generating a random 6 character nameing which will be used to access the photo URL.

// To make sure the name is not already in use, you are given access to an PhotoManager object.

// You can call it like so to make sure the name is unique

// // at this point, the website has only one photo, hosted on the 'ABCDEF' url
// photoManager.nameExists('ABCDEF'); // returns true
// photoManager.nameExists('BBCDEF'); // returns false
// Note: We consider two names with same letters but different cases to be unique.

function generateName() {
  const symbols =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let name = '';

  for (let i = 0; i < 6; i++) {
    name += symbols[Math.floor(Math.random() * symbols.length)];
  }

  if (photoManager.nameExists(name)) return generateName();

  return name;
}

// Test:
const photoManager = {
  usedNames: new Set(),
  nameExists(name) {
    return this.usedNames.has(name);
  },
  nameWasUnique(name) {
    if (this.nameExists(name)) return false;
    this.usedNames.add(name);
    return true;
  },
};

(function () {
  for (let i = 0; i < 55; i++) {
    const name = generateName();

    if (typeof name !== 'string') {
      console.error(`Test failed: Name is not a string. Got: ${typeof name}`);
      return;
    }

    if (!photoManager.nameWasUnique(name)) {
      console.error(`Test failed: Name "${name}" is not unique.`);
      return;
    }

    if (name.length !== 6) {
      console.error(
        `Test failed: Name "${name}" is not 6 characters long. Got length: ${name.length}`
      );
      return;
    }
  }

  console.log('%cTest passed', 'color: green; font-weight: bold;');
})();
