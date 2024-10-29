// https://leetcode.com/problems/binary-tree-postorder-traversal/

// Postorder Traversal: Visits nodes in the order: left, right, root. It ensures all child nodes are processed before their parent node.

// Iterative Approach: Typically uses two stacks (or a modified single stack) to achieve left-right-root order, simulating recursion.

// Usage: Useful for deleting or freeing tree nodes and in scenarios where dependencies need to be processed before the parent, such as expression trees or dependency graphs.

// recursive
function postorderTraversal(root: TreeNode | null): number[] {
  const postOrderRes: number[] = [];

  function findPostOrder(root: TreeNode | null) {
    if (!root) {
      return;
    }

    findPostOrder(root.left);
    findPostOrder(root.right);

    postOrderRes.push(root.val);
  }

  findPostOrder(root);

  return postOrderRes;
}

// iterative

function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const result: number[] = [];
  const stack: TreeNode[] = [root];

  // Traverse nodes in reverse postorder (root-right-left)
  while (stack.length > 0) {
    const node = stack.pop();
    if (node) {
      result.push(node.val);
      // Push left first so right is processed before left
      stack.push(node.left);
      stack.push(node.right);
    }
  }

  // Reverse result to get left-right-root order
  return result.reverse();
}
