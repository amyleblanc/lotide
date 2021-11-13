// const _ = require('./index'); // **NB** UNCOMMENT WHEN USING TEST CODE

const findKeyByValue = function(object, test) {
  for (const key of Object.keys(object)) { // Loop through keys of object
    const value = object[key]; // assign variable "value" to the key of object
    if (value === test) { // if the "test" value equals the object key...
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