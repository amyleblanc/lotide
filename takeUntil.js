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
