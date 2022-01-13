const _ = require('./index');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (_.eqObjects(actual, expected)) {
    console.log(`🥳 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🤬 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
