const { assert } = require('chai')
const fcall = require('../fcall')

describe('fcall', () => {
  it('should fulfill with callback result', () => {
    const func = (a, b, c) => a + b + c

    return fcall(func, 1, 2, 3)
      .then((sum) => {
        assert.equal(sum, 6)
      })
  })

  it('should reject with callback error', () => {
    const nope = new Error('Nope...')
    const func = () => { throw nope }

    return fcall(func)
      .catch((error) => {
        assert.equal(error, nope)
      })
  })
})
