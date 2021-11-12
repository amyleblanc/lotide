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

module.exports = flatten;

// TEST CODE:
//console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
