// Description:
// Task
// There's a vote made for 30 candidates numbered from 1 to 30. Each person votes for each of the 30 candidates and this voting is saved in an integer (you're trying to use the least space possible).

// Candidate 1 is on the first bit of the integer, candidate 2 in the second bit and so on.

// If the bit is set, the candidate received a vote. There are up to 1000 voters that all voted.

// In this elections there can only be a unanimous winner. Output the number of the winner or 0 if there are no winners or multiple winners.

// The votes made by the voters are given in an array of integers

// c = candidate
// v = voter
// num = number which represent that row votes
// :
//         c30 c29 c28 c27  ... c8  c7  c6  c5  c4  c3  c2  c1     num
// v1     1   0   1   0   ... 0   0   0   0   0   1   0   0    704643076
// v2     1   1   1   0   ... 0   1   1   1   0   0   0   0    939524208
// v3     1   0   0   1   ... 1   0   1   1   0   1   0   0    603979956
// In this case the input array would be: [704643076, 939524208, 603979956] and the output would be: 30 because candidate 30 was the only one who received votes from each voter

// Example
// For votes = [1,2,3], the result should be 0.

// Explained: 1 in binary in this case (and simplified to 2 bits) is 01, 2 is 10 and 3 is 11. That means in the first case someone only voted for the first candidate. In the second case only voted for the second candidate and in the third case someone voted for the first and the second candidate. Since none of the candidates was voted unanimously the output should be 0. It doesn't matter if a candidate has the most votes, if he/she is not voted by each person then he/she doesn't win.

// For: votes = [1,3,3], the result should be 1.

// c = candidate
// v = voter
// num = number which represent that row votes
// :
//     c30 c29 c28 c27  ... c8  c7  c6  c5  c4  c3  c2  c1  num
// v1   0   0   0   0   ... 0   0   0   0   0   0   0   1    1
// v2   0   0   0   0   ... 0   0   0   0   0   0   1   1    3
// v3   0   0   0   0   ... 0   0   0   0   0   0   1   1    3
// In this case, only c1 has 3 votes(by each person), so c1 is the winner.

// For votes = [7,15,4], the result should be 3.

// c = candidate
// v = voter
// num = number which represent that row votes
// :
//     c30 c29 c28 c27  ... c8  c7  c6  c5  c4  c3  c2  c1  num
// v1   0   0   0   0   ... 0   0   0   0   0   1   1   1    7
// v2   0   0   0   0   ... 0   0   0   0   1   1   1   1    15
// v3   0   0   0   0   ... 0   0   0   0   0   1   0   0    4
// In this case, only c3 has 3 votes(by each person), so c3 is the winner.

// Input/Output
// [input] integer array votes

// array of integers representing the votes from each person.

// [output] an integer

// Number of winning candidate.

const filterArr = (arr1, arr2) => {
  return arr1.filter((candidate) => arr2.includes(candidate));
};

function judge(votes) {
  let candidates = [];

  for (const vote of votes) {
    const binary = vote.toString(2).padStart(30, '0');
    const electoralVotes = binary
      .split('')
      .map((bit, i) => (bit === '1' ? Math.abs(i + 1 - 31) : null))
      .filter((x) => x !== null);

    if (!candidates.length) {
      candidates = [...electoralVotes];
      continue;
    }

    candidates = filterArr(candidates, electoralVotes);

    if (!candidates.length) return 0;
  }

  return candidates.length === 1 ? candidates[0] : 0;
}

const testCases = [
  [[1, 2, 3], 0],
  [[1, 3, 3], 1],
  [[7, 7, 7], 0],
  [[15, 8], 4],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9], 0],
  [[1024], 11],
  [[7, 15, 4], 3],
  [[15, 8, 1073741823], 4],
  [[10384825, 10384825, 10384825], 0],
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0],
];

const test = testCases.every(([arr, result]) => judge(arr) === result);
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.log('%cTest failed', 'color: red; font-weight: bold;');
}
