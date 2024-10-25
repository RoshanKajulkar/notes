// https://leetcode.com/problems/length-of-last-word/

function lengthOfLastWord(s: string): number {
    // return s.trim().split(" ").pop().length; :)

    let ptr = s.length - 1;
    let lastWordLen = 0;

    while (ptr >= 0) {
        if (s[ptr] === ' ' && lastWordLen !== 0) {
            return lastWordLen;
        }

        if (s[ptr] !== ' ') {
            lastWordLen++;
        }

        ptr--;
    }

    return lastWordLen;
}
