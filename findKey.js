const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳 Assertion Passed: ${actual} === ${expected}`) : console.log("🤬 Assertion Failed: " + actual + " !== " + expected);  // TERNARY OPERATOR
};

const findKey = function(object, callback) {
  let truthyValues = []; // create empty array for truthy results
  for (let key in object) { // loop over object
    if (callback(object[key])) { // apply callback to object values
      truthyValues.push(key);  // push truthy results to empty array
    }
  }
  if (truthyValues < 1) {  // if no truthy results, return undefined
    return undefined;
  } else {
    return truthyValues[0]; // if array has truthy results, return first instance
  }
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');

    