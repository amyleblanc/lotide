// const _ = require('./index'); // **NB** UNCOMMENT WHEN USING TEST CODE

const takeUntil = function(array, callback) {
  let newArray = []; // create empty array to contain eventual result
  for (let i in array) { // loop through element indices of array
    if (!callback(array[i])) { // if the array element is not affcted by the callback function...
      newArray.push(array[i]); // ... then push to the empty array
    } else {
      break;
    }
  }
  return newArray;
};

module.exports = takeUntil;

// TEST CODE

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0); // [ 1, 2, 5, 7, 2 ]
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ','); // [ "I've", "been", "to", "Hollywood" ]
// console.log(results2);

// console.log('---');

// _.assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // True
// _.assertArraysEqual(results2, [ "I've", "been", "to", "Hollywood" ]); // True