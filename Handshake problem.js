// Description:
// Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

// Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

// However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

// Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).

function getParticipants(handshakes) {
  let n = 0;
  let totalHandshakes = 0;

  while (totalHandshakes < handshakes) {
    n++;
    totalHandshakes = (n * (n - 1)) / 2;
  }

  return n;
}

// Test:
(function () {
  try {
    const testCases = [
      [0, 0],
      [1, 2],
      [3, 3],
      [6, 4],
      [7, 5],
    ];

    testCases.forEach(([h, res]) => {
      if (getParticipants(h) !== res) {
        throw new Error(
          `Test failed. Expected ${h} handshake${h > 1 ? 's' : ''} to equal ${res} handshake${res > 1 ? 's' : ''}`
        );
      }
    });

    console.log('%cTest passed', 'color: green; font-weight: bold;');
  } catch (e) {
    console.error(e.message);
  }
})();
