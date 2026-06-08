class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set=new Set();
        let l=0;
        let ans=0;
        for(let r=0;r<s.length;r++)
        {
            while(set.has(s[r]))
            {
                set.delete(s[l]);
                l++;
            }
            ans=Math.max(ans,r-l+1);
            set.add(s[r]);
        }
        return ans;
    }
    
}
