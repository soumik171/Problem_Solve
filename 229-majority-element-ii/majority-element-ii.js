/**
 * @param {number[]} nums
 * @return {number[]}
 */
// better:
// var majorityElement = function (nums) {
//   let res = [];
//   let hash = {};

//   for (let i = 0; i < nums.length; i++) {
//     hash[nums[i]] = (hash[nums[i]] || 0) + 1;
//     if (hash[nums[i]] > Math.floor(nums.length / 3) && !res.includes(nums[i])) {
//       // as there's more than one ele, so have to check if it exits in the array or not
//       res.push(nums[i]);
//     }
//   }

//   return res;
// };

// optimal:Moore's Voting algorithm

var majorityElement = function (nums) {
  // Take 2 elem & cnt for iteration, if cnt1=0 and it's not pointing to elem2, then cnt1++, & if cnt2=0 and it's not pointing to elem1, then cnt2++
  let ele1 = -Infinity;
  let ele2 = -Infinity;
  let cnt1 = 0;
  let cnt2 = 0;

  for (let i in nums) {
    if (cnt1 == 0 && nums[i] != ele2) {
      ele1 = nums[i];
      cnt1++;
    } else if (cnt2 == 0 && nums[i] != ele1) {
      ele2 = nums[i];
      cnt2++;
    } else if (nums[i] == ele1) cnt1++;
    else if (nums[i] == ele2) cnt2++;
    else {
      cnt1--;
      cnt2--;
    }
  }
  let res = [];
  // we are using the same counter, that declared before, as it's no longer be used
  cnt1 = 0;
  cnt2 = 0;

  let n = Math.floor(nums.length);

  for (let i in nums) {
    if (nums[i] == ele1) cnt1++;
    else if (nums[i] == ele2) cnt2++;
  }
  if (cnt1 > n / 3) res.push(ele1);
  if (cnt2 > n / 3) res.push(ele2);

  return res;
};