const flatten = (nestedArray) => {
  let flatArray = []; // Create empty array to hold the new flattened array
  for (let i in nestedArray) { // loop through array using for..in to access indices of elements
    if (Array.isArray(nestedArray[i])) { // if the element at each index is an array...
      flatArray = flatArray.concat(flatten(nestedArray[i])); // ... call the flatten function again to apply... 
    } else {   // ...same logic to each nested array, combine arrays to equal flattened array, otherwise...
      flatArray.push(nestedArray[i]); // ...push the non-array element to flatArray
    }
  }
  return flatArray;
};

module.exports = flatten;

// TEST CODE:
// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, 2, [3, 4], 5, [6], [[[7, 8, [9]]]]])); // => [1, 2, 3, 4, 5, 6, 7, 8, 9]