/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
let maxInt = (arr) => {
  let maxRes = 0;
  for (let i = 0; i < arr.length; i++) {
    maxRes = Math.max(maxRes, arr[i]);
  }
  return maxRes;
};

let calcTotalHours = (piles, perHour) => {
  let calcResult = 0;
  for (let i = 0; i < piles.length; i++) {
    calcResult += Math.ceil(piles[i] / perHour);
  }
  return calcResult;
};
var minEatingSpeed = function (piles, h) {
  let low = 1;
  let high = maxInt(piles);
  let result = Infinity;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let totalhrs = calcTotalHours(piles, mid);
    if (totalhrs <= h) {
      result = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return result;
};