const findKey = function(object, callback) {
  let truthyValues = []; // create empty array for truthy results
  for (let key in object) { // loop over object
    if (callback(object[key])) { // apply callback to object values
      truthyValues.push(key);  // push truthy results to empty array
    }
  }
  if (truthyValues < 1) {  // if no truthy results, return undefined
    return undefined;
  } else {
    return truthyValues[0]; // if array has truthy results, return first instance
  }
};

module.exports = findKey;
