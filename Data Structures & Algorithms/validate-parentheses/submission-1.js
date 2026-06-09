class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closed={
            '{':'}',
            '(':')',
            '[':']'
        };
        let stack=[];
        for(let c of s)
        {
            if(Object.hasOwn(closed,c))
            {
                stack.push(c);
            }
            else{
                const top=stack.pop()
                if(c!==closed[top])
                {
                    return false;
                }
            }
        }
        return stack.length ===0 ? true:false;
    }
}
