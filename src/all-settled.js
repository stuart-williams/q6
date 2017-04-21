const wrap = (promise) => new Promise((resolve) => {
  Promise.resolve(promise)
    .then((value) => resolve({
      state: 'fulfilled',
      value
    }))
    .catch((reason) => resolve({
      state: 'rejected',
      reason
    }))
})

module.exports = (promises) => Promise.all(promises.map(wrap))
