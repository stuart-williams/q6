function fcall (fn, ...args) {
  return new Promise ((resolve, reject) => {
    try {
      resolve(fn(...args))
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = fcall