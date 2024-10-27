// https://leetcode.com/problems/same-tree/

// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

// recursive solution

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  }

  if (!p || !q) {
    return false;
  }

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
}

// iterative solution

function isSameTree2(p: TreeNode | null, q: TreeNode | null): boolean {
  const stack: [TreeNode | null, TreeNode | null][] = [[p, q]];

  while (stack.length > 0) {
    const [node1, node2] = stack.pop()!;

    if (!node1 && !node2) continue; // Both nodes are null
    if (!node1 || !node2 || node1.val !== node2.val) return false; // One is null or values differ

    // Push children to the stack for comparison
    stack.push([node1.left, node2.left]);
    stack.push([node1.right, node2.right]);
  }

  return true; // All nodes matched
}
