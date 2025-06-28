/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = (prices) => {
  let minVal = Infinity;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    minVal = Math.min(minVal, prices[i]);
    if (prices[i] > minVal) {
      profit = Math.max(prices[i] - minVal, profit);
    }
  }
  return profit;
};