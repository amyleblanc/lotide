const _ = require('./index');

const eqObjects = function(object1, object2) {
  const object1Array = Object.keys(object1); // Convert object 1 to an array
  const object2Array = Object.keys(object2); // Convert object 2 to an array
  if (object1Array.length !== object2Array.length) { // If the number of array elements do not match, return false
    // console.log(false);
    return false;
  }
  for (let key of object1Array) { // Loop through array
    if (Array.isArray(object1[key])) { // if the key value is an array,
      if (_.eqArrays(object1[key], object2[key])) { // and if the array equals the other objects key value array...
        continue; // ...continue to the next if statement unless, should they not match move to else
      } else {
        // console.log(false);
        return false;
      }
    }
    if (object1[key] !== object2[key]) {
      // console.log(false);
      return false;
    }
  }
  // console.log(true);
  return true;
};

module.exports = eqObjects;

// TEST CODE

// const ab = { a: '1', b: '2' };
// const ba = { b: '2', a: '1' };
// eqObjects(ab, ba); // => true
// _.assertEqual(eqObjects(ab, ba), true); // PASS

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true
// _.assertEqual(eqObjects(cd, dc), true); // PASS

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
// _.assertEqual(eqObjects(cd, cd2), false); // PASS

// const abc = { a: '1', b: '2', c: '3' };
// eqObjects(ab, abc); // => false
// _.assertEqual(eqObjects(ab, abc), false); // PASS

// // --------------------------

// const hero1 = {
//   name: 'Batman',
//   realName: 'Bruce Wayne'
// };
// const hero2 = {
//   name: 'Batman',
//   realName: 'Bruce Wayne'
// };
// const hero3 = {
//   name: 'Joker'
// };

// eqObjects(hero1, hero2);
// eqObjects(hero1, hero3);
// _.assertEqual(eqObjects(hero1, hero2), true); // PASS
// _.assertEqual(eqObjects(hero1, hero3), false); // PASS