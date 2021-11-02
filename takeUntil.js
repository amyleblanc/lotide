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
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

///////////////////////////////////

// const sliceAtComma = function(array) {
//   let index = array.indexOf(',');
//   return array.slice(0, index);
// };



// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// console.log(takeUntil(data1, x => x < 0));


// // const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


// console.log(takeUntil(data1, sliceAtZero));
// console.log('---');
// console.log(takeUntil(data2, sliceAtComma));