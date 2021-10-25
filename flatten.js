const assertArraysEqual = (first, second) => { // compare 2 arrays and print out result
  let firstString = first.toString();
  let secondString = second.toString();
  firstString === secondString ? console.log(`🥳 Assertion Passed: ${first} === ${second}`) : console.log(`🤬 Assertion Failed: ${first} !== ${second}`);
};

const eqArrays = (first, second) => { // compare 2 arrays and return true or false
  let firstString = first.toString();
  let secondString = second.toString();
  if (firstString === secondString) {
    return true;
  } else {
    return false;
  }
};

const flatten = (nestedArray) => {
  let flatArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      flatArray = flatArray.concat(flatten(nestedArray[i]));
    } else {
      flatArray.push(nestedArray[i]);
    }
  }
  return flatArray;
};

// TEST CODE:
//console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
