// https://leetcode.com/problems/binary-tree-preorder-traversal/description/

// Preorder Traversal: Visits nodes in the order: root, left, right. It is ideal for tasks requiring root-to-leaf paths or when processing root nodes before their children.

// Iterative Approach: Uses a stack to emulate recursion. Push right child before left to process left subtree first.

// Usage: Helpful in serialization/deserialization of trees, prefix expressions, and tasks where the root node requires processing before children.

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// recursive
function preorderTraversal(root: TreeNode | null): number[] {
  const preOrderRes: number[] = [];

  function findPreorder(root: TreeNode | null) {
    if (!root) {
      return;
    }

    preOrderRes.push(root.val);

    findPreorder(root.left);
    findPreorder(root.right);
  }

  findPreorder(root);

  return preOrderRes;
}

// iterative

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const result: number[] = [];
  const stack: (TreeNode | null)[] = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    if (node) {
      result.push(node.val);

      stack.push(node.right);
      stack.push(node.left);
    }
  }

  return result;
}
