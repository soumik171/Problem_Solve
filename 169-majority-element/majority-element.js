/**
 * @param {number[]} nums
 * @return {number}
 */
// brute:
// let majorityElement = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let cnt = 0;
//     let ele = arr[i];
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] == ele) cnt++;
//       if (cnt > arr.length / 2) return ele;
//     }
//   }
// };


// better:hashing

// let majorityElement = (arr) => {
//   let hash = {};
//   for (let i = 0; i < arr.length; i++) {
//     hash[arr[i]] = (hash[arr[i]] || 0) + 1;
//     if (hash[arr[i]] > arr.length / 2) return arr[i];
//   }
//   return -1;
// };

// optimal:Moore's Voting Algorithm

let majorityElement = (arr) => {
  let ele;
  let cnt = 0;
  // Apply moore's  to find the max time occuring element
  for (let i = 0; i < arr.length; i++) {
    if (cnt == 0) {
      ele = arr[i];
      cnt++;
    } else if (arr[i] == ele) cnt++;
    else {
      cnt--;
    }
  }
  // count the ele
  let cntt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ele) cntt++;
  }
  if (cntt > arr.length / 2) return ele;

  return -1;
};