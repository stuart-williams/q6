const { assert } = require('chai')
const nfapply = require('../nfapply')

describe('nfapply', () => {
  it('should fulfill with callback result', () => {
    const func = (a, b, c, callback) => callback(null, a + b + c)

    return nfapply(func, [ 1, 2, 3 ])
      .then((sum) => {
        assert.equal(sum, 6)
      })
  })

  it('should reject with callback error', () => {
    const nope = new Error('Nope...')
    const func = (a, b, c, callback) => callback(nope)

    return nfapply(func, [ 1, 2, 3 ])
      .catch((error) => {
        assert.equal(error, nope)
      })
  })
})
