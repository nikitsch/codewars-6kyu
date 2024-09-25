// Description:
// Task
// The game starts with n people standing in a circle. The presenter counts m people starting with the first one, and gives 1 coin to each of them. The rest of the players receive 2 coins each. After that, the last person who received 1 coin leaves the circle, giving everything he had to the next participant (who will also be considered "the first in the circle" in the next round). This process continues until only 1 person remains.

// Determine the number of this person and how many coins he has at the end of the game.

// The result should be a pair of values in the format: [person, coins].

// Example:
// n = 8, m = 3

// People
// 1 2 3      1 2 ∙      1 2 ∙      ∙ 2 ∙       ∙  2 ∙       ∙ ∙  ∙       ∙ ∙  ∙
// 8   4  =>  8   4  =>  8   4  =>  8   4  =>   8    4  =>   8    4  =>   ∙    4  =>  7
// 7 6 5      7 6 5      7 ∙ 5      7 ∙ 5       7  ∙ ∙       7 ∙  ∙       7 ∙  ∙

// Coins
// 0 0 0      1 1 ∙      3 3 ∙      ∙ 9 ∙       ∙ 10 ∙       ∙ ∙  ∙       ∙ ∙  ∙   
// 0   0  =>  2   3  =>  4   4  =>  5   6  =>   7    7  =>   8   20  =>   ∙   30  =>  51
// 0 0 0      2 2 2      7 ∙ 3      8 ∙ 5      16 ∙  ∙      17 ∙  ∙      18 ∙  ∙ 
// Notes:
// The presenter can do several full circles during one counting.
// In this case, the same person will receive 1 coin multiple times, i.e. no matter how many people are left in the circle, at least m coins will always be distributed among the participants during the round.
// If a person had already received 1 coin (possibly multiple times), he won't receive any additional 2 coins at once(!) during that round.
// People are counted starting with 1.
// m can be bigger than n at start

function findLast(n, m) {
  let defaultArrN = [];
  let human = 1;
  while (human <= n) {
    defaultArrN.push([human, 0])
    human++;
  }

  function recursion(arr) {
    const length = arr.length;
    if (length === 1) return arr[0];

    const fullCircles = Math.floor(m / length);
    const lastIndex = (m % length || length) - 1;
    
    const newArr = arr.map(([key, value], i) => {
      const doubleCoin = fullCircles ? 0 : 2;
      const arg = i > lastIndex || !(m % length) ? doubleCoin : 1;
      const newValue = value + fullCircles + arg;
      return [key, newValue];
    });

    const nextIndex = lastIndex === length - 1 ? 0 : lastIndex + 1;
    newArr[nextIndex][1] += newArr[lastIndex][1];

    const rotatedNewArr = 
          [...newArr.slice(lastIndex), ...newArr.slice(0, lastIndex)]

    const [firstArr, ...restArrs] = rotatedNewArr;

    return recursion(restArrs);
  }
  
  return recursion(defaultArrN);
};

console.log(findLast(75, 34), [35,4238]);
console.log(findLast(82, 49), [48,5091]);
console.log(findLast(73, 38), [61,3996]);
console.log(findLast(86, 71), [10,6275]);
console.log(findLast(61, 17), [26,3000]);
console.log(findLast(42, 38), [12,1578]);
console.log(findLast(29, 5), [28,740]);
console.log(findLast(64, 49), [43,3327]);
console.log(findLast(61, 20), [32,2922]);
console.log(findLast(88, 52), [59,5856]);
console.log(findLast(3, 3), [2,6]);
console.log(findLast(3, 4), [2,8]);