module.exports = function (arr, opts = {}) {
  if (opts.includeDuplicates === true) {
    let dupes = new Set()
    let deduped = new Set()

    for (let item of arr) {
      if (deduped.has(item)) {
        dupes.add(item)
      } else {
        deduped.add(item)
      }
    }
    return [Array.from(deduped), Array.from(dupes)]
  }
  return Array.from(new Set(arr))
}