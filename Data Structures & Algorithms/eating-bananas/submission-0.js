class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left=1;
        let right=Math.max(...piles);
        while(left <=right){
            let mid=Math.floor((right+left)/2);
            let hour=0;

            for (const pile of piles){
                hour+= Math.ceil(pile/mid);
            }
            if(hour<=h)
            {
                right=mid-1;
            }
            else{
                left=mid+1;
            }
        }
        return left;
    }
}
