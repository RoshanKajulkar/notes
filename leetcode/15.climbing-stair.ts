// https://leetcode.com/problems/climbing-stairs/description/

// recursive with memoization

// Record<number, number> is same as {[key: number]: number}

function climbStairs(n: number, memo: Record<number, number> = {}): number {
  if (n === 1 || n === 2) {
    return n;
  }

  if (memo[n] !== undefined) {
    return memo[n];
  }

  memo[n] = climbStairs(n - 2, memo) + climbStairs(n - 1, memo);
  return memo[n];
}

// Iterative DP Solution

function climbStairs2(n: number): number {
  if (n <= 2) {
    return n;
  }

  let oneStepBefore = 2;
  let twoStepBefore = 1;
  let currentWays = 0;

  for (let i = 3; i <= n; i++) {
    currentWays = oneStepBefore + twoStepBefore;
    twoStepBefore = oneStepBefore;
    oneStepBefore = currentWays;
  }

  return currentWays;
}
