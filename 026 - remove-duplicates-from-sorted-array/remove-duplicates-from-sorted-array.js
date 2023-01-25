// Time Complexity O(n)
// Space Complexity O(1)

const removeDuplicates = (nums) => {
  let pointer = 0

  for (let index = 1; index < nums.length; index++) {
    const currentIndexNum = nums[index]
    const currentPointerNum = nums[pointer]

    if (currentIndexNum != currentPointerNum) {
      // Add 1 to Pointer
      pointer++
      // Overwrite duplicated value with the next one valid
      // Example:
      // Previous state = [...7,7,8...]
      // Next     state = [...7,7,8...]
      //  -> nums[pointer] = 7 (the duplicated one) and nums[index] = 8
      nums[pointer] = nums[index]
    }
  }

  return nums.length ? pointer + 1 : 0
}

const list = [1, 2, 3, 3, 4, 5, 6, 7, 7, 8]

console.log(`List: ${list}`)
const result = removeDuplicates(list)
console.log(`Result: ${result}`)
