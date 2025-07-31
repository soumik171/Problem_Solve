/**
 * @param {number} num
 * @return {string}
 */
let intToRoman = (num) => {
  let store = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };
  // Obj always keeps data in sorted order,if i am changing randomly,also it's sorted it's data, as we require large to small, so we iterate the keys to large to small

  let res = "";
  for (let key of Object.keys(store).sort((a, b) => b - a)) {
    key = Number(key);
    let times = Math.floor(num / key);

    // while (times--) {
    //   res += store[key];
    // }
    // num = num % key;
    // or,

    //if using repeat, then no need to use outside while loop, cz it's alreadykeep iterating till the number of times

    if (times > 0) {
      res += store[key].repeat(times);
      num = num % key;
    }
  }
  return res;
};


