const { assert } = require('chai')
const fapply = require('../fapply')

describe('fapply', () => {
  it('should fulfill with callback result', () => {
    const func = (a, b, c) => a + b + c

    return fapply(func, [ 1, 2, 3 ])
      .then((sum) => {
        assert.equal(sum, 6)
      })
  })

  it('should reject with callback error', () => {
    const nope = new Error('Nope...')
    const func = () => { throw nope }

    return fapply(func)
      .catch((error) => {
        assert.equal(error, nope)
      })
  })
})
