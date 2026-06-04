class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let map=new Map();
        for(let i=0;i<numbers.length;i++)
        {
            let comp=target-numbers[i];
            if(map.has(comp))
            {
                return [map.get(comp),i+1];
            }
            map.set(numbers[i],i+1);
        }
        return [];
    }

}
