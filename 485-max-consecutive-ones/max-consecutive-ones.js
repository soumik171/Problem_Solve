/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let cnt = 0;
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      cnt++;
      res = Math.max(res, cnt);
    } else {
      cnt = 0;
    }
  }
  return res;
};