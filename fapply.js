const fcall = require('./fcall')

function fapply (func, args = []) {
  return fcall(func, ...args)
}

module.exports = fapply
