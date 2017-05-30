const { assert } = require('chai')
const any = require('../any')

describe('any', () => {
  const nope = new Error('Nope...')

  it('should fulfill when passed an empty array', () => {
    return any([])
      .then(() => {
        assert.equal(true, true)
      })
  })

  it('should fulfill with the first resolved promise', () => {
    return any([
      Promise.reject(nope),
      Promise.resolve('Nice one!'),
      Promise.resolve('Not this one...')
    ])
    .then((first) => {
      assert.equal(first, 'Nice one!')
    })
  })

  it('should reject after all promises are rejected', () => {
    return any([
      Promise.reject(nope),
      Promise.reject(new Error('Another nope...'))
    ])
    .catch((error) => {
      assert.equal(error, nope)
    })
  })
})
