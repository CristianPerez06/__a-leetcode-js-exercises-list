/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// const twoSum = (nums, target) => {
//   let set = new Set()

//   let len = nums.length
//   for (let i = 0; i < len; i++) {
//     let item = nums[i]

//     if (set.has(item)) return [i, nums.indexOf(target - item)].sort()
//     else set.add(target - item)
//   }
// }

const twoSum = (nums, target) => {
  let possiblePairValues = new Set()
  const pairValueIndexes = []

  nums.forEach((num, index) => {
    if (possiblePairValues.has(num)) {
      const pairValue = target - num
      const pairValueIndex = nums.indexOf(pairValue)

      pairValueIndexes.push([index, pairValueIndex].sort())
    } else {
      const possiblePairValue = target - num
      possiblePairValues.add(possiblePairValue)
    }
  })

  return pairValueIndexes.flatMap((item) => item)
}
