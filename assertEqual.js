const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳 ✅ Assertion Passed: ${actual} === ${expected}`) : console.log("🤬 ⛔️ Assertion Failed: " + actual + " !== " + expected);  // TERNARY OPERATOR
};

module.exports = assertEqual;