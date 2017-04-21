const wrap = (promise) => Promise.resolve(promise)
  .then((value) => ({ state: 'fulfilled', value }))
  .catch((reason) => ({ state: 'rejected', reason }))

module.exports = (promises) => Promise.all(promises.map(wrap))
