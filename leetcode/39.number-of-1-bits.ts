// https://leetcode.com/problems/number-of-1-bits/

// Hamming Weight: Measures the number of 1 bits in a binary representation, useful in contexts like error detection and compression.
// Zero-Fill Shift (>>>= 1): Ensures unsigned right shifting, particularly useful to handle bits in non-negative ranges for numbers in JavaScript.

function hammingWeight(n: number): number {
    let count = 0;

    while (n !== 0) {
        const lastBit = n & 1;

        if (lastBit === 1) {
            count++;
        }

        n >>>= 1;
    }

    return count;
}
