const { assert } = require('chai')
const fcall = require('../fcall')

describe('fcall', () => {
  it('should resolve as expected when the function call is successful', (done) => {
    const add = (a, b) => a + b

    fcall(add, 1, 2).then((result) => {
      assert.equal(result, 3)
      done()
    })
  })

  it('should reject as expected when the function call is unsuccessful', (done) => {
    const bad = () => { throw new Error('Bad!') }

    fcall(bad).catch((error) => {
      assert.equal(error.message, 'Bad!')
      done()
    })
  })
})
