/**
 * @param {number[]} nums
 * @return {number[]}
 */
// brute: tc[0(n+n/2)], sc[0(n)]
// var rearrangeArray = function (nums) {
//   let n = nums.length;
//   let pos = []; // size=n/2
//   let neg = []; // size=n/2

//   for (let i = 0; i < n; i++) {
//     if (nums[i] > 0) pos.push(nums[i]);
//     else neg.push(nums[i]);
//   }
//   for (let i = 0; i < n / 2; i++) {
//     nums[2 * i] = pos[i];
//     nums[2 * i + 1] = neg[i];
//   }

//   return nums;
// };


//optimal:2 pointer tc[0(n)], sc[0(n)]
var rearrangeArray = function (nums) {
  let res = [];
  let pos = 0;
  let neg = 1;

  for (let i = 0; i < nums.length; i++) {
    // if pos, store it in pos postition of the res array and increment pos by 2
    if (nums[i] > 0) {
      res[pos] = nums[i];
      pos += 2;
    }
    // if neg, store it in neg postition of the res array and increment neg by 2
    else {
      res[neg] = nums[i];
      neg += 2;
    }
  }
  return res;
};