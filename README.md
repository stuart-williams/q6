# Q6

Nothing more than a bunch of ES6 Promise helper functions inspired by [Q](https://github.com/kriskowal/q)

#### `nfcall`/`nfapply`

If you're working with functions that make use of the Node.js callback pattern,
where callbacks are in the form of `function(error, result)`, q6 provides a few
useful utility functions for converting between them. The most straightforward
are probably `nfcall` and `nfapply` ('Node function call/apply") for calling
Node.js-style functions and getting back a promise:

```javascript
const nfcall = require('q6/nfcall')
const fs = require('fs')

return nfcall(fs.readFile, 'foo.txt', 'utf-8')

//-------------------------------------------------

const nfapply = require('q6/nfapply')
const fs = require('fs')

return nfapply(fs.readFile, [ 'foo.txt', 'utf-8' ])
```

#### `ninvoke`/`npost`

If you are working with methods, instead of simple functions, you can easily
run in to the usual problems where passing a method to another function—like
`nfcall`—"un-binds" the method from its owner. To avoid this, you can either
use `Function.prototype.bind` or some nice shortcut methods we provide:

```javascript
const ninvoke = require('q6/ninvoke')
const redis = require('redis')

const redisClient = redis.createClient()

return ninvoke(redisClient, 'get', 'user:1:id')

//-----------------------------------------------

const npost = require('q6/npost')
const redis = require('redis')

const redisClient = redis.createClient()

return npost(redisClient, 'get', [ 'user:1:id' ])
```

#### `denodeify`/`promisify`/`nbind`

You can create reusable wrappers with `denodeify` or `nbind`:

```javascript
const denodeify = require('q6/denodeify')
const fs = require('fs')

const readFile = denodeify(fs.readFile)

return readFile('foo.txt', 'utf-8')

//--------------------------------------------------------

const nbind = require('q6/nbind')
const redis = require('redis')

const redisClient = redis.createClient()
const redisClientGet = nbind(redisClient.get, redisClient)

return redisClientGet('user:1:id')
```

#### `fcall`/`fapply`

```javascript
const fcall = require('q6/fcall')
const fapply = require('q6/fapply')

const sum = (...args) => args.reduce((a, n) => a + n)

fcall(sum, 1, 2, 3)
  .then(console.log) // 6

fapply(sum, [ 1, 2, 3 ])
  .then(console.log) // 6
```

#### `allSettled`

The `Promise.all` function returns a promise for an array of values.  When this
promise is fulfilled, the array contains the fulfillment values of the original
promises, in the same order as those promises.  If one of the given promises
is rejected, the returned promise is immediately rejected, not waiting for the
rest of the batch.  If you want to wait for all of the promises to either be
fulfilled or rejected, you can use `allSettled`:

```javascript
const allSettled = require('q6/all-settled')

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
given promises are rejected:

```javascript
const any = require('q6/any')

const promises = [
  Promise.reject(new Error('Nope...')),
  Promise.resolve('Nice one!'),
  Promise.resolve('Not this one...')
]

any(promises)
  .then(console.log) // 'Nice one!'
```
