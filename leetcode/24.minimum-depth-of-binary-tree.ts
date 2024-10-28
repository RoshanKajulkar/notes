// https://leetcode.com/problems/minimum-depth-of-binary-tree/description/

function minDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    const leftDepth = minDepth(root.left);
    const rightDepth = minDepth(root.right);

    if (leftDepth !== 0 && rightDepth !== 0) {
        return Math.min(leftDepth, rightDepth) + 1;
    }

    return leftDepth === 0 ? rightDepth + 1 : leftDepth + 1;
}
