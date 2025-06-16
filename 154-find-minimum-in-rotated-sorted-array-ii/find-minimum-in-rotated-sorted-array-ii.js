/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let res = Infinity;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] == nums[low] && nums[mid] == nums[high]) {
      res = Math.min(res, nums[mid]);
      low++;
      high--;
      continue;
    }
    //check for left sorted:
    if (nums[low] <= nums[mid]) {
      res = Math.min(res, nums[low]); //only take the lowest value and eliminate remaining elements
      low = mid + 1;
    } else {
      res = Math.min(res, nums[mid]);
      high = mid - 1;
    }
  }
  return res;
};