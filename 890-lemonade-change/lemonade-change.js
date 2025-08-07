/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let dollar5 = 0;
  let dollar10 = 0;

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] == 5) dollar5++;
    else if (bills[i] == 10) {
      dollar10++;
      if (dollar5 > 0) dollar5--;
      else return false;
    } else if (bills[i] == 20) {
      if ((dollar5 > 0) && (dollar10 > 0)) {
        dollar10--;
        dollar5--;
      } 
      else if (dollar5 >= 3) dollar5 -= 3
      else return false;
    }
  }
  return true;
};