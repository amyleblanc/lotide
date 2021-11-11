const eqArrays = require('./eqArrays');

const assertArraysEqual = (first, second) => { // compare arrays using the eqArrays function and print the result
  console.log(`Are these two arrays the same? Answer: ${eqArrays(first, second)}`);
};

module.exports = assertArraysEqual;