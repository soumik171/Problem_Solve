/**
 * @param {number} numRows
 * @return {number[][]}
 */

let generateRow = (r) => {
  let res = 1;
  let arr = [];
  arr.push(res);

  for (let i = 1; i < r; i++) {
    res *= r - i;
    res /= i;
    arr.push(res);
  }
  return arr;
};

var generate = function (numsRows) {
  let res = [];
  for (let i = 1; i <= numsRows; i++) {
    res.push(generateRow(i));
  }
  return res;
};
