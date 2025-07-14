/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// TC:0(k*n), SC=0(1)

// var rotate = function (nums, k) {
//   while (k--) {
//     let last = nums.pop();
//     nums.unshift(last);
//   }
//   return nums;
// };

// TC:0(n), SC:0(1)

let reverse = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  // No return needed — it modifies the array in-place.
};

var rotate = function (nums, k) {
  let n = nums.length;
  k = k % n;
  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);

//   return nums;
};