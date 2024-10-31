// https://leetcode.com/problems/reverse-bits/

function reverseBits(n: number): number {
    // Convert the number to a 32-bit binary string and pad with leading zeros
    const binaryString = n.toString(2).padStart(32, '0');

    // Reverse the binary string
    const reversedBinary = binaryString.split('').reverse().join('');

    // Convert the reversed binary string back to an integer
    return parseInt(reversedBinary, 2);
}

// using bit manipulation
// Key Intuition
// Left shift (result <<= 1) is like adding an empty slot for the next bit in result.
// AND with 1 (n & 1) extracts the last bit of n.
// OR with |= adds this extracted bit into the result.
// Right shift (n >>>= 1) moves n to the next bit, preparing it for the next iteration.

// return result >>> 0;: This line ensures that the result is treated as an unsigned 32-bit integer.

// Why? In JavaScript, bitwise operations treat numbers as signed 32-bit integers, but we want the result to be unsigned.
// The >>> 0 operation makes sure result is treated as a positive integer by dropping any potential negative sign.

// >>> 0 doesn’t alter the actual value of non-negative numbers but will convert negative numbers to their 32-bit unsigned equivalent.
function reverseBits2(n: number): number {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        result <<= 1; // Step 1
        result |= n & 1; // Step 2
        n >>>= 1; // Step 3
    }

    return result >>> 0;
}
