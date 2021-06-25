const { test } = require('uvu')
const assert = require('uvu/assert')
const uniq = require('./index.js')

// setup
const arrayWithDuplicates = ['cat', 'dog', 'pig', 'cat', 'monkey', 'pig']

// tests
test('given an array, it returns a new array without duplicate items', () => {
    const expected = 4
    const value = uniq(arrayWithDuplicates)
    assert.equal(value.length, expected)
})

test('returns a tuple of unique array and removed items when passing optional parameter', () => {
  let [deduped, dupes] = uniq(arrayWithDuplicates, { includeDuplicates: true })
  assert.equal(deduped.length, 4)
  assert.equal(dupes.length, 2)
  assert.equal(dupes.includes('cat'), true)
})

test.run()
