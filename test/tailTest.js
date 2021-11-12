const assert = require('chai').assert;
const _ = require('../index.js');

describe('#tail', () => {

  it('returns [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(_.tail([1, 2, 3]), [2, 3]);
  });

  it('returns [] for []', () => {
    assert.deepEqual(_.tail([]), []);
  });

  it("returns ['House', 'Labs'] for ['Light', 'House', 'Labs']", () => {
    assert.deepEqual(_.tail(['Light', 'House', 'Labs']), ['House', 'Labs']);
  })

});