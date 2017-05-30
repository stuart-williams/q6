const nfcall = require('./nfcall')

function denodeify (func) {
  return (...args) => nfcall(func, ...args)
}

module.exports = denodeify
