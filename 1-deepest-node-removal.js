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

function dispTreeObj(treeObj, depth) {
  // console.log('depth:', depth)
  console.log(depth + ' - ' + '  '.repeat(depth) + treeObj.value)
  if (treeObj.children) {
    depth++
    // console.log('  '.repeat(depth) + treeObj.value)
    for (let child of treeObj.children) {
      dispTreeObj(child, depth)
    }
  }
  // else {
  //   console.log(depth + ' - ' + treeObj.value)
  //   // console.log('  '.repeat(depth) + treeObj.value)
  // }
}

dispTreeObj(treeObj, 0)

class Node {
  constructor(value) {
    this.value = value
    this.children = null
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

// const tree = new Tree()
// tree.addNode(new Node(5))
// tree.addNode(new Node(6))
// tree.addNode(new Node(7))
// tree.addNode(new Node(8))

// console.log(tree.display())
// console.log(tree.calcDeepestNode())
