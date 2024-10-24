// https://leetcode.com/problems/longest-common-prefix/

// Function to find the longest common prefix between two strings
function findCommonPrefix(str1: string, str2: string): string {
    let commonPrefix = '';
    const minLength = Math.min(str1.length, str2.length);

    // Compare characters of both strings until mismatch or end of the shortest string
    for (let i = 0; i < minLength; i++) {
        if (str1[i] === str2[i]) {
            commonPrefix += str1[i];
        } else {
            break; // Stop comparison at the first mismatch
        }
    }

    return commonPrefix;
}

// Function to find the longest common prefix in an array of strings
function getLongestCommonPrefix(strings: string[]): string {
    // Edge case: Return empty string if array is empty
    if (strings.length === 0) return '';

    // Start with the first string as the initial common prefix
    let currentPrefix = strings[0];

    // Compare the current prefix with each string in the array
    for (let i = 1; i < strings.length; i++) {
        currentPrefix = findCommonPrefix(currentPrefix, strings[i]);

        // If at any point the prefix becomes empty, return immediately
        if (currentPrefix === '') {
            return '';
        }
    }

    return currentPrefix;
}
