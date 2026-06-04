class Solution {
    /**
     * @param {number[]}
     * @return {number[][]}
     */
    threeSum(nums) {
        let triplet=[];
        nums.sort((a,b)=>a-b)
        
        for(let i=0;i<nums.length;i++)
        {
           if(nums[i] > 0){ 
            break;
        }
        if(i>0 && nums[i]===nums[i-1])
            {    
                continue;
            }
            let j=i+1;
            let k=nums.length-1;
            while(j<k)
            {
                let sum=nums[i]+nums[j]+nums[k];
                if(sum > 0)
                {
                    k--;
                }
                else if(sum < 0)
                {
                    j++;
                }
                else{
                    triplet.push([nums[i],nums[j],nums[k]])
                    j++;
                    k--;
                    while(j<k && nums[j] ===nums[j-1])
                    {
                        j++;
                    } 
                }
            }
        }
        return triplet;
    }
}