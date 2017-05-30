const nfcall = require('./nfcall')

function nfapply (func, args) {
  return nfcall(func, ...args)
}

module.exports = nfapply
