const { assert } = require('chai')
const npost = require('../npost')

describe('npost', () => {
  afterEach(() => {
    Test.sum = null
  })

  const nope = new Error('Nope...')

  const Test = {
    good (a, b, c, callback) {
      this.sum = a + b + c
      return callback(null, this.sum)
    },
    bad (callback) {
      return callback(nope)
    }
  }

  it('should fulfill with callback result', () => {
    return npost(Test, 'good', [ 1, 2, 3 ])
      .then((sum) => {
        assert.equal(sum, 6)
      })
  })

  it('should reject with callback error', () => {
    return npost(Test, 'bad')
      .catch((error) => {
        assert.equal(error, nope)
      })
  })

  it('should bind the function', () => {
    return npost(Test, 'good', [ 1, 2, 3 ])
      .then(() => {
        assert.equal(Test.sum, 6)
      })
  })
})
