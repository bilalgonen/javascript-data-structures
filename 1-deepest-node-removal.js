const treeObj = {
  value: 5,
  children: [
    {
      value: 6,
      children: [
        {
          value: 7,
        },
      ],
    },
    {
      value: 8,
    },
  ],
}

// dispTreeObj(treeObj)

function dispTreeObj(treeObj, depth = 0) {
  console.log(depth + ' - ' + '  '.repeat(depth) + treeObj.value)
  if (treeObj.children) {
    // depth++
    for (let child of treeObj.children) {
      dispTreeObj(child, depth + 1)
    }
  }
}

class Node {
  constructor(value, depth) {
    this.value = value
    this.children = null
    this.parent = null
    this.depth = depth
  }
  toString() {
    return this.value
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  isEmpty() {
    return this.root === null
  }

  buildTreeFromObj(treeObj) {
    // this.buildTree(treeObj, 0)
    // const node = new Node(treeObj.value, depth)
    this.buildTree(this.root, treeObj, 0)

    // if (this.isEmpty()) {
    //   this.root = node
    // } else {
    //   if (!currNode.children) {
    //     currNode.children = []
    //   }
    //   currNode.children.push(node)
    // }
    // if (treeObj.children) {
    //   for (let child of treeObj.children) {
    //     this.buildTreeFromObj(child, depth + 1)
    //   }
    // }
  }

  buildTree(root, treeObj, depth) {
    console.log(depth + ' - ' + '  '.repeat(depth) + treeObj.value)
    const node = new Node(treeObj.value, depth)
    if (this.isEmpty) {
      this.root = node
    }
    else {
      if (!root.children) {
        root.children = []
      }
      root.children.push(node)
    }

    this.root = node
    if (treeObj.children) {
      root.children = []
      for (let i = 0; i < treeObj.children.length; i++) {
        const child = treeObj.children[i]
        this.buildTree(root.children[i], child, depth + 1)
      }
    }
  }

  addNode(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.root = node
    } else {
      this.children.push(node)
    }
  }

  display() {
    if (this.isEmpty()) {
      return 'Tree empty'
    } else {
      let str = ''
      // console.log(this.root.value)
      str += this.root.value + ' '
      for (let child of this.children) {
        str += child.value + ' '
      }
      return str
    }
  }
}

const tree = new Tree()
tree.buildTreeFromObj(treeObj)

// const tree = new Tree()
// tree.addNode(new Node(5))
// tree.addNode(new Node(6))
// tree.addNode(new Node(7))
// tree.addNode(new Node(8))

// console.log(tree.display())
// console.log(tree.calcDeepestNode())
