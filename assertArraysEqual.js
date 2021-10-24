// const eqArrays = require('./eqArrays'); // Mentor Elbert Bae showed me a more efficient way to reuse my eqArrays function

// const assertArraysEqual = (first, second) => { // compare arrays using the eqArrays file
//   console.log(`Are these two arrays the same? Answer: ${eqArrays(first, second)}`) ;
// };

const assertArraysEqual = (first, second) => { // compare arrays using the eqArrays function
  const eqArrays = (first, second) => {
    let firstString = first.toString();
    let secondString = second.toString();
    if (firstString === secondString) {
      return true;
    } else {
      return false;
    }
  };
  console.log(`Are these two arrays the same? Answer: ${eqArrays(first, second)}`);
};

// TEST CODE:
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2, 2]);
