var closeStrings = function (word1, word2) {
  let n1 = word1.length;
  let n2 = word2.length;

  // as length must be same for two strings to be converted
  if (n1 != n2) return false;

  let str1 = new Array(26).fill(0);
  let str2 = new Array(26).fill(0);

  // subtract with 'a' and push that in the newArray & increment that
  // can also be implemented using for of loop
  for (let i = 0; i < n1; i++) {
    str1[word1[i].charCodeAt(0) - "a".charCodeAt(0)]++; // as in js, char is passed as strings, so it has be converted into char and pass them
    str2[word2[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  //   As elemets are same & frequency can be diff, so the position can have diffrent values bt position must be the same for both the str, so check that
  for (let i = 0; i < str1.length; i++) {
    if ((str1[i] == 0 && str2[i] != 0) || (str1[i] != 0 && str2[i] == 0))
      return false;
  }
  // Sort to check the elements of the arr are same or not

  str1.sort((a, b) => {
    return a - b;
  });
  str2.sort((a, b) => {
    return a - b;
  });
  //   str2.sort();

  // check the sorted arr indexwise, if it's matched return true or false
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != str2[i]) return false;
  }
  return true;
};