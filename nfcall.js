function nfcall (fn, ...args) {
  return new Promise((resolve, reject) => {
    const callback = (error, response) => fn(...[ ...args, (error, response) => error ? reject(error) : resolve(response) ])
    fn(...[ ...args, callback ])
  })
}

module.exports = nfcall
