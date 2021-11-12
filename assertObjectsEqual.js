const _ = require('./index');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // import 'util' library's inspect function
  if (_.eqObjects(actual, expected)) {
    console.log(`🥳 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🤬 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// TEST CODE:

// const object1 = { a: 1, b: 2, c: 3 };
// const object2 = { a: 1, b: 2, c: 3 };
// const object3 = { a: 2, b: 2, c: 2 };

// assertObjectsEqual(object1, object2);
// assertObjectsEqual(object2, object3);