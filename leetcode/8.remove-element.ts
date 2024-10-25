// https://leetcode.com/problems/remove-element/

function removeElement(nums: number[], val: number): number {
    let writePointer = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[writePointer] = nums[i];
            writePointer++;
        }
    }

    return writePointer;
}
