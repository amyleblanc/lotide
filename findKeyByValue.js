const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳 Assertion Passed: ${actual} === ${expected}`) : console.log("🤬 Assertion Failed: " + actual + " !== " + expected);  // TERNARY OPERATOR
};

const findKeyByValue = function(object, test) {
  for (const key of Object.keys(object)) {
    const value = object[key];
    if (value === test) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


console.log(findKeyByValue(bestTVShowsByGenre, 'The Office')); // undefined
console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire')); // drama
assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Office'), 'sci_fi'); // Failed
assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama'); // Passed