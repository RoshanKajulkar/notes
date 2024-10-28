// https://leetcode.com/problems/balanced-binary-tree/description/

// Balanced Tree Condition: A tree is balanced if the height difference between any node’s left and right subtrees is at most 1.
// Efficient Depth Check: Calculating depth while checking for balance reduces redundant calculations.
// Early Exit: Returning -1 when an imbalance is detected helps optimize performance by exiting early.

function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    const maxLeftDepth = maxDepth(root.left);
    if (maxLeftDepth === -1) {
        return -1; // Left subtree is unbalanced
    }

    const maxRightDepth = maxDepth(root.right);
    if (maxRightDepth === -1) {
        return -1; // Right subtree is unbalanced
    }

    if (Math.abs(maxLeftDepth - maxRightDepth) > 1) {
        return -1; // Current node is unbalanced
    }

    return Math.max(maxLeftDepth, maxRightDepth) + 1; // Balanced, so return the actual depth
}

function isBalanced(root: TreeNode | null): boolean {
    return maxDepth(root) !== -1;
}
