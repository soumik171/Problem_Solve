/**
 * @param {number[]} nums
 * @return {number}
 */

// better:
// var maxProduct = function (nums) {
//   let maxP = -Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     let product = 1;
//     for (let j = i; j < nums.length; j++) {
//       product *= nums[j];
//       maxP = Math.max(maxP, product);
//     }
//   }
//   return maxP;
// };

// optimal:
var maxProduct = function (nums) {
  let pre = 1;
  let suf = 1;
  let maxP = -Infinity;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (pre == 0) pre = 1;
    if (suf == 0) suf = 1;

    pre *= nums[i]; // iterate 1st to last
    suf *= nums[n-1-i]; // iterate last to 1st
    maxP = Math.max(maxP, Math.max(pre, suf));
  }
  return maxP;
};