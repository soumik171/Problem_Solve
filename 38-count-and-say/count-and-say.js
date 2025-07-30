/**
 * @param {number} n
 * @return {string}
 */
// Approch-1:
// var countAndSay = function (n) {
//   if (n == 1) return "1";

//   let prevElement = countAndSay(n - 1);

//   let cnt = 0;
//   let res = [];

//   for (let i = 0; i < prevElement.length; i++) {
//     cnt++;

//     if (i == prevElement.length - 1 || prevElement[i] != prevElement[i + 1]) {
//       res.push(cnt);
//       res.push(prevElement[i]);
//       cnt = 0;
//     }
//   }
//   return res.join("");
// };

// Approch-2:
let countAndSay = (n) => {
  if (n == 1) return "1";

  let prev = countAndSay(n - 1);

  let res = [];
  let cnt = 1;

  for (let i = 1; i <= prev.length; i++) {
    // if start with i=1, then we have to traverse towards to prev.length for calculating the last iteration
    if (prev[i] == prev[i - 1]) cnt++;
    else {
      res.push(cnt, prev[i - 1]);
      cnt = 1;
    }
  }
  return res.join("");
};

