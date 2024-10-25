// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0; // Edge case for an empty array

    let uniquePtr = 1; // Points to the next position for a unique number

    // Traverse the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[uniquePtr] = nums[i];
            uniquePtr++;
        }
    }

    return uniquePtr; // Return the number of unique elements
}
