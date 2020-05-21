const uniq = require('./index.js')

// setup
const arrayWithDuplicates = ['cat', 'dog', 'pig', 'cat', 'monkey', 'pig']

// tests
test('given an array, it returns a new array without duplicate items', () => {
  expect(uniq(arrayWithDuplicates).length).toEqual(4)
})

test('returns a tuple of unique array and removed items when passing optional parameter', () => {
  let [deduped, dupes] = uniq(arrayWithDuplicates, { includeDuplicates: true })
  expect(deduped.length).toEqual(4)
  expect(dupes.length).toEqual(2)
  expect(dupes.includes('cat')).toBe(true)
})
