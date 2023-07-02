/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices?.length || prices.length === 1) return 0;

  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice =  prices[i];
      continue;
    }

    const profit = -minPrice + prices[i];

    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
};

console.log(maxProfit([7,1, 2, 3, 9, 1]));
