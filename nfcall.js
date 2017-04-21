function nfcall (fn, ...args) {
  return new Promise((resolve, reject) => {
    fn(...[ ...args, (error, response) => {
      if (error) return reject(error)
      resolve(response)
    } ])
  })
}

module.exports = nfcall
