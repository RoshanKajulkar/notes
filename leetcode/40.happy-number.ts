// https://leetcode.com/problems/happy-number/description/

// pending - time complexity and space complexity

function isHappy(n: number): boolean {
    const visitedNum: Record<number, number> = {};
    while (n !== 1) {
        let newNum = 0;
        while (n !== 0) {
            const lastDigit = n % 10;
            newNum += lastDigit * lastDigit;
            n = Math.floor(n / 10);
        }

        n = newNum;

        if (visitedNum[n]) {
            return false;
        } else {
            visitedNum[n] = 1;
        }
    }

    return true;
}

// Floyd's Cycle Detection
function isHappy2(n: number): boolean {
    // Helper function to calculate the next number in the sequence
    const getNext = (num: number): number => {
        let totalSum = 0;
        while (num > 0) {
            const digit = num % 10;
            totalSum += digit * digit;
            num = Math.floor(num / 10);
        }
        return totalSum;
    };

    let slow = n;
    let fast = getNext(n);

    // Continue until fast pointer meets slow pointer, or fast reaches 1
    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow); // Move slow pointer by one step
        fast = getNext(getNext(fast)); // Move fast pointer by two steps
    }

    return fast === 1;
}
