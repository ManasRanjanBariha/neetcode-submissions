class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str="";
        for(let c of s)
        { 
            if(/[a-zA-Z0-9]/.test(c))
            {
                str+=c.toLowerCase();
            }
        }
        let l=0,r=str.length-1;
        while(l<r)
        {
            if(str[l]!==str[r])
            {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
