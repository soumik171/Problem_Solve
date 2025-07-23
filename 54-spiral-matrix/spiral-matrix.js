/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let res = [];
  // row:
  let top = 0;
  let bottom = n - 1;
  // col:
  let left = 0;
  let right = m - 1;

  while (top <= bottom && left <= right) {
    // top left to top right:
    // No need for extra test cases as it already validates while
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    // top right to bottom right:
    // As top increases, so top must be <= to bottom
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    //bottom right to bottom left:
    // As top++, so it might be equals to bottom
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
      bottom--;
    }
    //bottom left to top left:
    // as right--, so it might be possible that right equals to left
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }
  return res;
};