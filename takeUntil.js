const takeUntil = function(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      newArray.push(array[i]);
    } else {
      break;
    }
  }
  return newArray;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); // [ 1, 2, 5, 7, 2 ]
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); // [ 'I\'ve', 'been', 'to', 'Hollywood' ]
console.log(results2);

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

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // True
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]); // True