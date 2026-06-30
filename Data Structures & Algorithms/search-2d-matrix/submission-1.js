class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l=0,r=matrix.length * matrix[0].length-1;
        while(l<=r)
        {
            let m=l +Math.floor((r-l)/2);
            let row= Math.floor(m/matrix[0].length);
            let col= m % matrix[0].length;
            if(matrix[row][col]==target) return true;
            else if(matrix[row][col]>target) r=m-1;
            else l=m+1;
        }
        return false;
    }
}
