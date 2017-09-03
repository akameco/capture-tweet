// @flow
const cap = require('.')

const timeout = 10000

test(
  'return beffer',
  async () => {
    const tweet = 'https://twitter.com/akameco/status/903892994998153216'
    const buffer = await cap(tweet)
    expect(Buffer.isBuffer(buffer)).toBe(true)
  },
  timeout
)

test(
  'return beffer',
  async () => {
    expect.assertions(1)
    // $FlowFixMe
    await cap().catch(err => {
      expect(err.message).toBe('required url')
    })
  },
  timeout
)
