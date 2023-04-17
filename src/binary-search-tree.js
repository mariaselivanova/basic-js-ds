const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(data) {
    const node = new Node(data)
    if (this.rootNode === null) {
      this.rootNode = node
      return
    } else {
     let current = this.rootNode
     while (current) {
      if (current.data > data) {
        if (!current.left) {
          current.left = node
          return
        } else {
          current = current.left
        }
      } else if (current.data < data) {
        if (!current.right) {
          current.right = node
          return
        } else {
          current = current.right
        }
      }
     }
    }

  }

  has(data) {
    if (!this.rootNode) {
      return false
    }
    let current = this.rootNode
    while (current) {
      if (current.data === data) {
        return true
      } else {
        if (current.data > data) {
          current = current.left
        } else if (current.data < data) {
          current = current.right
        }
      }
    }
    return false
  }

  find(data) {
    let current = this.rootNode
    while (current) {
      if (current.data === data) {
        return current
      } else {
        if (current.data > data) {
          current = current.left
        } else if (current.data < data) {
          current = current.right
        }
      }
    }
    return null
  }

  remove(data) {

  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    let current = this.rootNode;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    let current = this.rootNode;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};