const { assert } = require('chai')
const fapply = require('../fapply')

describe('fapply', () => {
  it('should resolve as expected when the function call is successful', (done) => {
    const add = (a, b) => a + b

    fapply(add, [ 1, 2 ])
      .then((result) => {
        assert.equal(result, 3)
        done()
      })
      .catch(done)
  })

  it('should reject as expected when the function call is unsuccessful', (done) => {
    const bad = () => { throw new Error('Bad!') }

    fapply(bad)
      .catch((error) => {
        assert.equal(error.message, 'Bad!')
        done()
      })
  })
})
