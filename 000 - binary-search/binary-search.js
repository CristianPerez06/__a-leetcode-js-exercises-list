const binarySearch = (list, elemToFind) => {
  var start = 0
  var end = list.length - 1
  var middle = Math.floor((start + end) / 2)
  while (list[middle] !== elemToFind && start <= end) {
    if (elemToFind < list[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }
  return list[middle] === elemToFind ? middle : -1
}

const numbers = [2, 5, 6, 9, 13, 15, 28, 30]
const elem = 6

console.log(`Nums: ${numbers}`)
console.log(`Target: ${elem}`)
const res = binarySearch(numbers, elem)
console.log(`Result: ${res}`)
