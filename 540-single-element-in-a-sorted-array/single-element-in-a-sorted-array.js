/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let len = nums.length;
  if (len == 1) return nums[0];
  if (nums[0] != nums[1]) {
    return nums[0];
  }
  if (nums[len - 1] != nums[len - 2]) {
    return nums[len - 1];
  }

  let low = 1;
  let high = len - 2;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1]) {
      return nums[mid];
    }
    if (
      (mid % 2 == 1 && nums[mid - 1] == nums[mid]) ||
      (mid % 2 == 0 && nums[mid + 1] == nums[mid])
    ) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};