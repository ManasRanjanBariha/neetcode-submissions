class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice=prices[0];
        let ans=0;
        for(let i=0;i<prices.length;i++)
        {
            let profit=prices[i]-minPrice;
            ans=Math.max(ans,profit);
            minPrice=Math.min(minPrice,prices[i]);
        }
        return ans;
    }
}
