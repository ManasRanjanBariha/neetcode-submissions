class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group=new Map();
        for(let str of strs)
        {
            const charAr=new Array(26).fill(0);
            for(let i=0;i<str.length;i++)
            {
                charAr[str.charCodeAt(i)-'a'.charCodeAt(0)]++;
            }
            const key=charAr.join('#');
            if(!group.has(key))
            {
                group.set(key,[]);
            }
            group.get(key).push(str);
        }
        return [...group.entries()].map(x=>x[1]);
    }
}
