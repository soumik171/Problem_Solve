/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let gL = g.length; // for g length
  let sL = s.length; // for s length

  //   g.sort((a, b) => a - b);
  //   s.sort((a, b) => a - b);

  // using unit32Array to sort faster(only for intergers, make a copy & use that)
  g = new Uint32Array(g).sort();
  s = new Uint32Array(s).sort();

  let gP = 0; // for g pointer
  let sP = 0; // for s pointer

  let count = 0; // for counting maximum of cookies that can assign to the children

  //   As we have to assign cookies to the children, so we have to traverse through the s[]
  while (sP < sL && gP < gL) {
    if (s[sP] >= g[gP]) {
      count++;
      gP++;
    }
    sP++;
  }
  return count;
};