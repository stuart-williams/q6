const { assert } = require('chai')
const nfcall = require('../nfcall')

describe('nfcall', () => {
  it('should fulfill with callback result', () => {
    const func = (a, b, c, callback) => callback(null, a + b + c)

    return nfcall(func, 1, 2, 3)
      .then((sum) => {
        assert.equal(sum, 6)
      })
  })

  it('should reject with callback error', () => {
    const nope = new Error('Nope...')
    const func = (a, b, c, callback) => callback(nope)

    return nfcall(func, 1, 2, 3)
      .catch((error) => {
        assert.equal(error, nope)
      })
  })
})
