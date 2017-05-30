const { assert } = require('chai')
const allSettled = require('../all-settled')

describe('allSettled', () => {
  it('should fulfill when passed an empty array', () => {
    return allSettled([])
      .then((res) => {
        assert.deepEqual(res, [])
      })
  })

  it('should resolve with an array of snapshots', () => {
    const nope = new Error('Nope...')
    const promises = [ Promise.resolve('Nice one!'), Promise.reject(nope) ]

    return allSettled(promises)
      .then(([ a, b ]) => {
        assert.deepEqual(a, { state: 'fulfilled', value: 'Nice one!' })
        assert.deepEqual(b, { state: 'rejected', reason: nope })
      })
  })

  it('should handle a mix of non-promises and promises', () => {
    return allSettled([ 'Nice one!', Promise.resolve('Yep') ])
      .then(([ a, b ]) => {
        assert.deepEqual(a, { state: 'fulfilled', value: 'Nice one!' })
        assert.deepEqual(b, { state: 'fulfilled', value: 'Yep' })
      })
  })
})
