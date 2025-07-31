/**
 * @param {character[]} chars
 * @return {number}
 */

let compress = (string) => {
  let n = string.length;
  let count = 1;
  let starting = 0;

  for (let i = 1; i <= n; i++) {
    if (i < n && string[i] == string[i - 1]) count++;
    else {
      if (count == 1) string[starting++] = string[i - 1];
      else {
        string[starting++] = string[i - 1];
        let str = count.toString();
        for (let ele of str) {
          string[starting++] = ele;
        }
      }
      count = 1;
    }
  }
  return starting; // if wanna return modifies array, then string.slice(0, starting)
};