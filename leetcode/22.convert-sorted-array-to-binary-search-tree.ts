// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/

// Height-Balanced BST: A BST is height-balanced if, for every node, the depth difference between its left and right subtrees is at most one.
// Midpoint Selection: For a sorted array, using the midpoint as the root node in each recursive call ensures balanced division, creating a height-balanced BST.
// Recursive Structure: Each subtree is constructed recursively by dividing the array around the middle element to maintain BST properties and balance.
// Efficiency Tip: Avoid slicing arrays by using left and right pointers, which optimizes memory and runtime, especially in recursive solutions.

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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    // Helper function with start and end indices
    function buildBST(left: number, right: number): TreeNode | null {
        if (left > right) return null;

        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(nums[mid]);

        // Recursively build left and right subtrees
        node.left = buildBST(left, mid - 1);
        node.right = buildBST(mid + 1, right);

        return node;
    }

    return buildBST(0, nums.length - 1);
}
