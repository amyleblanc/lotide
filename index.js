const head    = require('./head');
const tail    = require('./tail');
const middle  = require('./middle');

const assertArraysEqual  = require('./assertArraysEqual');
const assertEqual        = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters       = require('./countLetters');
const countOnly          = require('./countOnly');
const eqArrays           = require('./eqArrays');
const eqObjects          = require('./eqObjects');

module.exports = {

  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  
  
};