// Description:
// There's no such thing as private properties on a coffeescript object! But, maybe there are?

// Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

// getSecret() which returns the secret
// setSecret() which sets the secret
// obj = createSecretHolder(5)
// obj.getSecret() # returns 5
// obj.setSecret(2)
// obj.getSecret() # returns 2

function createSecretHolder(secret) {
  let code = secret;

  return {
    getSecret: function () {
      return code;
    },
    setSecret: function (secret) {
      code = secret;
    },
  };
}

//Test:
(function () {
  try {
    const testCases = [];

    const firstNum = 10;
    const obj = createSecretHolder(firstNum);
    testCases.push([obj.getSecret(), firstNum]);
    testCases.push([obj.getSecret(), firstNum]);

    const secondNum = 8;
    obj.setSecret(secondNum);
    testCases.push([obj.getSecret(), secondNum]);

    const thirdNum = 14;
    obj.setSecret(thirdNum);
    const fourthNum = 15000000;
    obj.setSecret(fourthNum);
    testCases.push([obj.getSecret(), fourthNum]);

    testCases.forEach(([fn, res]) => {
      if (fn !== res) {
        throw new Error(`Test failed. Expected ${fn} to equal ${res}`);
      }
    });

    console.log('%cTest passed', 'color: green; font-weight: bold;');
  } catch (e) {
    console.error(e.message);
  }
})();
