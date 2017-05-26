const nfcall = require('./nfcall')

function ninvoke (self, fn, ...args) {
  return nfcall(self[fn].bind(self), ...args)
}

module.exports = ninvoke
