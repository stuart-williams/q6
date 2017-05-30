const { assert } = require('chai')
const denodeify = require('../denodeify')

describe('denodeify', () => {
  it('should return a function that fulfills with callback result', () => {
    const func = (a, b, c, callback) => callback(null, a + b + c)
    const asyncFunc = denodeify(func)

    return asyncFunc(1, 2, 3)
      .then((sum) => {
        assert.equal(sum, 6)
      })
  })
})
