// https://leetcode.com/problems/majority-element/description/

// LeetCode 169: Majority Element
// Problem: Given an array `nums`, find the element that appears more than `n / 2` times.

// Solution 1: Frequency Map (Hash Map)
// In this approach, we use a hash map to count occurrences of each element.
// As we iterate through the array, we update the count of each element in the map.
// When an element's count exceeds `n / 2`, we return it immediately as the majority element.
// This solution has a time complexity of O(n) and a space complexity of O(n).
function majorityElement(nums: number[]): number {
  const minCount = Math.floor(nums.length / 2);
  const freqMap: Record<number, number> = {};

  for (let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
    if (freqMap[num] > minCount) return num;
  }
}

// Solution 2: Boyer-Moore Voting Algorithm
// The Boyer-Moore Voting Algorithm is based on the property that the majority element
// appears more than `n / 2` times, meaning it cannot be completely canceled out by other elements.
// We use a `candidate` variable to store a potential majority element and a `count` variable to keep track of its balance.
// Initially, both are set to zero. As we iterate through the array, if the count is zero, we set the current element as the `candidate`.
// For each occurrence of `candidate`, we increase `count`; for any different element, we decrease `count`.
// By the end of the iteration, the remaining `candidate` will be the majority element.
// This solution has a time complexity of O(n) and a space complexity of O(1).
function majorityElement2(nums: number[]): number {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }

  return candidate!;
}

// Summary: The frequency map approach is straightforward but requires additional space,
// while the Boyer-Moore algorithm is optimal in terms of space complexity
// and efficiently "cancels out" non-majority elements to find the answer.
