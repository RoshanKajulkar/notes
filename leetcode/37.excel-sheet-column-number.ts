// https://leetcode.com/problems/excel-sheet-column-number/

function titleToNumber(columnTitle: string): number {
  let num = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    num = num * 26 + (columnTitle.charCodeAt(i) - 64);
  }

  return num;
}
