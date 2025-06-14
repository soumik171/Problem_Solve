/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 let uppBou = (arr, k) => {
  let low = 0;
  let high = arr.length - 1;
  let res = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > k) {
      res = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return res;
};

let lowBou = (arr, k) => {
  let low = 0;
  let high = arr.length - 1;
  let res = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= k) {
      res = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return res;
};
var searchRange = function(nums, target) {
    let lb=lowBou(nums,target)
    let ub=uppBou(nums,target)
    if(lb == nums.length || nums[lb] != target) return [-1,-1]
    return [lb, ub-1]
};