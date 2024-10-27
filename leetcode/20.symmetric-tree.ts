// https://leetcode.com/problems/symmetric-tree/

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
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number;
 *     left: TreeNode | null;
 *     right: TreeNode | null;
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val === undefined ? 0 : val);
 *         this.left = (left === undefined ? null : left);
 *         this.right = (right === undefined ? null : right);
 *     }
 * }
 */

function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
  // Base cases for recursion
  if (!left && !right) return true; // Both are null, so symmetric
  if (!left || !right) return false; // One is null, the other is not

  // Check if current nodes are equal and recurse for children
  return (
    left.val === right.val && // Values must match
    isMirror(left.left, right.right) && // Left of left with right of right
    isMirror(left.right, right.left) // Right of left with left of right
  );
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true; // An empty tree is symmetric
  return isMirror(root.left, root.right); // Compare left and right subtrees
}

// iterative solution using queue
function isSymmetric2(root: TreeNode | null): boolean {
  if (!root) return true; // An empty tree is symmetric

  const queue: (TreeNode | null)[] = [root.left, root.right];

  while (queue.length > 0) {
    const left = queue.shift()!;
    const right = queue.shift()!;

    if (!left && !right) continue; // Both are null, symmetric
    if (!left || !right) return false; // One is null, not symmetric

    if (left.val !== right.val) return false; // Values must match

    // Enqueue children in a way that maintains symmetry
    queue.push(left.left, right.right);
    queue.push(left.right, right.left);
  }

  return true; // All comparisons passed
}
