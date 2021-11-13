const middle = (array) => {
  let midIndex = Math.floor((array.length - 1) / 2); // Find middle index by divding the array length (minus 1 to account for zero index) by 2
  let midArray = []; // Create empty array to hold eventual result

  if (array.length <= 2) { // If array has 2 elements or less...
    return [];  // ...return empty array
  }
  if (array.length % 2 !== 0) { // If array has an uneven number of elements...
    midArray.push(array[midIndex]); // ...push the element at "midIndex" to the empty array
    return midArray;
  }
  if (array.length % 2 === 0) { // If the array has an even number of elements...
    midArray = array.slice(midIndex, (midIndex + 2)); // "slice" or take both the "midIndex" and midIndex+2 and push to empty array
    return midArray;
  }
};

module.exports = middle;