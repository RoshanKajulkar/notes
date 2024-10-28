// leetcode.com/problems/valid-palindrome/description/

// Regular expressions (regex) are powerful tools used for searching and manipulating strings based on specific patterns. In the context of the "Valid Palindrome" problem, we use a regex to filter out non-alphanumeric characters from the string. Let’s break down the regex used in the solution:

// The Regex: /[^a-zA-Z0-9]/g
// Slashes /.../: The regex pattern is enclosed within slashes. This is a standard way to denote a regex in JavaScript and TypeScript.

// Square Brackets [...]: Square brackets are used to define a character class, which matches any one of the characters included in the brackets.

// Caret ^: When placed at the beginning of a character class (inside the square brackets), the caret negates the character class. In this case, [^...] matches any character that is NOT listed in the brackets.

// Character Range:

// a-z: Matches any lowercase letter from 'a' to 'z'.
// A-Z: Matches any uppercase letter from 'A' to 'Z'.
// 0-9: Matches any digit from '0' to '9'.
// Combining Them: The full regex [^a-zA-Z0-9] matches any character that is NOT a lowercase letter, an uppercase letter, or a digit. This effectively means it will match any special characters or whitespace.

// Global Flag g: The g at the end of the regex stands for "global". This flag indicates that the regex should search for all matches in the string, not just the first one. This is important because we want to remove all instances of non-alphanumeric characters, not just the first one encountered.

https: function isPalindrome(s: string): boolean {
    // Normalize the string: filter non-alphanumeric and convert to lowercase
    const filteredString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Two pointers to check for palindrome
    let left = 0;
    let right = filteredString.length - 1;

    while (left < right) {
        if (filteredString[left] !== filteredString[right]) {
            return false; // Not a palindrome
        }
        left++;
        right--;
    }

    return true; // It's a palindrome
}
