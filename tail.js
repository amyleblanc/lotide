const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳 Assertion Passed: ${actual} === ${expected}`) : console.log("🤬 Assertion Failed: " + actual + " !== " + expected);  // TERNARY OPERATOR
};

const tail = function(array) {
  let tailArray = array.slice(1);
  return tailArray;
};

const testArray = ['a', 'b', 'c', 'd'];

// TEST CODE
console.log(testArray);
console.log(tail(testArray));
console.log(testArray);
assertEqual(testArray.length, 4);


// TEST CODE
console.log(tail([1, 2, 3, 4]));
console.log(tail([]));
console.log(tail([1]));


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!