const nfcall = require('./nfcall')

function npost (self, fn, args = []) {
  return nfcall(self[fn].bind(self), ...args)
}

module.exports = npost
