const assertEqual = function(actual, expected) {
  /*if (actual === expected) {
    console.log(`🥳 Assertion Passed: ${actual} === ${expected}`); // STRING INTERPOLATION
  } else {
    console.log("🤬 Assertion Failed: " + actual + " !== " + expected);  // ORIGINAL CODE
  }
  */
  actual === expected ? console.log(`🥳 Assertion Passed: ${actual} === ${expected}`) : console.log("🤬 Assertion Failed: " + actual + " !== " + expected);  // TERNARY OPERATOR
};

const head = function(array) {
  for (let i = 0; i <= array.length; i++) {
    return array[0];
  }
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");