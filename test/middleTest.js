const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE:
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1]), []); // TRUE
assertArraysEqual(middle([1, 2]), []); // TRUE
assertArraysEqual(middle([1, 2, 3]), [2]); // TRUE
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // TRUE
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // TRUE
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // TRUE
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3.5]); // FALSE