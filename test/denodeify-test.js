const { assert } = require('chai')
const denodeify = require('../denodeify')

describe('denodeify', () => {
  it('should return a function that can be called to return a promise', (done) => {
    const readFile = (path, encoding, callback) => callback(null, 'This is my contents!')
    const asyncReadFile = denodeify(readFile)

    asyncReadFile('good.txt', 'utf8')
      .then((contents) => {
        assert.equal(contents, 'This is my contents!')
        done()
      })
      .catch(done)
  })
})
