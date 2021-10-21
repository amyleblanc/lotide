// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  /*if (actual === expected) {
    console.log(`🥳 Assertion Passed: ${actual} === ${expected}`); // STRING INTERPOLATION
  } else {
    console.log("🤬 Assertion Failed: " + actual + " !== " + expected);  // ORIGINAL CODE
  }
  */
  actual === expected ? console.log(`🥳 Assertion Passed: ${actual} === ${expected}`) : console.log("🤬 Assertion Failed: " + actual + " !== " + expected);  // TERNARY OPERATOR
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(2, 1);