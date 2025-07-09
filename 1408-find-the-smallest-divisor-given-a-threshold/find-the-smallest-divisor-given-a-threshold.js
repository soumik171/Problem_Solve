/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
let maxE = (arr) => {
  let maxele = 0;
  for (let i = 0; i < arr.length; i++) {
    maxele = Math.max(maxele, arr[i]);
  }
  return maxele;
};

let sumDiv = (arr, divisor) => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += Math.ceil(arr[i] / divisor);
  }
  return res;
};
var smallestDivisor = function (nums, threshold) {
  let low = 1;
  let high = maxE(nums);
  let res = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (sumDiv(nums, mid) <= threshold) {
      res = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return res;
};