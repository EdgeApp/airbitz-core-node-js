import crypto from 'crypto'
import { makeNodeFolder } from 'disklet'
import fetch from 'node-fetch'

function random (bytes) {
  return crypto.randomBytes(bytes)
}

export function makeNodeIo (path) {
  return {
    console,
    fetch,
    folder: makeNodeFolder(path),
    random
  }
}
