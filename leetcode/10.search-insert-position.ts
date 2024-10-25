// https://leetcode.com/problems/search-insert-position/description/

function searchInsert(nums: number[], target: number): number {
    let leftPtr = 0;
    let rightPtr = nums.length - 1; // Right pointer should initially be at last index

    while (leftPtr <= rightPtr) {
        const mid = Math.floor((leftPtr + rightPtr) / 2);

        if (target === nums[mid]) {
            return mid;
        }

        if (target > nums[mid]) {
            leftPtr = mid + 1;
        } else {
            rightPtr = mid - 1;
        }
    }

    return leftPtr;
}
