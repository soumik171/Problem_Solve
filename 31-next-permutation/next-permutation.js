/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// brute:
// 1.print all the permutations 2.linear search for the given arr and return the imeediate next arr

// optimal:
var nextPermutation = function (nums) {
  let dip = -1;
  // find the dip
  for (let i = nums.length - 2; i >= 0; i--) {
    //as compare with the immediate nxt ele,so starting from n-2
    if (nums[i] < nums[i + 1]) {
      dip = i;
      break;
    }
  }
  // swap with least max than dip
  for (let i = nums.length - 1; i >= dip; i--) {
    if (nums[i] > nums[dip]) {
      [nums[i], nums[dip]] = [nums[dip], nums[i]];
      break;
    }
  }
  // sort after the dip
  start = dip + 1;
  end = nums.length - 1;

  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
//   return nums;
};