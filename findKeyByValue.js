const _ = require('./index');

const findKeyByValue = function(object, test) {
  for (const key of Object.keys(object)) {
    const value = object[key];
    if (value === test) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

// TEST CODE

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };


// console.log(findKeyByValue(bestTVShowsByGenre, 'The Office')); // undefined
// console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire')); // drama
// _.assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Office'), 'sci_fi'); // Failed
// _.assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama'); // Passed