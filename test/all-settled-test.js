const { assert } = require('chai')
const allSettled = require('../src/all-settled')

describe('allSettled', () => {
  it('should return an array of fulfilled/rejected objects as expected', (done) => {
    const promises = [ Promise.resolve('Nice one!'), Promise.reject('Nope...') ]

    allSettled(promises).then(([ fulfilled, rejected ]) => {
      assert.deepEqual(fulfilled, { state: 'fulfilled', value: 'Nice one!' })
      assert.deepEqual(rejected, { state: 'rejected', reason: 'Nope...' })
      done()
    })
  })

  it('should resolve with a fulfilled state when the value is not a promise', (done) => {
    allSettled([ 'Nice one!' ]).then(([ fulfilled ]) => {
      assert.deepEqual(fulfilled, { state: 'fulfilled', value: 'Nice one!' })
      done()
    })
  })
})
