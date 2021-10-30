const eqArrays = (first, second) => {
  let firstString = first.toString();
  let secondString = second.toString();
  if (firstString === secondString) {
    return true;
  } else {
    return false;
  }
};

const eqObjects = function(object1, object2) {
  const object1Array = Object.keys(object1);
  const object2Array = Object.keys(object2);
  if (object1Array.length !== object2Array.length) {
    console.log(false);
    return false;
  }
  for (let key of object1Array) {
    if (Array.isArray(object1[key])) {
      if (eqArrays(object1[key], object2[key])) {
        continue;
      } else {
        console.log(false);
        return false;
      }
    }
    if (object1[key] !== object2[key]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
};

//=====================================================

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // import 'util' library's inspect function
  if (eqObjects(actual, expected)) {
    console.log(`🥳 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🤬 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST CODE:

const object1 = { a: 1, b: 2, c: 3 };
const object2 = { a: 1, b: 2, c: 3 };
const object3 = { a: 2, b: 2, c: 2 };

assertObjectsEqual(object1, object2);
assertObjectsEqual(object2, object3);