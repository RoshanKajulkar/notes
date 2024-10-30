// https://leetcode.com/problems/excel-sheet-column-title/description/

function convertToTitle(columnNumber: number): string {
  let title = "";

  while (columnNumber > 0) {
    // Since Excel columns are 1-based, we need to adjust for 'Z' by decrementing columnNumber by 1.
    columnNumber--;
    let remainder = columnNumber % 26;
    title = String.fromCharCode(65 + remainder) + title; // 'A' is 65 in ASCII
    columnNumber = Math.floor(columnNumber / 26);
  }

  return title;
}
