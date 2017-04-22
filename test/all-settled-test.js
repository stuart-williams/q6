const { assert } = require('chai')
const allSettled = require('../all-settled')

describe('allSettled', () => {
  it('should return an array of fulfilled/rejected objects as expected', (done) => {
    const promises = [ Promise.resolve('Nice one!'), Promise.reject(new Error('Nope...')) ]

    allSettled(promises)
      .then(([ fulfilled, rejected ]) => {
        assert.equal(fulfilled.state, 'fulfilled')
        assert.equal(fulfilled.value, 'Nice one!')
        assert.equal(rejected.state, 'rejected')
        assert.equal(rejected.reason.message, 'Nope...')
        done()
      })
      .catch(done)
  })

  it('should resolve with a fulfilled state when the value is not a promise', (done) => {
    allSettled([ 'Nice one!' ])
      .then(([ fulfilled ]) => {
        assert.deepEqual(fulfilled, { state: 'fulfilled', value: 'Nice one!' })
        done()
      })
      .catch(done)
  })
})
