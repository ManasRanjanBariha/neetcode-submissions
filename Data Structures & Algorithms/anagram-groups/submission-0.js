class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let ans=new Map();

        for(let i=0;i<strs.length;i++)
        {
            const charArray=new Array(26).fill(0);
            for(let c of strs[i])
            {
                charArray[c.charCodeAt(0)-'a'.charCodeAt(0)]++;
            }
            let key=charArray.join('#')
            if(!ans.has(key))
            {

                ans.set(key,[])
            }
            ans.get(key).push(strs[i]);
        }
        return [...ans.entries()].map((x)=>x[1]);
    }
}
