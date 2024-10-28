// https://leetcode.com/problems/path-sum/description/

// Path-Sum Problem: This approach uses depth-first search (DFS) to find paths, making it well-suited for problems where a sum needs to be tracked down a specific path.
// Recursive Sum Adjustment: By adjusting targetSum with each recursive call, it simplifies the path sum check, avoiding any additional storage for intermediate sums.
// Leaf Node Check: Ensures that only root-to-leaf paths are considered, which is critical for accuracy in path-sum problems.

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
        return false;
    }

    if (!root.left && !root.right) {
        return targetSum - root.val === 0;
    }

    return (
        hasPathSum(root.left, targetSum - root.val) ||
        hasPathSum(root.right, targetSum - root.val)
    );
}
