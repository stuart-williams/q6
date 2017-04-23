const nfcall = require('./nfcall')

function nfapply (fn, args) {
  return nfcall(fn, ...args)
}

module.exports = nfapply
