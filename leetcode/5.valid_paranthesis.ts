// https://leetcode.com/problems/valid-parentheses/

function isValidParentheses(s: string): boolean {
    const matchingBrackets = new Map<string, string>([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ]);

    const openStack: string[] = [];

    for (let char of s) {
        // If it's a closing bracket
        if (matchingBrackets.has(char)) {
            // Check if it matches the last opening bracket
            if (
                openStack.length > 0 &&
                openStack[openStack.length - 1] === matchingBrackets.get(char)
            ) {
                openStack.pop(); // Match found, pop the stack
            } else {
                return false; // Mismatch, so it's invalid
            }
        } else {
            // If it's an opening bracket, push it to the stack
            openStack.push(char);
        }
    }

    // If the stack is empty, all opening brackets were matched
    return openStack.length === 0;
}
