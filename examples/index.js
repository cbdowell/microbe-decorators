/**
 * @flow
 */

import { Server } from '..'

@Server()
export default class MyServer {
  constructor () {
    console.log('MyServer: constructor(): creating...')
  }
}
