// https://leetcode.com/problems/plus-one/

function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  // If all digits were 9, insert 1 at the beginning
  digits.unshift(1);
  return digits;
}
