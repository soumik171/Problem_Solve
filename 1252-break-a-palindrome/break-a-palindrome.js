/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (palindrome) {
  palindrome = Array.from(palindrome); // as string is not mutable, so convert it to array

  let n = palindrome.length;
  if (n == 1) return "";
  for (let i = 0; i < Math.floor(n / 2); i++) {
    // check element !='a' then replace with 'a'
    if (palindrome[i] != "a") {
      palindrome[i] = "a";
      return palindrome.join("");
    }
  }
  //   if all elements are 'a', then replace the last value with 'b'
  palindrome[n - 1] = "b";
  return palindrome.join("");
};