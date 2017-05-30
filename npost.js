const nfcall = require('./nfcall')

function npost (self, func, args = []) {
  return nfcall(self[func].bind(self), ...args)
}

module.exports = npost
