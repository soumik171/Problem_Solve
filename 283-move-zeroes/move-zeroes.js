/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = -1;
  // find first 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      j = i;
      break;
    }
  }
  // if no 0's found then just return the nums
  if (j == -1) return nums;

  // swap starting from j+1
  for (let i = j + 1; i < nums.length; i++) {
    if (nums[i] != 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
  return nums;
};