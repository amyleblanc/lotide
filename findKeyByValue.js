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
