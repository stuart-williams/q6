const { assert } = require('chai')
const nfcall = require('../nfcall')

describe('nfcall', () => {
  it('should resolve as expected when params are valid', (done) => {
    const readFile = (path, encoding, callback) => callback(null, 'This is my contents!')

    nfcall(readFile, 'good.txt', 'utf8')
      .then((contents) => {
        assert.isString(contents)
        done()
      })
      .catch(done)
  })

  it('should reject as expected when params are invalid', (done) => {
    const readFile = (path, encoding, callback) => callback(new Error('Nope...'))

    nfcall(readFile, 'bad.txt', 'utf8')
      .catch((e) => {
        assert.equal(e.message, 'Nope...')
        done()
      })
  })
})
