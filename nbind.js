const nfcall = require('./nfcall')

function nbind (func, self) {
  return (...args) => nfcall(func.bind(self), ...args)
}

module.exports = nbind
