const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const object1Array = Object.keys(object1); // Convert to array
  const object2Array = Object.keys(object2); // Convert to array
  if (object1Array.length !== object2Array.length) {
    return false;
  }
  for (const key of object1Array) {
    if (Array.isArray(object1[key])) { // Check for nested array
      if (eqArrays(object1[key], object2[key])) {
        continue;
      } else {
        return false;
      }
    }
    if (typeof object1[key] === "object") { // Check for nested object
      if (eqObjects(object1[key], object2[key])) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
