// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// brute force
function maxProfit(prices: number[]): number {
    let maxSum = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] > prices[i]) {
                maxSum = Math.max(prices[j] - prices[i], maxSum);
            }
        }
    }

    return maxSum;
}

// optimized O(n)
function maxProfit2(prices: number[]): number {
    let maxProfit = 0;
    let minPrice = Infinity;

    for (let price of prices) {
        // Update the minimum price
        if (price < minPrice) {
            minPrice = price;
        }
        // Calculate profit if sold at current price
        const profit = price - minPrice;
        // Update max profit if current profit is greater
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
}
