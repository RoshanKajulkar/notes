// https://leetcode.com/problems/palindrome-number/description/

function isPalindrome(x: number): boolean {
    const originalNum = x;

    if (x < 0) {
        return false;
    }

    let revNum = 0;

    while (x !== 0) {
        const lastDigit = x % 10;
        revNum = revNum * 10 + lastDigit;
        x = Math.floor(x / 10);
    }

    return originalNum === revNum;
}
