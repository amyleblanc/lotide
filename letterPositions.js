const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i); // if it does exist, push new value
    } else {
      results[sentence[i]] = [i]; // if it does not exist, create a new key: value pair
    }
  }
  return results;
};

// TEST CODE:

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳 Assertion Passed: ${actual} === ${expected}`) : console.log("🤬 Assertion Failed: " + actual + " !== " + expected);  // TERNARY OPERATOR
};

const assertArraysEqual = (first, second) => { // compare arrays using the eqArrays function
  const eqArrays = (first, second) => {
    let firstString = first.toString();
    let secondString = second.toString();
    if (firstString === secondString) {
      return true;
    } else {
      return false;
    }
  };
  console.log(`Are these two arrays the same? Answer: ${eqArrays(first, second)}`);
};

console.log(letterPositions('hello'));
console.log(letterPositions('successful'));

assertArraysEqual(letterPositions('hello')['e'], [1]);
assertArraysEqual(letterPositions('successful')['s'], [0, 5, 6]);

