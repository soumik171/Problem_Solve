/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// better:
// var setZeroes = function (matrix) {
//   let n = matrix.length;
//   let m = matrix[0].length;

//   let row = new Array(n).fill(0);
//   let col = new Array(m).fill(0);

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (matrix[i][j] == 0) {
//         row[i] = 1; //mark row
//         col[j] = 1; // mark col
//       }
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (row[i] == 1 || col[j] == 1) {
//         matrix[i][j] = 0;
//       }
//     }
//   }
//   return matrix;
// };

// optimal:
var setZeroes = function (matrix) {
  // 1st row = matrix[0][j] = As col are diff in 1st row, so mark col;
  // 1st col = matrix[i][0] = As rows are diff in 1st col, so mark row;
  let n = matrix.length;
  let m = matrix[0].length;

  let col0 = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == 0) {
        // mark ith row
        matrix[i][0] = 0;
        // mark jth col
        if (j !== 0) {
          matrix[0][j] = 0;
        } else {
          col0 = 0;
        }
      }
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] != 0) {
        if (matrix[i][0] == 0 || matrix[0][j] == 0) {
          matrix[i][j] = 0;
        }
      }
    }
  }

  if (matrix[0][0] == 0) {
    for (let j = 0; j < m; j++) {
      matrix[0][j] = 0;
    }
  }
  if (col0 == 0) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
};