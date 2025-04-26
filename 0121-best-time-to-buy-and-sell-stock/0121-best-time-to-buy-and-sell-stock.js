/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let a = 0;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {

        if (prices[a] < prices[i]) {
            profit = prices[i] - prices[a];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            a = i;
        }

    }

    return maxProfit;

};