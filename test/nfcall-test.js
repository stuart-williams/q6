const { assert } = require('chai')
const { readFile } = require('fs')
const { resolve } = require('path')
const nfcall = require('../nfcall')

describe('nfcall', () => {
  it('should resolve as expected when params are valid', (done) => {
    nfcall(readFile, resolve(__dirname, './data/hello.txt'), 'utf8')
      .then((contents) => {
        assert.isString(contents)
        done()
      })
      .catch(done)
  })

  it('should reject as expected when params are invalid', (done) => {
    nfcall(readFile, resolve(__dirname, 'nope.txt'), 'utf8')
      .catch(() => {
        assert.equal(true, true)
        done()
      })
  })
})
