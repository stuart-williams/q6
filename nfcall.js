function nfcall (func, ...args) {
  return new Promise((resolve, reject) => {
    const callback = (error, response) => error ? reject(error) : resolve(response)
    func(...args, callback)
  })
}

module.exports = nfcall
