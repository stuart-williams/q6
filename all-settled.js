const wrap = (promise) => {
  return Promise.resolve(promise)
    .then((value) => ({
      state: 'fulfilled',
      value
    }))
    .catch((reason) => ({
      state: 'rejected',
      reason
    }))
}

function allSettled (promises) {
  return Promise.all(promises.map(wrap))
}

module.exports = allSettled
