const nfcall = require('./nfcall')

function ninvoke (self, func, ...args) {
  return nfcall(self[func].bind(self), ...args)
}

module.exports = ninvoke
