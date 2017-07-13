/**
 * @flow
 */

import Server from '../src'

describe('decorator test', () => {
  test('to be defined', () => {
    @Server()
    class TestServer {}
    expect(Server).toBeDefined()
  })
})
