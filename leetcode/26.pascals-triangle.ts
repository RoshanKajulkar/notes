// https://leetcode.com/problems/pascals-triangle/

function generate(numRows: number): number[][] {
    const results: number[][] = [];

    for (let i = 0; i < numRows; i++) {
        const row: number[] = Array(i + 1).fill(1);

        for (let j = 1; j < i; j++) {
            row[j] = results[i - 1][j - 1] + results[i - 1][j];
        }

        results.push(row);
    }

    return results;
}
