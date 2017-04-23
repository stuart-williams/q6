const { assert } = require('chai')
const nfapply = require('../nfapply')

describe('nfapply', () => {
  it('should resolve as expected when params are valid', (done) => {
    const readFile = (path, encoding, callback) => callback(null, 'This is my contents!')

    nfapply(readFile, [ 'good.txt', 'utf8' ])
      .then((contents) => {
        assert.equal(contents, 'This is my contents!')
        done()
      })
      .catch(done)
  })

  it('should reject as expected when params are invalid', (done) => {
    const readFile = (path, encoding, callback) => callback(new Error('Nope...'))

    nfapply(readFile, [ 'bad.txt', 'utf8' ])
      .catch((e) => {
        assert.equal(e.message, 'Nope...')
        done()
      })
  })
})
