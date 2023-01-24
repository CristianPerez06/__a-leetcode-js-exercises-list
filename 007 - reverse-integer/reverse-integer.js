/**
 * @param {number} x
 * @return {number}
 */

// const reverse = x =>  {
//   let result =
//     x > -1
//       ? parseInt(x.toString().split('').reverse().join(''))
//       : -parseInt(x.toString().split('').reverse().join(''))
//   return Math.abs(result) < 2 ** 31 ? result : 0
// }

const reverseInteger = (number) => {
  const isNegative = number < 0

  const str = number.toString().replace("-", "")
  const reversedStr = str.split("").reverse().join("")

  const reversedNumber = isNegative
    ? -parseInt(reversedStr)
    : parseInt(reversedStr)

  const maxValue = 2 ** 31

  const result = Math.abs(reversedNumber) < maxValue ? reversedNumber : 0

  return result
}

const numberToReverse = 2101

console.log(numberToReverse)
const reversedNumber = reverseInteger(numberToReverse)
console.log(reversedNumber)
