/**
 * @param {string[]} wordsList
 * @return {string[][]}
 */

const sortString = (str) => {
  // Following 2 are the same
  // return str.split('').sort().join("")
  return [...str].sort().join("")
}

const includedInTable = (item, table) => {
  return item in table
}

const groupAnagrams = (wordsList) => {
  let map = {}

  wordsList.forEach((word, index) => {
    let sortedWord = sortString(word)

    if (includedInTable(sortedWord, map)) {
      // If key already exists in Map then push a new item into its value.
      // Example:
      // Previous State -> aet: [eat]
      // Next State -> aet: [eat, tea]
      map[sortedWord].push(word)
    } else {
      // If key does not exists in Map then insert a new one and assign an array to it (with the first value).
      // Example:
      // Previous State -> -
      // Next State -> aet: [eat]
      map[sortedWord] = [word]
    }
  })

  return Object.values(map) // arr
}

const list = ["eat", "tea", "tan", "ate", "nat", "bat"]

console.log(`List: ${list}`)
const result = groupAnagrams(list)
console.log(`Result: ${[...result]}`)
