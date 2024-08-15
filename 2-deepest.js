// https://www.geeksforgeeks.org/how-to-recursively-build-a-json-tree-structure-in-javascript/

function buildTree(data, parentId = null) {
  let tree = []
  data.forEach((item) => {
    // Check if the item belongs to the current parent
    if (item.parentId === parentId) {
      // Recursively build the children of the current item
      let children = buildTree(data, item.id)
      // If children exist, assign them to the current item
      if (children.length) {
        item.children = children
      }
      // Add the current item to the tree
      tree.push(item)
    }
  })
  return tree
}

const data = [
  { id: 1, parentId: null, name: 'Root' },
  { id: 2, parentId: 1, name: '2' },
  { id: 3, parentId: 2, name: '3' },
  { id: 4, parentId: 1, name: '4' },
]

const tree = buildTree(data)
console.log(JSON.stringify(tree, null, 2))
