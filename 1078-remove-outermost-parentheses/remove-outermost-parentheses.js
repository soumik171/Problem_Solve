/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let str = "";
  let cnt = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") cnt++;
    else cnt--;

    if (cnt == 0) {
      str += s.slice(start + 1, i);
      start = i + 1;
    }
  }
  return str;
};