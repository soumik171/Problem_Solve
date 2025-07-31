/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = (str) => {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (i == str.length - 1 || roman[str[i]] >= roman[str[i + 1]]) {
      result += roman[str[i]];
    } else result -= roman[str[i]];
  }
  return result;
};