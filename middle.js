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

const eqArrays = (first, second) => {
  let firstString = first.toString();
  let secondString = second.toString();
  if (firstString === secondString) {
    return true;
  } else {
    return false;
  }
};

const middle = (array) => {
  let midIndex = Math.floor((array.length - 1) / 2);
  let midArray = [];

  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 !== 0) {
    midArray.push(array[midIndex]);
    return midArray;
  }
  if (array.length % 2 === 0) {
    midArray = array.slice(midIndex, (midIndex + 2));
    return midArray;
  }
};

// TEST CODE:

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));