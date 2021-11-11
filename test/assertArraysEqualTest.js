const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE:
assertArraysEqual([1, 2, 3], [1, 2, 3]); // TRUE
assertArraysEqual([1, 2, 3], [1, 2, 2]); // FALSE