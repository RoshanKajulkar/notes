// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

function strStr(haystack: string, needle: string): number {
    //  return haystack.indexOf(needle); :)

    // Iterate through haystack with a window size equal to needle length
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        // Extract the current substring from haystack
        const window = haystack.substring(i, i + needle.length);

        // Compare with needle
        if (window === needle) {
            return i;
        }
    }

    // If needle not found, return -1
    return -1;
}
