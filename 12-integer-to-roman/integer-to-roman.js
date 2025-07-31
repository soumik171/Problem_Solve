let intToRoman = (num) => {
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let res = "";
  for (let i = 0; i < val.length; i++) {
    let times = Math.floor(num / val[i]);

    while (times--) {
      res += roman[i];
    }
    num = num % val[i];
  }
  return res;
};