class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l=0
        let r=matrix.length * matrix[0].length -1;
        while(l<=r)
        {
            const m=l+Math.floor((r-l)/2);
            const row= Math.floor(m/matrix[0].length);
            const col= m % matrix[0].length;
            if(matrix[row][col]==target) return true;
            else if(matrix[row][col] < target) l=m+1;
            else r=m-1;
        }

        return false
    }
}
