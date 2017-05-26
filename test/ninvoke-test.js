const { assert } = require('chai')
const ninvoke = require('../ninvoke')

describe('ninvoke', () => {
  const Test = {
    good (callback) {
      return callback(null, this)
    },
    bad (callback) {
      return callback(new Error('Nope...'))
    }
  }

  it('should resolve as expected (with the correct `this` binding) when params are valid', (done) => {
    ninvoke(Test, 'good')
      .then((self) => {
        assert.equal(self, Test)
        done()
      })
      .catch(done)
  })

  it('should reject as expected when params are invalid', (done) => {
    ninvoke(Test, 'bad')
      .catch((e) => {
        assert.equal(e.message, 'Nope...')
        done()
      })
  })
})
