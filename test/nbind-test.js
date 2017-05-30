const { assert } = require('chai')
const nbind = require('../nbind')

describe('nbind', () => {
  afterEach(() => {
    Test.sum = null
  })

  const Test = {
    func (a, b, c, callback) {
      this.sum = a + b + c
      return callback(null, this.sum)
    }
  }

  it('should return a function that fulfills with callback result', () => {
    const asyncFunc = nbind(Test.func, Test)

    return asyncFunc(1, 2, 3)
      .then((sum) => {
        assert.equal(sum, 6)
      })
  })

  it('should bind the function', () => {
    const asyncFunc = nbind(Test.func, Test)

    return asyncFunc(1, 2, 3)
      .then(() => {
        assert.equal(Test.sum, 6)
      })
  })
})
