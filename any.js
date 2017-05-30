function any (promises) {
  return new Promise((resolve, reject) => {
    Promise.all(promises.map((p) => Promise.resolve(p).then(resolve)))
      .then(resolve)
      .catch(reject)
  })
}

module.exports = any
