# Cue

#### `allSettled`

The `Promise.all` function returns a promise for an array of values.  When this
promise is fulfilled, the array contains the fulfillment values of the original
promises, in the same order as those promises.  If one of the given promises
is rejected, the returned promise is immediately rejected, not waiting for the
rest of the batch.  If you want to wait for all of the promises to either be
fulfilled or rejected, you can use `allSettled`.

```javascript
const allSettled = require('cue/all-settled')

const promises = [
  Promise.resolve('Nice one!'),
  Promise.reject(new Error('Nope...'))
]

allSettled(promises)
  .then(([ a, b ]) => {
    console.log(a.state, a.value) // fulfilled, 'Nice one!'
    console.log(b.state, b.reason) // rejected, Error: Nope...
  })
```

#### `any`

The `any` function accepts an array of promises and returns a promise that is
fulfilled by the first given promise to be fulfilled, or rejected if all of the
given promises are rejected.

```javascript
const any = require('cue/any')

const promises = [
  Promise.reject(new Error('Nope...')),
  Promise.resolve('Nice one!'),
  Promise.resolve('Not this one...')
]

any(promises)
  .then(console.log) // 'Nice one!'
```

#### `nfcall`
#### `nfapply`
#### `ninvoke`
#### `npost`

#### `denodeify`
You can create a reusable wrapper with `denodeify`

```javascript
const fs = require('fs')
const denodeify = require('cue/denodeify')
const readFile = denodeify(fs.readFile)

return readFile('foo.txt', 'utf-8')
```

#### `nbind`
You can create a reusable wrapper while binding the function with `nbind`

```javascript
const fs = require('fs')
const nbind = require('cue/nbind')
const redisClientGet = nbind(redisClient.get, redisClient)

return redisClientGet('user:1:id')
```

#### `fcall`

```javascript
const fcall = require('cue/fcall')
const sum = (...args) => args.reduce((a, n) => a + n)

fcall(sum, 1, 2, 3)
  .then(console.log) // 6
```

#### `fapply`

```javascript
const fapply = require('cue/fapply')
const sum = (...args) => args.reduce((a, n) => a + n)

fapply(sum, [ 1, 2, 3 ])
  .then(console.log) // 6
```
