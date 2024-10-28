// https://leetcode.com/problems/single-number/description/

function singleNumber(nums: number[]): number {
    let uniqueNum = 0;

    for (let num of nums) {
        uniqueNum ^= num;
    }

    return uniqueNum;
}
