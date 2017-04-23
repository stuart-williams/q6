const nfcall = require('./nfcall')

function denodeify (fn) {
  return (...args) => nfcall(fn, ...args)
}

module.exports = denodeify
