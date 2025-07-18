/**
 * @param {number[]} nums
 * @return {number}
 */
// better:nested for
// var maxSubArray = function (nums) {
//   let maxL = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       maxL = Math.max(maxL, sum);
//     }
//   }
//   return maxL;
// };

// optimal: Kdane's Algorithm[iterate through the array and comapre with maxL & sum<0, then assign sum=0 and continue]

var maxSubArray = function (nums) {
  let sum = 0;
  let maxL = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    maxL = Math.max(maxL, sum);

    if (sum < 0) sum = 0;
  }
  return maxL;
};