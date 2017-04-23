const { assert } = require('chai')
const any = require('../any')

describe('any', () => {
  it('should resolve with the first promise to be fulfilled', (done) => {
    any([
      Promise.reject(new Error('Nope...')),
      Promise.resolve('Nice one!'),
      Promise.resolve('Not this one...')
    ])
    .then((first) => {
      assert.equal(first, 'Nice one!')
      done()
    })
    .catch(done)
  })

  it('should reject if all of the given promises are rejected', (done) => {
    any([
      Promise.reject(new Error('Nope...')),
      Promise.reject(new Error('Another nope...'))
    ])
    .catch((e) => {
      assert.equal(e.message, 'Nope...')
      done()
    })
  })
})
