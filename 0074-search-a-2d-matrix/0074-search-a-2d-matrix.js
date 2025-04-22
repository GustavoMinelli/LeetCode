/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    const rows = matrix.length;
    const cols = matrix[0].length;

    let top = 0, bottom = rows - 1;

    while (top <= bottom) {
        let midRow = Math.floor((top + bottom) / 2);
        
        if (target < matrix[midRow][0]) {
            bottom = midRow - 1;
        } else if (target > matrix[midRow][cols - 1]) {
            top = midRow + 1;
        } else {

            let left = 0, right = cols - 1;
            while (left <= right) {

                let midCol = Math.floor((left + right) / 2);

                if (matrix[midRow][midCol] === target) {
                    return true;
                }
                
                if (matrix[midRow][midCol] < target) {
                    left = midCol + 1;
                } else {
                    right = midCol - 1;
                }
            }

            return false;
            
        }
    }

    return false;
};