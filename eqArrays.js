
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳 Assertion Passed: ${actual} === ${expected}`) : console.log("🤬 Assertion Failed: " + actual + " !== " + expected);  // TERNARY OPERATOR
};




const eqArrays = (first, second) => {
  let firstString = first.toString();
  let secondString = second.toString();
  if (firstString === secondString) {
    return true;
  } else {
    return false;
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
assertEqual(eqArrays([6], [6]), true); // => should PASS
assertEqual(eqArrays([3, 4], [3, -4]), true); // => should FAIL

