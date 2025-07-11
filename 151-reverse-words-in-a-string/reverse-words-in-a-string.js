/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let temp = s.trim().split(/\s+/);  // using regex so that if contains multiple spaces, then   convert to 1 space between words
  let res = [];
  for (let i = temp.length - 1; i >= 0; i--) {
    res.push(temp[i]);
  }
  return res.join(" ");
};