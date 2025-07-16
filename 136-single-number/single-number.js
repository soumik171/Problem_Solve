/**
 * @param {number[]} nums
 * @return {number}
 */
// brute: double loop 0(n*n)
// better: hashmap 0(3n)
// optimal: xor 0(n),0(1) 
var singleNumber = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }
  return xor;
};