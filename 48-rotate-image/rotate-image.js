/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//  brute:
// var rotate = function (matrix) {
//   let n = matrix.length;

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       // identify the position in which, data will be updated
//       matrix[j][n - i - 1] = matrix[i][j];
//     }
//   }
//   return matrix;
// };

// optimal: transpose the matrix and then rotate eash row
var rotate = function (matrix) {
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // starts with i+1 cz,
      // transpose:
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // reverse each row:
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
//   return matrix;
};