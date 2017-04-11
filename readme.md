# Airbitz Node.js IO depdendencies

This library creates an `io` object with all the depenencies needed to run [`airbitz-core-js`](https://github.com/Airbitz/airbitz-core-js) on Node.js.

Use it like this:

```js
import { makeContext } from 'airbitz-core-js'
import { makeNodeIo } from 'airbitz-io-node-js'

const context = makeContext({
  apiKey: '...',
  appId: '...',
  io: makeNodeIo('/path/for/saving/data')
})
```

The Airbitz core will save all login data under the provided path.
