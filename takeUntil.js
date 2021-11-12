const _ = require('./index');

const takeUntil = function(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      newArray.push(array[i]);
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
// const results2 = takeUntil(data2, x => x === ','); // [ 'I\'ve', 'been', 'to', 'Hollywood' ]
// console.log(results2);

// _.assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // True
// _.assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]); // True