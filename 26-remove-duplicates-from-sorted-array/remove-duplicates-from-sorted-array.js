/**
 * @param {number[]} nums
 * @return {number}
 */
//using double pointer:

// take i at 0th index and j at 1st index; if arr[j] and arr[i] are different ,if true then insert arr[j] into arr[i+1] and increase the value of i pointer 
var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      nums[i + 1] = nums[j];
      i++;
    }
  }
  return i + 1; // length
};