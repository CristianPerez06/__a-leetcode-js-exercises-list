/**
 * @param {number} x
 * @return {boolean}
 */

// const isPalindrome = (num) => {
//   const numAsArray = num.toString().split("")
//   const numAsArrayLength = numAsArray.length

//   // Number has only 2 digits
//   if (numAsArrayLength === 2 && numAsArray[0] === numAsArray[1]) {
//     return true
//   }

//   // Number has more than 2 digits
//   if (numAsArrayLength % 2 === 0) {
//     return false
//   }

//   const middleIndex = Math.floor(numAsArrayLength / 2)

//   const firstHalf = numAsArray.slice(0, middleIndex)
//   const secondHalf = numAsArray
//     .slice(middleIndex + 1, numAsArrayLength)
//     .reverse()

//   const itemsInArrayCount = firstHalf.length

//   let index = 0
//   let isPalindrom = true

//   do {
//     const firstHalfItem = firstHalf[index]
//     const secondHalfItem = secondHalf[index]

//     isPalindrom = firstHalfItem === secondHalfItem
//     index++
//   } while (index <= itemsInArrayCount && isPalindrom === true)

//   return isPalindrom
// }

const isPalindrome = (num) => {
  const numStr = num.toString()
  const revNumStr = numStr.split("").reverse().join("")

  return numStr === revNumStr
}

const num = 1234321

console.log(`Num: ${num}`)
const result = isPalindrome(num)
console.log(`Is palindrome: ${result}`)
