class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack=[];
        for(let i of tokens)
        {
            if(!isNaN(i))
            {
                stack.push(Number(i));
            }
            else{
                const right=stack.pop();
                const left=stack.pop();
                switch(i){
                    case '+':
                        stack.push(left+right);
                        break;
                    case '-':
                        stack.push(left-right);
                        break;
                    case '*':
                        stack.push(left*right);
                        break;
                    case '/':
                        stack.push(Math.trunc(left/right));
                        break;
                }
            }
        }
        return stack.pop();
    }
}
