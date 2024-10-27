// https://leetcode.com/problems/merge-sorted-array/

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let ptr = nums1.length - 1;

  while (i >= 0 && j >= 0) {
    if (nums2[j] >= nums1[i]) {
      nums1[ptr] = nums2[j];
      j--;
    } else {
      nums1[ptr] = nums1[i];
      i--;
    }
    ptr--;
  }

  while (j >= 0) {
    nums1[ptr] = nums2[j];
    ptr--;
    j--;
  }
}
