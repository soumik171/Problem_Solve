/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let conc1 = 0;
  let conc2 = 0;
  for (let ele of word1) {
    conc1 += ele;
  }
  for (let ele of word2) {
    conc2 += ele;
  }
  return conc1 == conc2;
};