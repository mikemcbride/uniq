# uniq

Super fast implementation for removing duplicates from an array.

## Installation

```
npm install --save @mikemcbride/uniq
```

## Usage

```js
const uniq = require('@mikemcbride/uniq')

const arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]
const withoutDuplicates = uniq(arr) // withoutDuplicates = [1,2,3,4,5,6,7,8,9]
```

## Notes

This implementation uses ES6 `Array.from` and `Set`, which allows us to remove duplicates very efficiently. In a number of tests with an array filled with one million random numbers from 1-100, this implementation on average completed in about 40ms or less. Results:

```
Execution time: 40.095653ms
Execution time: 40.20733ms
Execution time: 38.136983ms
Execution time: 37.942224ms
Execution time: 39.117585ms
Execution time: 39.02457ms
```