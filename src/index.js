import { makeContext } from 'airbitz-core-js'
import crypto from 'crypto'
import { makeNodeFolder } from 'disklet'
import fetch from 'node-fetch'

function random (bytes) {
  return crypto.randomBytes(bytes)
}

/**
 * Creates the io resources needed to run the Airbitz core on node.js.
 *
 * @param {string} path Location where data should be written to disk.
 */
export function makeNodeIo (path) {
  return {
    console,
    fetch,
    folder: makeNodeFolder(path),
    random
  }
}

/**
 * Creates an Airbitz context for use on node.js.
 *
 * @param {{ path?: string }} opts Options for creating the context,
 * including the `path` where data should be written to disk.
 */
export function makeNodeContext (opts = {}) {
  const { path = './airbitz' } = opts
  opts.io = makeNodeIo(path)
  return makeContext(opts)
}
