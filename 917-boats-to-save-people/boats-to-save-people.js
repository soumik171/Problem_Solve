/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people = new Int32Array(people).sort();

  let left = 0;
  let right = people.length - 1;

  let count = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      count++;
      left++;
      right--;
    } else if (people[left] + people[right] > limit) {
      count++;
      right--;
    }
  }
  return count;
};