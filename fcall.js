function fcall (func, ...args) {
  return new Promise((resolve, reject) => {
    try {
      resolve(func(...args))
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = fcall
