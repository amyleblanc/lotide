const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳 Assertion Passed: ${actual} === ${expected}`) : console.log("🤬 Assertion Failed: " + actual + " !== " + expected);  // TERNARY OPERATOR
};

const findKey = function(object, calback) {
  
}

// REFER TO:

const findKeyByValue = function(object, test) {
  for (const key of Object.keys(object)) {
    const value = object[key];
    if (value === test) {
      return key;
    }
  }
  return undefined;
};