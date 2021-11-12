const _ = require('../index');

// TEST CODE
_.assertEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
_.assertEqual(_.eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
_.assertEqual(_.eqArrays([6], [6]), true); // => should PASS
_.assertEqual(_.eqArrays([3, 4], [3, -4]), true); // => should FAIL