class Node {
  constructor() {
    this.key = 0
    this.left = null
    this.right = null
  }
}

// Utility function to create a new node
const createNode = (key) => {
  let n = new Node()

  n.key = key
  n.left = null
  n.right = null

  return n
}

// Function to find the height(depth) of the tree
const maxDepth = (root) => {
  if (!root) return 0
  return 1 + Math.max(maxDepth(root.right), maxDepth(root.left))
}

// Binary Tree example
//        1
//      2   3
// 4 null   null 5
let root = createNode(1)
root.left = createNode(2)
root.right = createNode(3)

root.left.left = createNode(4)
root.left.right = createNode(5)

console.log(`Binary tree depth: ${maxDepth(root)}`)
