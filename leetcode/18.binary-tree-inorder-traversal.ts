// https://leetcode.com/problems/binary-tree-inorder-traversal/

// Closure: A closure is a function that retains access to its lexical scope, allowing it to remember variables from its enclosing environment even after that scope has finished executing.

// Inorder Traversal: Inorder traversal is a tree traversal method where the nodes are recursively visited in the order: left subtree, root node, and then right subtree, resulting in nodes being processed in non-decreasing order for binary search trees.

// Binary Tree: A binary tree is a hierarchical data structure in which each node has at most two children, referred to as the left and right child, used to efficiently represent and manage data.

// Binary Search Tree (BST): A binary search tree is a type of binary tree that maintains a specific order: for each node, all values in the left subtree are less, and all values in the right subtree are greater, enabling efficient search, insertion, and deletion operations.

// Usage of Inorder Traversal: Inorder traversal is commonly used to retrieve the elements of a binary search tree (BST) in sorted order, which is essential for tasks like searching, sorting, and displaying the data stored in the tree. It can also be utilized for operations like finding the kth smallest/largest element in a BST.

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right),
  ];
}

function inorderTraversal2(root: TreeNode | null): number[] {
  const result: number[] = [];

  function traverse(node: TreeNode | null): void {
    if (!node) return;

    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }

  traverse(root);
  return result;
}

// iterative stack
function inorderTraversal3(root: TreeNode | null): number[] {
  const result: number[] = [];
  const stack: TreeNode[] = [];
  let currentNode: TreeNode | null = root;

  while (currentNode !== null || stack.length > 0) {
    // Reach the leftmost node of the current node
    while (currentNode !== null) {
      stack.push(currentNode); // Push current node to stack
      currentNode = currentNode.left; // Move to the left child
    }

    // Current must be null at this point, pop the stack
    currentNode = stack.pop()!; // Get the last node
    result.push(currentNode.val); // Add the node's value to result

    // Now visit the right subtree
    currentNode = currentNode.right;
  }

  return result;
}
