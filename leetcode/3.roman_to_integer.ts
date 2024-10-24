// https://leetcode.com/problems/roman-to-integer/description/

function romanToInt(s: string): number {
    // Map with initialization
    // const romanMap = new Map<string, number>([
    //     ['I', 1],
    //     ['V', 5]
    // ])

    const romanMap: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currValue = romanMap[s[i]];

        if (currValue < prevValue) {
            result -= currValue;
        } else {
            result += currValue;
        }

        prevValue = currValue;
    }

    return result;
}
