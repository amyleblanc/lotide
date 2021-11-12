const _ = require('../index');

// TEST CODE:
_.assertArraysEqual([1, 2, 3], [1, 2, 3]); // TRUE
_.assertArraysEqual([1, 2, 3], [1, 2, 2]); // FALSE