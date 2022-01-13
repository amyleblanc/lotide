const map = function(array, callback) {
  const results = []; // CREATE EMPTY ARRAY TO HOLD THE CHANGES AFTER APPLYING CALLBACK FUNCTION
  for (let item of array) { // LOOP THROUGH ARRAY
    results.push(callback(item)); // APPLY GIVEN CALLBACK FUNCTION AND PUSH CHANGES TO ABOVE EMPTY ARRAY
  }
  return results;
};

module.exports = map;
