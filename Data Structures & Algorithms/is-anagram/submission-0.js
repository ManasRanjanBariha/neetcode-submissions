class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let charAr=new Array(26).fill(0);
        for(let i=0;i<s.length;i++)
        {
            charAr[s[i].charCodeAt(0)-97]++;
            charAr[t[i].charCodeAt(0)-97]--;
        }
        for(let i=0;i<charAr.length;i++)
        {
            if(charAr[i]!==0)
            {
                return false;
            }
        }
        return true;
    }
}
