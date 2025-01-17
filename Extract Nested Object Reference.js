// Description:
// You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.

// var obj = {
//   person: {
//     name: 'joe',
//     history: {
//       hometown: 'bratislava',
//       bio: {
//         funFact: 'I like fishing.'
//       }
//     }
//   }
// };

// obj.hash('person.name'); // 'joe'
// obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
// obj.hash('person.history.homeStreet'); // undefined
// obj.hash('person.animal.pet.needNoseAntEater'); // undefined

Object.prototype.hash = function (string) {
  return string.split('.').reduce((acc, key) => acc?.[key], this);
};

// Test:
const testCases = [
  ['person.name', 'joe'],
  ['person.history.bio', { funFact: 'I like fishing.' }],
  ['person.history.bio.', undefined],
  ['person.history.homeStreet', undefined],
  ['person.history.hometown', 'Bratislava'],
  ['person.animal.pet.needNoseAntEater', undefined],
];

const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'Bratislava',
      bio: { funFact: 'I like fishing.' },
    },
  },
};

const test = testCases.every(
  ([path, res]) => JSON.stringify(obj.hash(path)) === JSON.stringify(res)
);
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.error('Test failed');
}
