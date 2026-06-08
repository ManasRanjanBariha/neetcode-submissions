class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area=0;
        let l=0;
        let r=heights.length-1;
        while(l<r)
        {
            area=Math.max(area,Math.min(heights[l],heights[r])*(r-l))
            if(heights[l]<=heights[r])
            {
                l++;
            }
            else{
                r--;
            }
        }
        return area;

    }
}
