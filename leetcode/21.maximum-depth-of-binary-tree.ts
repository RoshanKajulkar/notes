// https://leetcode.com/problems/maximum-depth-of-binary-tree/

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

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

// iterative solution

function maxDepth2(root: TreeNode | null): number {
  if (!root) return 0; // If the tree is empty, return depth as 0

  let queue: [TreeNode | null, number][] = [[root, 1]]; // Queue to hold nodes and their depth
  let maxDepth = 0;

  while (queue.length > 0) {
    const [node, depth] = queue.shift()!; // Get the front node and its depth

    if (node) {
      maxDepth = Math.max(maxDepth, depth); // Update max depth if needed

      // Enqueue left and right children with incremented depth
      queue.push([node.left, depth + 1]);
      queue.push([node.right, depth + 1]);
    }
  }

  return maxDepth; // Return the maximum depth found
}
