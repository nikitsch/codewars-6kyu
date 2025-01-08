// Description:
// Given two times in hours, minutes, and seconds (ie '15:04:24'), add or subtract them. This is a 24 hour clock. Output should be two digits for all numbers: hours, minutes, seconds (ie '04:02:09').

// timeMath('01:24:31', '+', '02:16:05') === '03:40:36'

// timeMath('01:24:31', '-', '02:31:41') === '22:52:50'

const timeToSeconds = (time) => {
  const [h, m, s] = time.split(':').map(Number);
  return h * 3600 + m * 60 + s;
};

function timeMath(time1, op, time2) {
  const secInFirstTense = timeToSeconds(time1);
  const secInSecondTense = timeToSeconds(time2);

  let calcResult =
    op === '+'
      ? secInFirstTense + secInSecondTense
      : secInFirstTense - secInSecondTense;
  calcResult = (calcResult + 86400) % 86400;

  const h = String(Math.floor(calcResult / 3600)).padStart(2, '0');
  const m = String(Math.floor((calcResult % 3600) / 60)).padStart(2, '0');
  const s = String(calcResult % 60).padStart(2, '0');

  return `${h}:${m}:${s}`;
}

const testCases = [
  [['01:24:31', '+', '02:16:05'], '03:40:36'],
  [['01:24:31', '+', '22:35:28'], '23:59:59'],
  [['11:24:31', '-', '11:24:31'], '00:00:00'],
  [['11:24:31', '-', '03:15:28'], '08:09:03'],
  [['00:00:01', '+', '23:59:59'], '00:00:00'],
  [['13:48:52', '+', '13:47:53'], '03:36:45'],
  [['00:00:01', '-', '00:00:02'], '23:59:59'],
  [['13:48:52', '-', '13:47:53'], '00:00:59'],
];

const test = testCases.every(([arr, result]) => timeMath(...arr) === result);
if (test) {
  console.log('%cTest passed', 'color: green; font-weight: bold;');
} else {
  console.error('Test failed');
}
