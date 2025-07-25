/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// brute:nested for
// var threeSum = function (nums) {
//   let n = nums.length;
//   let res = [];
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       for (let k = j + 1; k < n; k++) {
//         if (nums[i] + nums[j] + nums[k] == 0) {
//           let temp = [nums[i], nums[j], nums[k]];
//           temp.sort((a, b) => {
//             return a - b;
//           });
//           res.push(temp);
//         }
//       }
//     }
//   }
//   let st = new Set(res.map(JSON.stringify)); // convert ele of res into string & then pass it to set
//   res = Array.from(st).map(JSON.parse); // after set, convert it from string to int

//   return res;
// };

// optimal:2 pointer
var threeSum = function (nums) {
  let n = nums.length;
  let res = [];

  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < n; i++) {
    // remove duplicates
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) j++;
      else if (sum > 0) k--;
      else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        // skip duplicates
        while (j < k && nums[j] == nums[j - 1]) j++;
        while (j < k && nums[k] == nums[k + 1]) k--;
      }
    }
  }
  return res;
};