// https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
    const indexMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];

        if (indexMap.has(compliment)) {
            return [indexMap.get(compliment) as number, i];
        }

        indexMap.set(nums[i], i);
    }

    throw new Error('No two sum solution present.');
}
