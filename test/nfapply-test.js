const { assert } = require('chai')
const { readFile } = require('fs')
const { resolve } = require('path')
const nfapply = require('../nfapply')

describe('nfapply', () => {
  it('should resolve as expected when params are valid', (done) => {
    nfapply(readFile, [ resolve(__dirname, './data/hello.txt'), 'utf8' ])
      .then((contents) => {
        assert.isString(contents)
        done()
      })
      .catch(done)
  })

  it('should reject as expected when params are invalid', (done) => {
    nfapply(readFile, [ resolve(__dirname, 'nope.txt'), 'utf8' ])
      .catch(() => {
        assert.equal(true, true)
        done()
      })
  })
})
