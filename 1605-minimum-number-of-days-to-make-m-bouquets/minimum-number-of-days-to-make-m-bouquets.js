/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
// finding min element

let minElem = (arr) => {
  let minE = Infinity;
  for (let i = 0; i < arr.length; i++) {
    minE = Math.min(minE, arr[i]);
  }
  return minE;
};
// finding max element

let maxElem = (arr) => {
  let maxE = 0;
  for (let i = 0; i < arr.length; i++) {
    maxE = Math.max(maxE, arr[i]);
  }
  return maxE;
};

let checkBouqueCompletion = (arr, day, m, k) => {
  let cnt = 0;
  let cntBouque = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= day) {
      cnt++;
    } else {
      cntBouque += Math.floor(cnt / k);
      cnt = 0;
    }
  }
  cntBouque += Math.floor(cnt / k);
  return cntBouque;
};
var minDays = function (bloomDay, m, k) {

  if (m * k > bloomDay.length) return -1;

  let low = minElem(bloomDay);
  let high = maxElem(bloomDay);
  let minDays = Infinity; // can store anything like 0,...

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (checkBouqueCompletion(bloomDay, mid, m, k) >= m) {
      minDays = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return minDays;
};