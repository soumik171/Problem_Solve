/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let open = 0;
  let close = 0;
  let maxLength = 0;

  // forward loop for extra ')' [0 - s.length-1]
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") open++;
    else close++;

    if (open == close) maxLength = Math.max(maxLength, open + close);
    if (close > open) open = close = 0;
  }

  // backward loop for extra '(' [s.length-1 - 0] 
  open = close = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == "(") open++;
    else close++;

    if (open == close) maxLength = Math.max(maxLength, open + close);
    if (open > close) open = close = 0;
  }
  return maxLength;
};