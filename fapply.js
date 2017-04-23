const fcall = require('./fcall')

function fapply (fn, args = []) {
  return fcall(fn, ...args)
}

module.exports = fapply
