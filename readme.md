# Airbitz Node.js IO depdendencies

This library creates an `io` object with all the depenencies needed to run [`airbitz-core-js`](https://github.com/Airbitz/airbitz-core-js) on Node.js.

Use it like this:

```javascript
import { makeNodeContext } from 'airbitz-io-node-js'

const context = makeNodeContext({
  apiKey: '...',
  appId: '...',
  path: '/path/for/saving/data'
})
```

The Airbitz core will save all login data under the provided `path` option.

There is also a standalone `makeNodeIo(path: string)` function if you would like to inspect or modify the `io` object before passing it to the core's `makeContext` function.
