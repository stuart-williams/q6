const { assert } = require('chai')
const ninvoke = require('../ninvoke')

describe('ninvoke', () => {
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
    return ninvoke(Test, 'good', 1, 2, 3)
      .then((sum) => {
        assert.equal(sum, 6)
      })
  })

  it('should reject with callback error', () => {
    return ninvoke(Test, 'bad')
      .catch((error) => {
        assert.equal(error, nope)
      })
  })

  it('should bind the function', () => {
    return ninvoke(Test, 'good', 1, 2, 3)
      .then(() => {
        assert.equal(Test.sum, 6)
      })
  })
})
